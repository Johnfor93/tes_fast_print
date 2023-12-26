CREATE TABLE fast_print_kategori(
    id_kategori VARCHAR(40) PRIMARY KEY NOT NULL,
    nama_kategori VARCHAR(80)
);

CREATE TABLE fast_print_status(
    id_status VARCHAR(40) PRIMARY KEY NOT NULL,
    nama_status VARCHAR(80)
);

CREATE TABLE fast_print_produk(
    id_produk VARCHAR(40) PRIMARY KEY NOT NULL,
    nama_produk VARCHAR(255),
    harga int,
    kategori_id VARCHAR(40),
    status_id VARCHAR(40),
    FOREIGN KEY (kategori_id) REFERENCES fast_print_kategori(id_kategori),
    FOREIGN KEY (status_id) REFERENCES fast_print_status(id_status)
);

INSERT INTO fast_print_status VALUES ('1', 'bisa dijual');
INSERT INTO fast_print_status VALUES ('2', 'tidak bisa dijual');

INSERT INTO fast_print_kategori VALUES ('1', 'L QUEENLY');
INSERT INTO fast_print_kategori VALUES ('2', 'L MTH AKSESORIS (IM)');
INSERT INTO fast_print_kategori VALUES ('3', 'L MTH TABUNG (LK)');
INSERT INTO fast_print_kategori VALUES ('4', 'SP MTH SPAREPART (LK)');
INSERT INTO fast_print_kategori VALUES ('5', 'CI MTH TINTA LAIN (IM)');
INSERT INTO fast_print_kategori VALUES ('6', 'S MTH STEMPEL (IM)');
INSERT INTO fast_print_kategori VALUES ('7', 'L MTH AKSESORIS (LK)');

INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('6', 'ALCOHOL GEL POLISH CLEANSER GP-CLN01', '12500', '1', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('9', 'ALUMUNIUM FOIL ALL IN ONE BULAT 23mm IM', '1000', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('11', 'ALUMUNIUM FOIL ALL IN ONE BULAT 30mm IM', '1000', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('12', 'ALUMUNIUM FOIL ALL IN ONE SHEET 250mm IM', '12500', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('15', 'ALUMUNIUM FOIL HDPE/PE BULAT 23mm IM', '12500', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('17', 'ALUMUNIUM FOIL HDPE/PE BULAT 30mm IM', '1000', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('18', 'ALUMUNIUM FOIL HDPE/PE SHEET 250mm IM', '13000', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('19', 'ALUMUNIUM FOIL PET SHEET 250mm IM', '1000', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('22', 'ARM PENDEK MODEL U', '13000', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('23', 'ARM SUPPORT KECIL', '13000', '3', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('24', 'ARM SUPPORT KOTAK PUTIH', '13000', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('26', 'ARM SUPPORT PENDEK POLOS', '13000', '3', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('27', 'ARM SUPPORT S IM', '1000', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('28', 'ARM SUPPORT T (IMPORT)', '13000', '2', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('29', 'ARM SUPPORT T - MODEL 1 ( LOKAL )', '10000', '3', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('50', 'BLACK LASER TONER FP-T3 (100gr)', '13000', '2', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('56', 'BODY PRINTER CANON IP2770', '500', '4', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('58', 'BODY PRINTER T13X', '15000', '4', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('59', 'BOTOL 1000ML BLUE KHUSUS UNTUK EPSON R1800/R800 - 4180 IM (T054920)', '10000', '5', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('60', 'BOTOL 1000ML CYAN KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4120 IM (T054220)', '10000', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('61', 'BOTOL 1000ML GLOSS OPTIMIZER KHUSUS UNTUK EPSON R1800/R800/R1900/R2000/IX7000/MG6170 - 4100 IM (T054020)', '1500', '5', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('62', 'BOTOL 1000ML L.LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0599 IM', '1500', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('63', 'BOTOL 1000ML LIGHT BLACK KHUSUS UNTUK EPSON 2400 - 0597 IM', '1500', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('64', 'BOTOL 1000ML MAGENTA KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4140 IM (T054320)', '1000', '5', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('65', 'BOTOL 1000ML MATTE BLACK KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 3503 IM (T054820)', '1500', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('66', 'BOTOL 1000ML ORANGE KHUSUS UNTUK EPSON R1900/R2000 IM - 4190 (T087920)', '1500', '5', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('67', 'BOTOL 1000ML RED KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4170 IM (T054720)', '1000', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('68', 'BOTOL 1000ML YELLOW KHUSUS UNTUK EPSON R1800/R800/R1900/R2000 - 4160 IM (T054420)', '1500', '5', '2');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('70', 'BOTOL KOTAK 100ML LK', '1000', '7', '1');
INSERT INTO fast_print_produk (id_produk, nama_produk, harga, kategori_id, status_id) VALUES ('72', 'BOTOL 10ML IM', '1000', '6', '2');
