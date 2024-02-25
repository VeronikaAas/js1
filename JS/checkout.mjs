async function fetchCart() {
  const cartItem = localStorage.getItem("cart");
  const cart = JSON.parse(cartItem);

  let cartTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const product = await getProduct(cart[i].product_id);
    const totalPrice = product.discountedPrice * item.quantity.toFixed(2);
    cartTotal += totalPrice;
    renderHtml(product);
  }

  renderTotal(cartTotal);
}

fetchCart();

async function getProduct(itemId) {
  const url = "https://v2.api.noroff.dev";
  const shopEndpoint = "/gamehub";
  const productUrl = `${url}${shopEndpoint}/${itemId}`;
  const response = await fetch(productUrl);
  const product = await response.json();
  return product.data;
}

function renderHtml(itemData) {
  const productContainer = document.querySelector(".listProduct");
  productContainer.innerHTML += `
      <div class="product">
        <img src="${itemData.image.url}" alt="${itemData.title}" />
        <h1>${itemData.title}</h1>
        <p>${itemData.description}</p>
        <p>${itemData.price}</p>
      </div>
      `;
}

function renderTotal(total) {
  const totalContainer = document.querySelector("#cartTotal");
  totalContainer.innerHTML += `
  <p>Subtotal: ${total}</p>
  `;
}