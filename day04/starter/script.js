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
const germanTile = document.querySelector("#German");
const italianTile = document.querySelector("#Italian");
const portugueseTile = document.querySelector("#Portuguese");
const reset = document.querySelector("#Reset");

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");

const languages = ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean", "Russian", "German", "Italian", "Portuguese"];
const tiles = [englishTile, spanishTile, chineseTile, tagalogTile, vietnameseTile, arabicTile, frenchTile, koreanTile, russianTile, germanTile, italianTile, portugueseTile];

let answered = 0

inputField.addEventListener("change", () => {
  console.log("Guess submitted");
  let guess = inputField.value;
  guess = guess.charAt(0).toUpperCase() + guess.slice(1).toLowerCase();
  if (languages.includes(guess)) {
    index = languages.indexOf(guess);
    tiles[index].classList.remove("hidden");
    tiles[index].classList.add("answered");
    answered += 1;
  }
  if (answered >= languages.length) {
    confetti({
      particleCount: 150,
      spread: 180
    });
    alert("Congratulations, you guessed all 12 languages!")
  }
  inputField.value = "";
});

reset.addEventListener("click", () => {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("answered");
    tiles[i].classList.add("hidden");
  }
})