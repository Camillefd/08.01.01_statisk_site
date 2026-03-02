const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

console.log(myCategory);

/// const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector("#productListContainer");
/// const fetchURL = `https://kea-alt-del.dk/t7/api/products?category=${myCategory}`;

const fetchURL = myCategory ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}` : "https://kea-alt-del.dk/t7/api/products";

function getProducts() {
  fetch(fetchURL).then((res) => res.json().then((products) => showProducts(products)));
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
        <a href="product.html?id=${product.id}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede">
        </a>
        <p class="price">Pris: ${product.price}</p>
         <button>Køb nu</button>
      </article>
    `;
  });
}

getProducts();
