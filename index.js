import dogs from "./dogDB.js";
import DogTemplate from "./dogTemplate.js";

const userContainer = document.getElementById("userContainer");
const btnContainer = document.getElementById("buttonsContainer");
const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("click", render);

let dogsNames = dogs.map(function (dog) {
  return dog.name;
});

function changeDogProfile() {
  let currentDog = dogsNames.shift();
  const nextDogProfile = dogs.find((value) => value.name === currentDog);
  return nextDogProfile ? new DogTemplate(nextDogProfile) : {};
}

function render() {
  let dog = changeDogProfile();
  document.getElementById("userContainer").innerHTML = dog.getDogProfile();
}

render();
