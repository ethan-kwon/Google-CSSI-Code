class Pet {
    constructor(name, happy, energy, fullness, cleanliness) {
        this.name = name;
        this.happiness = happy;
        this.energy = energy;
        this.fullness = fullness;
        this.cleanliness = cleanliness;
    }

    play() {
        if (this.happiness < 10 && this.cleanliness > 0 && this.energy > 0) {
            this.happiness += 1;
            this.cleanliness -= 1;
            this.energy -= 1; 
        } else if (this.happiness == 10 && this.energy > 0) {
            this.energy -= 1;
        } else if (this.happiness < 10 && this.energy == 0) {
            alert(`Cannot play with ${this.name} anymore. No more energy`)
        }        
        else {
            alert(`Cannot play with ${this.name} anymore`)
        }
    }

    feed() {
        if (this.energy < 10 && this.fullness < 10) {
            this.energy += 1;
            this.fullness += 1;
        } else if (this.energy == 10 && this.fullness < 10) {
            this.fullness += 1;
        } else if (this.energy < 10 && this.fullness == 10) {
            alert(`Cannot feed ${this.name} anymore. Too full`)
        } else {
            alert(`Cannot feed ${this.name} anymore`)
        }
    }

    brush() {
        if (this.happiness < 10 && this.cleanliness < 10 && this.energy > 0) {
            this.happiness += 1;
            this.cleanliness += 1;
            this.energy -= 1;
        } else if (this.energy == 0) {
            alert(`Cannot brush ${this.name} anymore`);
        } else if (this.happiness == 10 && this.cleanliness < 10) {
            this.cleanliness += 1;
            this.energy -= 1;
        } else if (this.cleanliness == 10 && this.happiness < 10) {
            this.cleanliness += 1;
            this.energy -= 1;
        } else {
            this.energy -= 1;
        }
    }
}

let hamster = new Pet("Tippy", 5, 10, 0, 5);
let bunny = new Pet("Brodie", 5, 10, 0, 5);
let goat = new Pet("Coco", 5, 10, 0, 5);
let alligator = new Pet("Arno", 5, 10, 0, 5);
let raccoon = new Pet("Ricky", 5, 10, 0, 5);

const button1 = document.querySelector("#button1");

// stuff that I want to happen when the button is clicked
const onButton1Click = () => {
  console.log("button clicked!")
  alert("Squeak!")
}

button1.addEventListener("click", onButton1Click);

const button2 = document.querySelector("#button2");
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
let numberOfClicks = 0
const button4 = document.querySelector("#button4");
button4.addEventListener("click", e => {
    if (numberOfClicks == 0) {
        button4.innerHTML = `<button id="button4" class="button is-large is-danger">Are you sure?</button>`
        numberOfClicks += 1;
    } else {
        zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`
    }
})

const button5 = document.querySelector("#button5");
let numberofApples = 2;
button5.addEventListener("click", e => {
    numberofApples += 1;
    const textToUpdate = document.querySelector("#status5");
    textToUpdate.innerHTML = `Ricky has had ${numberofApples} apples today!`;
})

const buttonPlay1 = document.querySelector("#buttonPlay1");
buttonPlay1.addEventListener("click", e => {
    hamster.play();
    const happy = document.querySelector("#happy1");
    const energy = document.querySelector("#energy1");
    happy.innerHTML = `Happiness: ${hamster.happiness}`;
    energy.innerHTML = `Energy: ${hamster.energy}`;
})

const buttonFeed1 = document.querySelector("#buttonFeed1");
buttonFeed1.addEventListener("click", e => {
    hamster.feed();
    const energy = document.querySelector("#energy1");
    const fullness = document.querySelector("#full1");
    fullness.innerHTML = `Fullness: ${hamster.fullness}`;
    energy.innerHTML = `Energy: ${hamster.energy}`;
})

const buttonBrush1 = document.querySelector("#buttonBrush1");
buttonBrush1.addEventListener("click", e => {
    hamster.brush();
    const happy = document.querySelector("#happy1");
    const clean = document.querySelector("#clean1");
    const energy = document.querySelector("#energy1");
    happy.innerHTML = `Happiness: ${hamster.happiness}`;
    clean.innerHTML = `Cleanliness: ${hamster.cleanliness}`;
    energy.innerHTML = `Energy: ${hamster.energy}`;
})

const buttonPlay2 = document.querySelector("#buttonPlay2");
buttonPlay2.addEventListener("click", e => {
    bunny.play();
    const happy = document.querySelector("#happy2");
    const energy = document.querySelector("#energy2");
    happy.innerHTML = `Happiness: ${bunny.happiness}`;
    energy.innerHTML = `Energy: ${bunny.energy}`;
})

const buttonFeed2 = document.querySelector("#buttonFeed2");
buttonFeed2.addEventListener("click", e => {
    bunny.feed();
    const energy = document.querySelector("#energy2");
    const fullness = document.querySelector("#full2");
    fullness.innerHTML = `Fullness: ${bunny.fullness}`;
    energy.innerHTML = `Energy: ${bunny.energy}`;
})

const buttonBrush2 = document.querySelector("#buttonBrush2");
buttonBrush2.addEventListener("click", e => {
    bunny.brush();
    const happy = document.querySelector("#happy2");
    const clean = document.querySelector("#clean2");
    const energy = document.querySelector("#energy2");
    happy.innerHTML = `Happiness: ${bunny.happiness}`;
    clean.innerHTML = `Cleanliness: ${bunny.cleanliness}`;
    energy.innerHTML = `Energy: ${bunny.energy}`;
})

const buttonPlay3 = document.querySelector("#buttonPlay3");
buttonPlay3.addEventListener("click", e => {
    goat.play();
    const happy = document.querySelector("#happy3");
    const energy = document.querySelector("#energy3");
    happy.innerHTML = `Happiness: ${goat.happiness}`;
    energy.innerHTML = `Energy: ${goat.energy}`;
})

const buttonFeed3 = document.querySelector("#buttonFeed3");
buttonFeed3.addEventListener("click", e => {
    goat.feed();
    const energy = document.querySelector("#energy3");
    const fullness = document.querySelector("#full3");
    fullness.innerHTML = `Fullness: ${goat.fullness}`;
    energy.innerHTML = `Energy: ${goat.energy}`;
})

const buttonBrush3 = document.querySelector("#buttonBrush3");
buttonBrush3.addEventListener("click", e => {
    goat.brush();
    const happy = document.querySelector("#happy3");
    const clean = document.querySelector("#clean3");
    const energy = document.querySelector("#energy3");
    happy.innerHTML = `Happiness: ${goat.happiness}`;
    clean.innerHTML = `Cleanliness: ${goat.cleanliness}`;
    energy.innerHTML = `Energy: ${goat.energy}`;
})

const buttonPlay4 = document.querySelector("#buttonPlay4");
buttonPlay4.addEventListener("click", e => {
    alligator.play();
    const happy = document.querySelector("#happy4");
    const energy = document.querySelector("#energy4");
    happy.innerHTML = `Happiness: ${alligator.happiness}`;
    energy.innerHTML = `Energy: ${alligator.energy}`;
})

const buttonFeed4 = document.querySelector("#buttonFeed4");
buttonFeed4.addEventListener("click", e => {
    alligator.feed();
    const energy = document.querySelector("#energy4");
    const fullness = document.querySelector("#full4");
    fullness.innerHTML = `Fullness: ${alligator.fullness}`;
    energy.innerHTML = `Energy: ${alligator.energy}`;
})

const buttonBrush4 = document.querySelector("#buttonBrush4");
buttonBrush4.addEventListener("click", e => {
    alligator.brush();
    const happy = document.querySelector("#happy4");
    const clean = document.querySelector("#clean4");
    const energy = document.querySelector("#energy4");
    happy.innerHTML = `Happiness: ${alligator.happiness}`;
    clean.innerHTML = `Cleanliness: ${alligator.cleanliness}`;
    energy.innerHTML = `Energy: ${alligator.energy}`;
})

const buttonPlay5 = document.querySelector("#buttonPlay5");
buttonPlay5.addEventListener("click", e => {
    raccoon.play();
    const happy = document.querySelector("#happy5");
    const energy = document.querySelector("#energy5");
    happy.innerHTML = `Happiness: ${raccoon.happiness}`;
    energy.innerHTML = `Energy: ${raccoon.energy}`;
})

const buttonFeed5 = document.querySelector("#buttonFeed5");
buttonFeed5.addEventListener("click", e => {
    raccoon.feed();
    const energy = document.querySelector("#energy5");
    const fullness = document.querySelector("#full5");
    fullness.innerHTML = `Fullness: ${raccoon.fullness}`;
    energy.innerHTML = `Energy: ${raccoon.energy}`;
})

const buttonBrush5 = document.querySelector("#buttonBrush5");
buttonBrush5.addEventListener("click", e => {
    raccoon.brush();
    const happy = document.querySelector("#happy5");
    const clean = document.querySelector("#clean5");
    const energy = document.querySelector("#energy5");
    happy.innerHTML = `Happiness: ${raccoon.happiness}`;
    clean.innerHTML = `Cleanliness: ${raccoon.cleanliness}`;
    energy.innerHTML = `Energy: ${raccoon.energy}`;
})