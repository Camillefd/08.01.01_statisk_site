const listURL = "https://kea-alt-del.dk/t7/api/products?limit=6";
const listContainer = document.querySelector("#productListContainer");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
       <article class="product">
        <h3>${product.productdisplayname}</h3>
        <h4>${product.brandname}</h4>
        <a href="product.html">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede">
        </a>
      <p class="price">
        <p>Pris: ${product.price}</p>
        </p>
         <button>Køb nu</button>
      </article>
    `;
  });
}

getProducts();
