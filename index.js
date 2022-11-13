import dogs from "./dogDB.js";
import DogTemplate from "./dogTemplate.js";
import { changeDisplay, dogsNameList, noMoreDogsModal } from "./utils.js";

const likeBtn = document.getElementById("likeBtn");
const rejectBtn = document.getElementById("rejectBtn");
const likeBadge = document.getElementById("likeBadge");
const nopeBadge = document.getElementById("nopeBadge");

likeBtn.addEventListener("click", function () {
  currentDog.changeStatusToLike(true);
  changeDisplay(likeBadge);
});

rejectBtn.addEventListener("click", function () {
  currentDog.changeStatusToDislike(true);
  changeDisplay(nopeBadge);
});

let currentDogIndex = 0;

let currentDog = new DogTemplate(dogs[currentDogIndex]);

function getNextDog() {
  currentDogIndex++;
  dogsNameList.shift();
  if (dogsNameList.length >= 1) {
    currentDog = new DogTemplate(dogs[currentDogIndex]);
    document.getElementById("userContainer").innerHTML = currentDog.getDogProfile();
  } else {
    noMoreDogsModal();
  }
}

function renderDog() {
  document.getElementById("userContainer").innerHTML = currentDog.getDogProfile();
}

renderDog();

export { currentDog, currentDogIndex, getNextDog, likeBadge, nopeBadge };
