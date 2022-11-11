import { currentDog, currentDogIndex, dogsNameList, getNextDog, likeBadge, nopeBadge } from "./index.js";

function badgesDisplay(badge) {
  badge.classList.remove("hide-badge");
  setTimeout(() => {
    badge.classList.add("hide-badge");
    getNextDog();
  }, 1000);
}

export default badgesDisplay;
