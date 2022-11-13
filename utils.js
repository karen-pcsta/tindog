import { currentDog, currentDogIndex, getNextDog, likeBadge, nopeBadge } from "./index.js";
import dogs from "./dogDB.js";

let dogsNameList = dogs.map(function (dog) {
  return dog.name;
});

function changeDisplay(badge) {
  badge.classList.remove("hide-element");
  setTimeout(() => {
    badge.classList.add("hide-element");
    getNextDog();
  }, 1000);
}

function noMoreDogsModal() {
  document.getElementById("modal").classList.remove("hide-element");
  // document.querySelector(".user-picture img").classList.add("blur-image");
  document.getElementById("userContainer").classList.add("blur");
}

export { changeDisplay, dogsNameList, noMoreDogsModal };
