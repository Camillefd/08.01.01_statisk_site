const params = new URLSearchParams(window.location.search);
const myCategories = params.get("categories");

console.log(myCategories);

/// const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".grid-1-1-1");
/// const fetchURL = `https://kea-alt-del.dk/t7/api/products?category=${myCategory}`;

const fetchURL = myCategories ? `https://kea-alt-del.dk/t7/api/categories=${encodeURIComponent(myCategories)}` : "https://kea-alt-del.dk/t7/api/categories";

function getCategories() {
  fetch(fetchURL).then((res) => res.json().then((categories) => showCategories(categories)));
}

function showCategories(categories) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  categories.forEach((category) => {
    listContainer.innerHTML += `
        <ul>
            <li><a href="productlist.html?category=${encodeURIComponent(category.category)}">${category.category}</a></li>
        </ul>
    `;
  });
}

getCategories();
