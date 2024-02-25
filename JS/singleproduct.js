import { addToCart } from "./JS/scriptYT.js";
import { createCart } from "./JS/scriptYT";

createCart();

let localStorageGame = JSON.parse(localStorage.getItem("gameInfo"));

let addToCartButton = document.getElementById("addtocart");

addToCartButton.addEventListener("click", () => {
  addToCart(localStorageGame);
});

function gamePageHtmlBuilder(localStorageGame) {
  let gameTitle = document.getElementById("gametitle");
  gameTitle.innerHTML = localStorageGame.title;

  let gameAgeRating = document.getElementById("agerating");
  gameAgeRating.innerText = `Age rating: ${localStorageGame.ageRating}`;

  let gameDesc = document.getElementById("gameshortdesc");
  gameDesc.innerHTML = localStorageGame.description;

  let releaseYear = document.getElementById("releaseYear");
  releaseYear.innerHTML = `Release Year: ${localStorageGame.released}`;

  let genreText = document.getElementById("genreText");
  genreText.innerText = `Genre: ${localStorageGame.genre}`;

  let isFavorited = document.getElementById("hearticon");
  let isFavoritedTextContainer = document.getElementById(
    "favoritedTextContainer"
  );
  if (localStorageGame.favorite) {
    isFavorited.classList = "fa-solid fa-heart";
    console.log("red tried to be applied");
    isFavorited.style.color = "red";
    isFavoritedTextContainer.innerText = "Favorited";
  } else {
    isFavorited.classList = "fa-regular fa-heart";
    console.log("normal heart");
  }

  let gamePrice = document.getElementById("pricetag");

  let mainGameImage = document.getElementById("mainimage");

  if (localStorageGame.onSale) {
    //here I create,set and append the original price in addition to show the before sale price
    let displayNormalPrice = document.createElement("p");
    displayNormalPrice.innerText = `Before sale: ${localStorageGame.price} $`;
    genreText.parentNode.insertBefore(
      displayNormalPrice,
      genreText.nextSibling
    );

    gamePrice.innerHTML = `${localStorageGame.discountedPrice} $`;
  } else {
    gamePrice.innerText = `${localStorageGame.price} $`;
  }
  mainGameImage.setAttribute("src", localStorageGame.image.url);
}

gamePageHtmlBuilder(localStorageGame);