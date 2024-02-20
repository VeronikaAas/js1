import { API_GAMES_URL } from "./constants.mjs"
import { doFetch } from "./doFetch.mjs"

function createCart () {
    const cart = localStorage.getItem('cart');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify ([]));
    }
}

function addToCart (game) {
    const cart = JSON.parse (localStorage.getItem('cart'));
    const itemIndex = cart.findIndex(function(currentGame) {
        if (game.id === currentGame.id) {
            return true;
        }
        return false;
    });

    if (itemIndex === -1) {
        cart.push({...game, quantity: 1});
    } else {
        cart[itemIndex].quantity +=1;
    }
    localStorage.setItem('cart', JSON.stringify (cart));
}

/*
<div class="game-wrapper">
    <div class="game-container">
        <h3>Assassin</h3>
        <div class ="game-price-container">
        <div>Discounted Price: 13.49</div>
        </div>
    </div>
</div>
*/


function generateGameHtml(game) {
    // Returns game HTML
    const gameWrapper = document.createElement('div');
    gameWrapper.classList.add('game-wrapper');

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');

    const heading = document.createElement('h3');
    heading.textContent = game.title;

    const gamePriceContainer = document.createElement('div');
    gamePriceContainer.classList.add('gamePriceConainer')

    const gamePrice = document.createElement('div');
    gamePrice.textContent = game.price;

    const gameDiscountedPrice = document.createElement('div');
    gameDiscountedPrice.textContent = game.discountedPrice;

    const gameBuyButton = document.createElement('button');
    gameBuyButton.textContent = 'Buy';
    gameBuyButton.classList.add('game-buy-button');
    gameBuyButton.addEventListener('click', () => {
        addToCart
        console.log('id, game.id')
    })

    gamePriceContainer.append(gamePrice, gameDiscountedPrice);
    gameContainer.append(heading, gamePriceContainer, gameBuyButton)
    gameWrapper.appendChild(gameContainer);

    return gameWrapper;

}

function displayGames(games) {
    const displayContainer = document.getElementById('games-display');
    displayContainer.textContent ='';
    console.log (displayContainer);
    games.forEach(function (game) {
        const gameHtml = generateGameHtml(game);
        displayContainer.appendChild(gameHtml);
        console.log (gameHtml)
        
    });

}

async function main() {
    createCart ();
    const responseData = await doFetch (API_GAMES_URL);
    const games = responseData.data;
    displayGames(games);

}


main()