const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
  <articel class="grid-1-1">
  <div>
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produktbillede">
    </div>
    <div class="tekst">
    <h3>${data.productdisplayname}</h3>
    <h4>${data.brandname}</h4>
    <p>Pris: ${data.price}</p>
    <p>Lager status: ${data.soldout}</p>
    <button> Køb nu </button>
    </div>
      </articel>`;
}

getData();
