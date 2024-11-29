export class UI {
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector("form");
    this.title = document.getElementById("title");
    this.player = document.querySelector(".player");
  }

  renderCards(songs) {
    this.list.innerHTML = "";
    songs.forEach((song) => {
      const card = document.createElement("div");
      card.className = "card";

      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      card.innerHTML = `
             <figure>
                <img src="${song.images.coverarthq}" alt="" />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

                <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${this.sliceText(song.subtitle)}</h4>
              </div>
      `;
      this.list.appendChild(card);
    });
  }
  renderLoader() {
    this.list.innerHTML = `
<div class="loader">
    <div class="orbe" style="--index: 0"></div>
    <div class="orbe" style="--index: 1"></div>
    <div class="orbe" style="--index: 2"></div>
    <div class="orbe" style="--index: 3"></div>
    <div class="orbe" style="--index: 4"></div>
</div>
    `;
  }
  updateTitle(text) {
    this.title.textContent = text;
  }
  sliceText(text) {
    if (text.length > 16) {
      return text.slice(0, 16) + "...";
    }
    return text;
  }

  renderPlayer(song) {
    this.player.innerHTML = `
      <div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>
 
      <audio autoplay
        src="${song.mp3}"
        controls
      ></audio>
      <!-- Icons -->
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    
    `;
    const audio = this.player.querySelector("audio");

    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }

  toggleAnimation() {
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
  }
}
