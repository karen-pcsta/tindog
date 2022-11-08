import dogs from "./dogDB.js";
import DogTemplate from "./dogTemplate.js";
// import getNewProfile from "./utils.js";

const userContainer = document.getElementById("userContainer");
// const likeBtn = document.getElementById("likeBtn");
// const rejectBtn = document.getElementById("rejectBtn");
let currentDog = 0;
let introDog = new DogTemplate(dogs[currentDog]);

function render() {
  document.getElementById("userContainer").innerHTML = introDog.getDogProfile();
}

render();
