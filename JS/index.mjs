import { API_GAMES_URL } from "./constants.mjs"
import { doFetch } from "./doFetch.mjs"

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

    gamePriceContainer.append(gamePrice, gameDiscountedPrice);
    gameContainer.append(heading, gamePriceContainer, gameBuyButton)
    gameWrapper.appendChild(gameContainer);

    return gameWrapper;

}

function displayGames(games) {
    const displayContainer = document.getElementById('games-display);
    displayContainer.textContent ='';
    console.log (displayContainer);
    games.forEach(function (game) {
        const gameHtml = generateGameHtml(game);
        displayContainer.appendChild(gameHtml);
        console.log (gameHtml)
        
    });

}

async function main() {
    const responseData = await doFetch (API_GAMES_URL);
    const games = responseData.data;
    displayGames(games);

}


main()