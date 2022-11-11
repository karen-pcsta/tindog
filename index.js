import dogs from "./dogDB.js";
import DogTemplate from "./dogTemplate.js";
import badgesDisplay from "./utils.js";

const likeBtn = document.getElementById("likeBtn");
const rejectBtn = document.getElementById("rejectBtn");
const likeBadge = document.getElementById("likeBadge");
const nopeBadge = document.getElementById("nopeBadge");

likeBtn.addEventListener("click", function () {
  currentDog.changeStatusToLike(true);
  badgesDisplay(likeBadge);
});

rejectBtn.addEventListener("click", function () {
  currentDog.changeStatusToDislike(true);
  badgesDisplay(nopeBadge);
});

let dogsNameList = dogs.map(function (dog) {
  return dog.name;
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
    alert("no more dogs!");
  }
}

function renderDog() {
  document.getElementById("userContainer").innerHTML = currentDog.getDogProfile();
}

renderDog();

export { currentDog, currentDogIndex, dogsNameList, getNextDog, likeBadge, nopeBadge };
