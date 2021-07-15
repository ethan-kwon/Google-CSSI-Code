console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

inputField.addEventListener("change", () => {
  console.log("Guess submitted");
  let guess = inputField.value;
  if (document.querySelector("#" + guess.charAt(0).toUpperCase() + guess.slice(1)) !== null) {
    tile = document.querySelector("#" + guess.charAt(0).toUpperCase() + guess.slice(1))
    tile.classList.remove("hidden");
  }
  inputField.value = "";
});