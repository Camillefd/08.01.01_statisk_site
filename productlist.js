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
             <p class="price">
      ${
        product.discount > 0
          ? `<span class="original-pris">Pris: ${product.price} ,-</span>
           <span class="tilbud-pris">${(product.price * (1 - product.discount / 100)).toFixed(2)} ,-</span>`
          : `<span>Pris: ${product.price} ,-</span>`
      }
    </p>
         <button> ${product.soldout === 1 ? `<p class="soldout"> Udsolgt </p>` : `<p> Køb nu </p>`} </button>
      </article>
    `;
  });
}

getProducts();
