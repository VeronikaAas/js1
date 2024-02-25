const getGameElementsIntoPage = (game) => {
    let main = document.querySelector("main");
  let gamePageContainer = document.createElement("div");
  gamePageContainer.className = "gamePageContainer";

  let gameName = document.createElement("h1");
  gameName.innerText = game.title;
  gameName.id = "gameName";

  createGameBox(game, gamePageContainer);

  createGameInfoBox(game, gamePageContainer);

  main.appendChild(gameName);

  main.appendChild(gamePageContainer);
};

const createGameBox = (game, gamePageContainer) => {
  let htmlSpace = "&nbsp";
  let gameBox = document.createElement("div");
  gameBox.className = "gameBox";

  let gameImage = document.createElement("img");
  gameImage.className = "gameIMGBox";
  gameImage.src = game.image.url;
  gameImage.alt = game.image.alt;

  let choiceBox = document.createElement("div");

  let gamePrice = document.createElement("div");
  gamePrice.className = "gamePrice";
  let discount = game.price - game.discountedPrice;
  if (discount > 0) {
    // gamePrice.innerHTML = "<s>" + game.price + "</s>" + game.discountedPrice
    gamePrice.innerHTML = `<div><s>$${game.price}</s> ${htmlSpace}  $${game.discountedPrice}</div>`;
    // "Price before: " + game.price + " Discounted price: " + game.discountedPrice
  } else {
    gamePrice.innerText = "$" + game.price;
  }

  let addToCartButton = document.createElement("button");
  addToCartButton.classList.add(
    "addToCartButton",
    "fa-solid",
    "fa-cart-shopping"
  );
  addToCartButton.addEventListener("click", () => {
    addItemToCart(localStorage.getItem("game"));
  });

gamePageContainer.appendChild(gameBox);
  gameBox.appendChild(gameImage);
  gameBox.appendChild(choiceBox);
  choiceBox.appendChild(gamePrice);
  choiceBox.appendChild(addToCartButton);
}

const createGameInfoBox = (game, gamePageContainer) => {
    let gameInfoBox = document.createElement("div");
    gameInfoBox.className = "gameInfoBox";
  
    let h3 = document.createElement("h3");
    h3.innerText = "Product Information";
  
    let gameDescription = document.createElement("p");
    gameDescription.className = "gameDescription";
    gameDescription.innerText = game.description;
  
    let gameInformation = document.createElement("div");
    gameInformation.className = "gameInformation";
  
    let genres = document.createElement("div");
    genres.className = "genres";
    genres.innerText = "Genre: " + game.genre;
  
    let released = document.createElement("div");
    released.className = "released";
    released.innerText = "Released: " + game.released;
  
    let ageRating = document.createElement("div");
    ageRating.className = "ageRating";
    ageRating.innerText = "Age rating: " + game.ageRating;
  
    gamePageContainer.appendChild(gameInfoBox);
    gameInfoBox.appendChild(h3);
    gameInfoBox.appendChild(gameDescription);
    gameInfoBox.appendChild(gameInformation);
    gameInformation.appendChild(genres);
    gameInformation.appendChild(released);
    gameInformation.appendChild(ageRating);
  };