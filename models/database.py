import os
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    try:
        conn = psycopg2.connect(
            # host = os.environ.get("DB_HOST"), 
            host = "localhost", 
            port = "5432",
            database = "tes_fast_print", 
            # database = os.environ.get("DB_NAME"), 
            user = os.environ.get("DB_USERNAME"), 
            password = os.environ.get("DB_PASS"),
            cursor_factory=RealDictCursor
        )
        return conn
    except psycopg2.Error as error:
        print(error)
