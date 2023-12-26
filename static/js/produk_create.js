async function createModal() {
  const response = await fetch(`/statusandkategori`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const status = data.status;
  const kategori = data.kategori;

  let html = `<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <div class="d-flex justify-content-between w-100">
        <div id="modal-title">Tambahkan Produk</div>
        <div class="btn" onclick="closeModal()">X</div>
      </div>
    </div>`;

  html += `
    <div class="modal-body" id="modal-body">
    <form action="/create/produk" method="POST" enctype="multipart/form-data" id="createProdukForm">
        <div class="form-group mb-2">
            <label for="nama">Nama Produk</label>
            <input type="text" class="form-control" id="nama" name="nama" required/>
        </div>
        <div class="form-group mb-2">
            <label for="harga">Harga</label>
            <input type="number" class="form-control" id="harga" name="harga" required/>
        </div>
        <div class="form-group mb-2">
            <label for="kategori">Kategori</label>
            <select class="form-control" id="kategori" name="kategori">`;

  for (let i = 0; i < kategori.length; i++) {
    html += `
      <option value="${kategori[i].id_kategori}">${kategori[i].nama_kategori}</option>
    `;
  }
  html += `</select>
        </div>
        <div class="form-group mb-2">
            <label for="status">Status</label>
            <select class="form-control" name="status" id="status">
  `;
  for (let i = 0; i < status.length; i++) {
    html += `
      <option value="${status[i].id_status}">${status[i].nama_status}</option>
    `;
  }
  html += `
            </select>
        </div>
        <input type="Submit" value="Submit" class="btn btn-primary"/>
    </form>
    </div>
    `;

  let popout = document.getElementById("popout");
  popout.innerHTML = html;
  popout.classList.toggle("active");

  const form = document.querySelector("form#createProdukForm");
  form.addEventListener("submit", createProduk);
}

async function createProduk() {
  event.preventDefault();

  const form = event.currentTarget;
  const url = new URL(form.action);

  const formData = new FormData(form);

  const fetchOptions = {
    method: form.method,
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
