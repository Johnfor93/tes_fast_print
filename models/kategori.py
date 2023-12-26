from . import database
import psycopg2

def getAllKategori():
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                id_kategori,
                nama_kategori
            FROM
                fast_print_kategori
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