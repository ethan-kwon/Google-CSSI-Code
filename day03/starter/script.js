console.log("script running!");

const button1 = document.querySelector("#button1");
console.log(button1)

// stuff that I want to happen when the button is clicked
const onButton1Click = () => {
  console.log("button clicked!")
  alert("Squeak!")
}

button1.addEventListener("click", onButton1Click);

const button2 = document.querySelector("#button2");
console.log(button2);
button2.addEventListener("click", () => {
  const textToUpdate = document.querySelector("#status2");
  textToUpdate.innerHTML = "Thanks for petting the bunny! He looks really happy!"
  console.log("bunny button clicked!")
})

const button3 = document.querySelector("#button3");
let numberOfCarrots = 2;
button3.addEventListener("click", () => {
    const textToUpdate = document.querySelector("#status3");
    if (numberOfCarrots >= 10) {
        button3.remove();
        alert("Coco has had too many carrots today and is full.")
        textToUpdate.innerHTML = "Coco is full."
    } else {
        numberOfCarrots += 1;
        textToUpdate.innerHTML = "Coco has had " + numberOfCarrots + " carrots today."
    }
    
})

const zoo = document.querySelector(".container")
console.log(zoo)

const button4 = document.querySelector("#button4");
button4.addEventListener("click", e => {
    zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`
})

const button5 = document.querySelector("#button5");
let numberofApples = 2;
button5.addEventListener("click", e => {
    numberofApples += 1;
    const textToUpdate = document.querySelector("#status5");
    textToUpdate.innerHTML = `Ricky has had ${numberofApples} apples today!`;
})