import { currentDog, currentDogIndex, getNextDog, likeBadge, nopeBadge } from "./index.js";
import dogs from "./dogDB.js";

let dogsNameList = dogs.map(function (dog) {
  return dog.name;
});

function badgesDisplay(badge) {
  badge.classList.remove("hide-badge");
  setTimeout(() => {
    badge.classList.add("hide-badge");
    getNextDog();
  }, 1000);
}

export { badgesDisplay, dogsNameList };
