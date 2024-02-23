export function addToCart(game) {
    const cart = JSON.parse(localStorage.getItem("cart"));
  
    const itemIndex = cart.findIndex(function (currentGame) {
      if (game.id === currentGame.id) {
        return true;
      }
      return false;
    });
  
    if (itemIndex === -1) {
      cart.push({ ...game, quantity: 1 });
    } else {
      cart[itemIndex].quantity += 1;
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  