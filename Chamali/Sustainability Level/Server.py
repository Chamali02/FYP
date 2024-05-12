from pymongo import MongoClient
from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from level import level
from report import report
from cetificate import  add_text_to_pdf
from image_check import detect_green_color
app = Flask(__name__, static_folder='uploads')
db_name = 'sustainability_Level'

mongo_uri = f"mongodb+srv://user:user@cluster0.sg7pzny.mongodb.net/sustainability_Level?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(mongo_uri)
db = client[db_name]

collection = db["levels"]

app.config['uploads'] = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/submit', methods=['POST'])
def submit_data():

    form_data = {}


    expected_fields = [
        'green_purchase',
        'electricity_consumption',
        'water_usage',
        'carbon_footprint',
        'waste_recycling_rate',
        'waste_reduction_rate',
        'use_of_toxic_materials',
        'employee_well_being',
        'labor_practices',
        'community_engagement',
        'supply_chain_ethics',
        'financial_performance',
        'date',
        'userid'


    ]


    for field in expected_fields:
        if field not in request.form:
            return jsonify(error=f"Missing {field} value"), 400
        form_data[field] = request.form[field]


    if 'evidence_image' not in request.files:
        return jsonify(error="No evidence_image part"), 400
    file = request.files['evidence_image']


    if file.filename == '':
        return jsonify(error="No selected file"), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['uploads'], filename))
        print(filename)
        if detect_green_color("uploads/"+filename) == True:
            form_data['evidence_image_filename'] = filename
        else:
            return jsonify(error="No trees in the image"), 400



    else:
        return jsonify(error="Invalid file extension"), 400

    document = form_data
    result = collection.insert_one(document)
    document['_id'] = result.inserted_id
    document['_id'] = str(document['_id'])


    print(form_data)
    return jsonify(form_data), 200




@app.route('/report', methods=['GET'])
def reportGenarate():
    print("hello")
    return 200




@app.route('/update_level', methods=['POST'])
def get_userid():
    if request.is_json:
        data = request.get_json()
        userid = data.get('userid')
        companyName = data.get('companyName')

        if userid:
            try:
                level(userid, companyName)  # Assuming this function might throw an exception
                return jsonify({'status': 'success', 'userid': userid}), 200
            except Exception as e:
                # Log the exception if needed
                print(f"Error processing level: {str(e)}")
                return jsonify({'status': 'failed', 'error': str(e)}), 500

        else:
            return jsonify({'status': 'error', 'message': 'userid not provided'}), 400
    else:
        return jsonify({'status': 'error', 'message': 'Request must be JSON'}), 415

@app.route('/sustainability_report_<userid>.pdf')
def download_report(userid):
    return send_from_directory(app.static_folder, f'sustainability_report_{userid}.pdf')


@app.route('/<userid>.pdf')
def download(userid):
    return send_from_directory(app.static_folder, f'{userid}.pdf')



@app.route('/get_report', methods=['POST'])
def get_report():
    if request.is_json:
        data = request.get_json()
        userid = data.get('userid')
        if userid:
            report(userid)
            return jsonify({'status': 'success', 'userid': userid}), 200
        else:
            return jsonify({'status': 'error', 'message': 'userid not provided'}), 400
    else:
        return jsonify({'status': 'error', 'message': 'Request must be JSON'}), 415


@app.route('/get_rate', methods=['GET'])
def get_rate():
    collection = db["sustainability_level"]

    userid = request.args.get('userid')
    if not userid:
        return jsonify({"error": "Missing userid"}), 400

    document = collection.find_one({"id": userid})
    if document:

        return jsonify({"rate": document.get("rate")}), 200
    else:

        return jsonify({"error": "User not found"}), 404


@app.route('/certificate', methods=['POST'])
def get_certificate_report():
    collection = db['sustainability_level']

    if request.is_json:
        data = request.get_json()
        userid = data.get('userid')
        company_name = data.get('companyName')

        if not userid or not company_name:
            return jsonify({'status': 'error', 'message': 'Missing userid or companyName'}), 400


        result = collection.find_one({'id': userid, 'companyName': company_name})

        if result:
            rate = result.get('rate', None)
            if rate is not None:

                rate = float(rate)  
                if 1 <= rate < 4:
                    pdf_file = 'pdf/beginner.pdf'
                    add_text_to_pdf(pdf_file, "uploads/" + userid + ".pdf", company_name)

                elif 4 <= rate < 8:
                    pdf_file = 'pdf/beginner.pdf'
                    add_text_to_pdf(pdf_file, "uploads/" + userid + ".pdf", company_name)

                elif 8 <= rate <= 10:
                    pdf_file = 'pdf/expert.pdf'
                    add_text_to_pdf(pdf_file, "uploads/" + userid + ".pdf", company_name)

                else:
                    return jsonify({'status': 'error', 'message': 'Rate out of expected range'}), 400


            return jsonify({
                'status': 'success',
                'userid': userid,
                'companyName': company_name,
                'sustainabilityLevel': result.get('rate', 'No rating available')
            }), 200
        else:
            return jsonify({'status': 'error', 'message': 'No data found for provided credentials'}), 404
    else:
        return jsonify({'status': 'error', 'message': 'Request must be JSON'}), 415


if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)


