const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://v2.api.noroff.dev";
const shopEndpoint = "/gamehub";
const singleProductUrl = `${url}${shopEndpoint}/${id}`;

async function singleProductFetch() {
  const response = await fetch(singleProductUrl);
  const product = await response.json();
  const item = product.data;
  renderHtml(item);
}

singleProductFetch();

function renderHtml(itemData) {
  const productContainer = document.querySelector(".listProduct");
  productContainer.innerHTML = `
  <div class="product">
    <img src="${itemData.image.url}" alt="${itemData.title}" />
    <h1>${itemData.title}</h1>
    <h2> ${itemData.description}</h2>
    <p>Price: ${itemData.discountedPrice}</p>
    <p>Age rating: ${itemData.ageRating}</p>
    <p>Year of release: ${itemData.released}</p>
    <p>Genre: ${itemData.genre}</p>
  </div>
  `;
}