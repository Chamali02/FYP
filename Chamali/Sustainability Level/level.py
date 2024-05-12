from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import pandas as pd
from pymongo import MongoClient
import joblib



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
        'green_purchase': 70,

    }

    threshold = thresholds.get(metric, 50)


    if good:
        return value >= threshold
    else:
        return value <= threshold



def fetch_and_evaluate_sustainability(user_id):
    records = list(collection.find({"userid": user_id}))
    df = pd.DataFrame(records)


    df['date'] = pd.to_datetime(df['date'], errors='coerce')


    metric_columns = [col for col in df.columns if col not in ['_id', 'userid', 'date', 'evidence_image_filename']]


    df[metric_columns] = df[metric_columns].apply(pd.to_numeric, errors='coerce').fillna(0)


    df['sustainability_evaluation'] = df.apply(
        lambda row: {metric: evaluate_metric(metric, row[metric]) for metric in metric_columns}, axis=1)

    return df[['userid', 'date', 'sustainability_evaluation']]


def calculate_sustainability_level(evaluations):


    evaluations['date'] = pd.to_datetime(evaluations['date'])
    latest_entry = evaluations.loc[evaluations['date'].idxmax()]

    latest_sustainability_score = sum(latest_entry['sustainability_evaluation'].values()) / 12 * 10
    return latest_entry['userid'], latest_entry['date'], latest_sustainability_score


def create_collection(client):
    """Creates a collection in the database if it doesn't already exist."""
    db = client['sustainability_Level']
    return db['sustainability_level']


def insert_document(collection, document_data):
    """Inserts a single document into the collection."""
    return collection.insert_one(document_data)


def main(id, level,companyName):
    collection = create_collection(client)


    query = {'id': id}


    new_values = {
        '$set': {
            'id': id,
            'rate': level,
            'companyName': companyName
        }
    }


    result = collection.update_one(query, new_values, upsert=True)

    if result.matched_count:
        print(f"Document with id {id} updated.")
    else:
        print(f"New document created with id {id}.")




def level(user_id, companyName):
    evaluation_df = fetch_and_evaluate_sustainability(user_id)

    userid, date, sustainability_level = calculate_sustainability_level(evaluation_df)
    print(date)
    main(user_id, sustainability_level, companyName)

    print(f"User ID: {user_id}, Date: {date.date()}, Sustainability Level: {sustainability_level:.2f}")