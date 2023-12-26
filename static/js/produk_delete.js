async function deleteModal(produk_code) {
  console.log("MASUK");
  let html = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="d-flex justify-content-between w-100">
                    <div class="btn" id="modal-title">Edit Produk</div>
                    <div class="btn" onclick="closeModal()">X</div>
                </div>
            </div>
            <div class="modal-body" id="modal-body">
                Apakah anda yakin menghapus produk ini?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">Cancel</button>
                <button type="button" class="btn btn-danger" onclick="deleteProduk('${produk_code}')">Delete</button>
            </div>
        </div>
    </div>`;

  let popout = document.getElementById("popout");
  popout.innerHTML = html;
  popout.classList.toggle("active");
}

async function deleteProduk(produk_code) {
  event.preventDefault();

  const fetchOptions = {
    method: "DELETE",
    headers: {
      //   "Content-Type": "application/json",
    },
  };

  const response = await fetch(`/delete/produk/${produk_code}`, fetchOptions);

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

  let html = "";

  popout.innerHTML = html;
  popout.classList.toggle("active");
  getProdukList();
}
