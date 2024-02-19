// Main idea: display items for our GameHub api
// 1. Get the data
// 2. Loop through data
// 3. Create HTML for the individual items
// Append the HTML to the document

import { API_GAMES_URL } from "./constants.mjs"
import { doFetch } from "./doFetch.mjs"

function generateGameHtml(game) {
    // Returns game HTML
    Document.createElement
    console.log(game);
}

function displayGames(games) {
    console.log(games);
    games.forEach((game) => {
        const gameHtml = generateGameHtml(game);
        // generate HTML for the game
        
    });

}

async function main() {
    const responseData = await doFetch (API_GAMES_URL);
    const games = responseData.data;
    displayGames(games);

}


main()