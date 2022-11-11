import dogs from "./dogDB.js";
import DogTemplate from "./dogTemplate.js";

const likeBtn = document.getElementById("likeBtn");
const rejectBtn = document.getElementById("rejectBtn");
const likeBadge = document.getElementById("likeBadge");
const nopeBadge = document.getElementById("nopeBadge");

likeBtn.addEventListener("click", function () {
  currentDog.changeStatusToLike(true);
  likeBadge.classList.remove("hide-badge");
  setTimeout(() => {
    likeBadge.classList.add("hide-badge");
    getNextDog();
  }, 1000);
});

rejectBtn.addEventListener("click", function () {
  currentDog.changeStatusToDislike(true);
  nopeBadge.classList.remove("hidden");
  setTimeout(() => {
    nopeBadge.classList.add("hidden");
    getNextDog();
  }, 1000);
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
    document.ge;
  } else {
    alert("no more dogs!");
  }
}

function renderDog() {
  document.getElementById("userContainer").innerHTML = currentDog.getDogProfile();
}

renderDog();
