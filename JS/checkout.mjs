// 1. get display container
// 2. get items from local storage
// 3. Loop through the items
// 4. Generate HTML for the item
// 5. Append the HTML to the display container

function generateGameHtml(game) {
    const gameWrapper = document.createElement('div');
    const gameTitle.textContent = gameTitle;
    const gameQuantity = document.createElement ('div');
    gameQuantity.textContent = game.quantity;
    const gamePrice = document.createElement('div');
    gamePrice.textContent = game.price;
    const gamePriceTotal = document.createElement('div');
    gamePriceTotal.textContent = game.price * game.quantity

    gameWrapper.append(gameTitle, gameQuantity, gamePrice, gamePriceTotal);
    return gameWrapper;
}

function displayCartItems () {
    const displayContainer = document.getElementById('cart-items-display');
    const cart = JSON.parse (localStorage.getItem('cart'));

    cart.forEach(function (currentGame)) {
        const itemHtml = generateHtmlForGame(currentGame);
        displayContainer.appendChild(itemHtml);
    };

}

function main () {

}

main ();