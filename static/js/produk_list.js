let limitData = document.getElementById("limitData");
limitData.onchange = () => getProdukList();
let filterData = "";

function closeModal() {
  console.log("masuk");
  let elementTarget = document.getElementById("popout");
  console.log(elementTarget);
  elementTarget.classList.toggle("active");
}

function filterProduk(filterType) {
  let filterProdukElements = document.querySelectorAll(".btn-filter");
  console.log(filterProdukElements);

  for (let i = 0; i < filterProdukElements.length; i++) {
    filterProdukElements[i].classList.remove("btn-info");
  }

  if (filterData === filterType) filterData = "";
  else {
    filterData = filterType;
    eventElement = event.target.classList.add("btn-info");
  }
  getProdukList();
}

const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

async function nextPage() {
  const pages = parseInt(localStorage.getItem("pages"));
  getProdukList(pages + 1);
}

async function prevPage() {
  const pages = parseInt(localStorage.getItem("pages"));
  if (pages - 1 > 0) getProdukList(pages - 1);
}

async function getProdukList(page = 1) {
  let limitData = document.getElementById("limitData");

  let bodyForm;

  let url = new URL(window.location.protocol + "//" + window.location.host + "/products");

  url.searchParams.set("pages", page);
  url.searchParams.set("limit", limitData.value);
  url.searchParams.set("filter", filterData);

  const response = await fetch(url, {
    method: "GET",
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
  let tableProduk = document.getElementById("product_data");

  if (data.success == "false" || dataProduk.length == 0) {
    // tableProduk.innerHTML = "";
    showError("Data Pencarian Tidak Ditemukan", "Data Pencarian Tidak Ditemukan");
    nextButton.setAttribute("disabled", "");
    if (page == 2) localStorage.setItem("pages", page);
    return;
  }

  nextButton.removeAttribute("disabled");
  backButton.removeAttribute("disabled");

  if (page == 1) {
    backButton.setAttribute("disabled", "");
  }

  localStorage.setItem("pages", page);

  let html = "";

  for (let i = 0; i < dataProduk.length; i++) {
    html += `<tr>
                <td>
                    ${dataProduk[i].id_produk}
                </td>
                <td>
                    ${dataProduk[i].nama_produk}
                </td>
                <td>
                    ${dataProduk[i].nama_kategori}
                </td>
                <td>
                    ${dataProduk[i].harga}
                </td>
                <td>
                    ${dataProduk[i].nama_status}
                </td>
                <td class="col-2">
                  <div class="flex">
                    <div class="btn btn-sm btn-success" onclick="EditModal('${dataProduk[i].id_produk}')"><i class="bi bi-pencil-square me-2"></i>Edit</div>
                    <div class="btn btn-sm btn-danger" onclick="deleteModal('${dataProduk[i].id_produk}')"><i class="bi bi-trash3"></i>Delete</div>
                  </div>
                </td>
            </tr>`;
  }
  tableProduk.innerHTML = html;
}
