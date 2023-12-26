from . import database
import psycopg2

def getAllStatus():
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                id_status,
                nama_status
            FROM
                fast_print_status
        """)

        data = cur.fetchall()

        return {
            "success": True,
            "data": data
        }
    except psycopg2.Error as error:
        return {
            "success": False,
            "message": error.pgerror,
        }