import os

from reportlab.lib.colors import black, darkblue, red, green
from scipy.constants import inch
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import pandas as pd
from pymongo import MongoClient
import joblib
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib import colors


mongo_uri = "mongodb+srv://user:user@cluster0.sg7pzny.mongodb.net/sustainability_Level?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(mongo_uri)
db = client['sustainability_Level']
collection = db['levels']



def evaluate_metric(metric, value):

    high_good = {
        'green_purchase': True,
        'electricity_consumption': False,
        'water_usage': False,
        'carbon_footprint': False,
        'waste_recycling_rate': True,
        'waste_reduction_rate': True,
        'use_of_toxic_materials': False,
        'employee_well_being': True,
        'labor_practices': True,
        'community_engagement': True,
        'supply_chain_ethics': True,
        'financial_performance': True
    }

    good = high_good[metric]


    thresholds = {
        'green_purchase': 100,

    }

    threshold = thresholds.get(metric, 40)


    if good:
        return value >= threshold
    else:
        return value <= threshold
def fetch_and_evaluate_sustainability(user_id):

    records = list(collection.find({"userid": str(user_id)}))
    df = pd.DataFrame(records)
    print(df)

    if df.empty:
        print("No data found for user ID:", user_id)
        return df

    excluded_columns = ['_id', 'userid', 'date', 'evidence_image_filename']

    for col in df.columns:
        if col not in excluded_columns:
            df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

    df['sustainability_evaluation'] = df.apply(
        lambda row: {metric: evaluate_metric(metric, row[metric])
                     for metric in df.columns if metric not in excluded_columns}, axis=1)

    return df[['userid', 'date', 'sustainability_evaluation']]


def generate_sustainability_report(evaluation_df, user_id, file_path, logo_path):
    c = canvas.Canvas(file_path, pagesize=letter)
    c.setTitle(f'Sustainability Report for User {user_id}')

    def add_header(canvas, y_position):
        if logo_path:
            canvas.drawImage(logo_path, 200, y_position, width=1.5*inch, height=0.75*inch, preserveAspectRatio=True, anchor='nw')

        canvas.setFont("Helvetica-Bold", 14)
        canvas.setFillColor(darkblue)
        canvas.drawString(2*inch, y_position, f'Sustainability Report for User ID: {user_id}')


    y_position = 750

    for index, row in evaluation_df.iterrows():
        if y_position < 100:
            c.showPage()
            y_position = 750
            add_header(c, 760)


        date = row['date']
        sustainability_evaluation = row['sustainability_evaluation']


        improvements = [metric for metric, is_good in sustainability_evaluation.items() if not is_good]
        good_practices = [metric for metric, is_good in sustainability_evaluation.items() if is_good]


        c.setStrokeColor(darkblue)
        c.line(50, y_position, 550, y_position)
        y_position -= 20

        c.setFont("Helvetica", 12)
        c.setFillColor(black)
        c.drawString(70, y_position, f"Date: {date}")


        y_position -= 30
        c.setFillColor(red)
        c.drawString(50, y_position, "Areas needing improvement:")
        c.setFont("Helvetica", 11)  # Smaller font for list items
        y_position -= 15


        for area in improvements:
            c.setFillColor(black)
            c.drawString(70, y_position, f"- {area.replace('_', ' ').capitalize()}")
            y_position -= 15


        y_position -= 30  
        c.setFillColor(green)
        c.drawString(50, y_position, "Areas doing well:")
        y_position -= 15

        # List good practices
        for area in good_practices:
            c.setFillColor(black)
            c.drawString(70, y_position, f"- {area.replace('_', ' ').capitalize()}")
            y_position -= 15


        y_position -= 25

    c.showPage()
    c.save()



def report(user_id):
    evaluation_df = fetch_and_evaluate_sustainability(user_id)
    print(evaluation_df.to_string())
    file_path = os.path.join('uploads', f'sustainability_report_{user_id}.pdf')
    generate_sustainability_report(evaluation_df, user_id, file_path, "logo.png")


