from . import database
import psycopg2

def getAllProduct(page=1, limit=10, filter=""):
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()

        print(type(filter))

        likeTemplate = '%'+filter+'%'
        print(likeTemplate)

        cur.execute("""
            SELECT
                id_produk,
                nama_produk,
                nama_kategori,
                harga,
                nama_status
            FROM
                fast_print_produk
                INNER JOIN fast_print_kategori ON fast_print_produk.kategori_id = fast_print_kategori.id_kategori
                INNER JOIN fast_print_status ON fast_print_produk.status_id = fast_print_status.id_status
            WHERE
                status_id LIKE %s
            LIMIT %s OFFSET %s
        """, (likeTemplate, limit, (page-1)*limit))

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
    
def getOneProduct(id):
    try:
        print("id masuk produk = ", id)
        conn = database.get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT
                id_produk,
                nama_produk,
                nama_kategori,
                harga,
                nama_status
            FROM
                fast_print_produk
                INNER JOIN fast_print_kategori ON fast_print_produk.kategori_id = fast_print_kategori.id_kategori
                INNER JOIN fast_print_status ON fast_print_produk.status_id = fast_print_status.id_status
            WHERE
                id_produk = %s
        """, (id,))

        data = cur.fetchall()
        print(data)

        return {
            "success": True,
            "data": data
        }
    except psycopg2.Error as error:
        print(error)
        return {
            "success": False,
            "message": error.pgerror,
        }
    
def insertProduk(content):
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()
        print(content)

        cur.execute("""
            SELECT
                CONCAT('P',LPAD(CAST(COALESCE(CAST(MAX(RIGHT(id_produk,4)) AS INT)+1,1) AS VARCHAR),4,'0')) as id_produk
            FROM
                fast_print_produk
            WHERE
                id_produk LIKE CONCAT('P','%')
            """)
        data = cur.fetchone()
        id_produk = data["id_produk"]

        cur.execute("""
            INSERT INTO fast_print_produk
            VALUES (%s, %s, %s, %s, %s)
        """, (id_produk, content["nama"], content["harga"], content["kategori"], content["status"],))

        print(id_produk)

        conn.commit()
        cur.close()
        conn.close()

        return {
            "success": True,
            "message": "Data telah dimasukkan"
        }
    except psycopg2.Error as error:
        print(error)
        return {
            "success": False,
            "message": error.pgerror,
        }
    
def editProduk(id, content):
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            UPDATE fast_print_produk
            SET 
                nama_produk = %s,
                harga = %s,
                kategori_id = %s, 
                status_id = %s
            WHERE id_produk = %s    
        """, (content["nama"], content["harga"], content["kategori"], content["status"], id,))

        conn.commit()
        cur.close()
        conn.close()

        return {
            "success": True,
            "message": "Data telah diedit"
        }
    except psycopg2.Error as error:
        print(error)
        return {
            "success": False,
            "message": error.pgerror,
        }
    
def deleteProduk(id):
    try:
        conn = database.get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            DELETE FROM fast_print_produk
            WHERE id_produk = %s    
        """, (id,))

        conn.commit()
        cur.close()
        conn.close()

        return {
            "success": True,
            "message": "Data telah diedit"
        }
    except psycopg2.Error as error:
        return {
            "success": False,
            "message": error.pgerror,
        }