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
    <p>${itemData.description}</p>
    <p>${itemData.price}</p>
    <p>${itemData.ageRating}</p>
    <button class="btn">Add to cart</button>
  </div>
  `;
}