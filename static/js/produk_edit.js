async function EditModal(produk_code) {
  const response = await fetch(`/produk/${produk_code}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status == 401) {
    window.alert("Session anda habis. Silakan login kembali!");
    window.location.href = "/login";
  }

  const data = await response.json();
  const dataProduk = data.data;
  console.log(dataProduk);

  const statusResponse = await fetch(`/statusandkategori`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataStatus = await statusResponse.json();
  const status = dataStatus.status;
  const kategori = dataStatus.kategori;

  let html = `<div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <div class="d-flex justify-content-between w-100">
      <div class="btn" id="modal-title">Edit Produk</div>
      <div class="btn" onclick="closeModal()">X</div>
    </div>
  </div>`;

  html += `
    <div class="modal-body" id="modal-body">
    <form action="edit/produk/${produk_code}" enctype="multipart/form-data" id="editProdukForm">
        <div class="form-group mb-2">
            <label for="nama">Nama Produk</label>
            <input type="text" class="form-control" id="nama" name="nama" required/>
        </div>
        <div class="form-group mb-2">
            <label for="harga">Harga Produk</label>
            <input type="number" class="form-control" id="harga" name="harga" required/>
        </div>
        <div class="form-group mb-2">
            <label for="kategori">Kategori</label>
            <select class="form-control" id="kategori" name="kategori">`;
  for (let i = 0; i < kategori.length; i++) {
    html += `
      <option ${dataProduk.nama_kategori == kategori[i].nama_kategori && "selected"} value="${kategori[i].id_kategori}">${kategori[i].nama_kategori}</option>
    `;
  }
  html += `</select>
        </div>
        <div class="form-group mb-2">
            <label for="status">Status</label>
            <select class="form-control" name="status" id="status">`;
  for (let i = 0; i < status.length; i++) {
    html += `
      <option ${dataProduk.nama_status == status[i].nama_status && "selected"} value="${status[i].id_status}">${status[i].nama_status}</option>
    `;
  }
  html += `</select>
        </div>
        <input type="Submit" value="Submit" class="btn btn-primary"/>
    </form>
    </div>
    `;

  let popout = document.getElementById("popout");
  popout.innerHTML = html;

  const namaProduk = document.getElementById("nama");
  namaProduk.value = dataProduk.nama_produk;

  const hargaProduk = document.getElementById("harga");
  hargaProduk.value = dataProduk.harga;

  popout.classList.toggle("active");

  const form = document.querySelector("form#editProdukForm");
  form.addEventListener("submit", editProduk);
}

async function editProduk() {
  event.preventDefault();

  const form = event.currentTarget;
  const url = new URL(form.action);

  const formData = new FormData(form);

  const fetchOptions = {
    method: "PUT",
    headers: {
      //   "Content-Type": "application/json",
    },
    body: formData,
  };

  const response = await fetch(url, fetchOptions);

  if (response.status == 401) {
    window.alert("Session anda habis. Silakan login kembali!");
    window.location.href = "/login";
  }
  const data = await response.json();

  if (response.status == 200) {
    showSuccess();
  } else {
    showError("Penambahan Konseling Gagal", data.message);
    return;
  }
  console.log(data);

  let html = "";

  popout.innerHTML = html;
  popout.classList.toggle("active");
  getProdukList();
}
