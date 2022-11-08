class DogTemplate {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogProfile() {
    const { name, avatar, age, bio } = this;
    return `<div class="user-picture">
        <img src="${avatar}" alt="image of a dog"
        </div>
        <div class="user-info">
          <h2 class="user-name">${name},</h2>
          <h2 class="user-age">${age}</h2>
          <p class="user-bio">${bio} </p>
        </div>
        <div class="like-badge">
          <img src="./images/badge-like.png" alt="image with like written on it" />
        </div>
        <div class="nope-badge">
          <img src="./images/badge-nope.png" alt="image with nope written on it" />
        </div>
      </div>`;
  }
}

export default DogTemplate;
