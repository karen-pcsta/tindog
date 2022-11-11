import dogs from "./dogDB.js";

class DogTemplate {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogProfile() {
    const { name, avatar, age, bio } = this;
    return `
        <div class="user-picture">
        <img src="${avatar}" alt="image of a dog"
        </div>
        <div class="user-info">
          <h2 class="user-name">${name},</h2>
          <h2 class="user-age">${age}</h2>
          <p class="user-bio">${bio} </p>
       </div>`;
  }
  changeStatusToLike(status) {
    this.hasBeenSwiped = status;
    this.hasBeenLiked = true;
  }
  changeStatusToDislike(status) {
    this.hasBeenSwiped = status;
    this.hasBeenLiked = false;
  }
}

export default DogTemplate;
