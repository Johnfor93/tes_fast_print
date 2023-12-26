from flask import (
    Flask, request, Blueprint, current_app, make_response, jsonify, send_file, render_template
)
from models import produk
from models import kategori
from models import status

app = Flask(__name__)

@app.route("/")
def dashboard():
    responseProduk = produk.getAllProduct(1,10, "")
    if(responseProduk["success"] == True):
        dataProduk = responseProduk["data"]
    else:
        dataProduk = []
    
    return render_template("index.html", dataProduk = dataProduk)

@app.route("/products")
def getProduk():
    page = request.args.get('pages', default=1, type=int)
    limit = request.args.get('limit', default=10, type=int)
    filter = request.args.get('filter', default='', type=str)
    data = produk.getAllProduct(page, limit, filter)
    return make_response(data, 200)

@app.route("/statusandkategori")
def getStatusAndKategori():
    dataStatus = status.getAllStatus()
    dataKategori = kategori.getAllKategori()
    if(dataStatus["success"]==True):
        statusData = dataStatus["data"]
    else:
        return make_response(jsonify({
            "success": False,
            "message": "Data status tidak dapat diambil"
        }), 400)

    if(dataKategori["success"]==True):
        kategoriData = dataKategori["data"]
    else:
        return make_response(jsonify({
            "success": False,
            "message": "Data kategori tidak dapat diambil"
        }), 400)

    return make_response(jsonify({
        "success": True,
        "status": statusData,
        "kategori": kategoriData
    }), 200)

@app.route("/produk/<id>")
def getOneProduk(id):
    data = produk.getOneProduct(id)
    if(data["success"] == True):
        dataProduk = data["data"][0]
    else:
        return make_response(data, 400)
    
    return make_response(jsonify({
        "success": True,
        "data" :dataProduk}), 200)

@app.route("/edit/produk/<id>", methods=["PUT"])
def editProduk(id):
    content = request.form

    # Validate each input

    # Save on database -> call model editProduk
    databaseResponse = produk.editProduk(id, content)
    return make_response(databaseResponse, 200)

@app.route("/delete/produk/<id>", methods=["DELETE"])
def deleteProduk(id):
    # Save on database -> call model deleteProduk
    databaseResponse = produk.deleteProduk(id)
    return make_response(databaseResponse, 200)

@app.route("/create/produk", methods=["POST"])
def insertProduk():
    content = request.form

    # Validate each input

    # Save on database -> call model insertProduk
    databaseResponse = produk.insertProduk(content)
    return make_response(databaseResponse, 200)