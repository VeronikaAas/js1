function fetchCart() {
    const cartItem = localStorage.getItem("cart");
    const cart = JSON.parse(cartItem);
  
    for (let i = 0; i < cart.length; i++) {
      const cartItemId = cart[i].product_id;
      cartFetch(cartItemId);
    }
  }
  
  async function cartFetch(itemId) {
    const url = "https://v2.api.noroff.dev";
    const shopEndpoint = "/gamehub";
    const cartUrl = `${url}${shopEndpoint}/${itemId}`;
    const response = await fetch(cartUrl);
    const cart = await response.json();
    const items = cart.data;
    console.log(items);
    renderHtml(items);
  }
  fetchCart();
  
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