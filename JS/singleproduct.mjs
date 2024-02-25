const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://v2.api.noroff.dev";
const shopEndpoint = "/gamehub";
const singleProductUrl = `${url}${shopEndpoint}/${id}`;

async function singleProductFetch() {
  const response = await fetch(singleProductUrl);
  const product = await response.json();
  return product;
}
const itemData = await singleProductFetch();
console.log(itemData);