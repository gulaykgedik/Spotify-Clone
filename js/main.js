import { API } from "./api.js";
import { UI } from "./ui.js";

const ui = new UI();
const api = new API();

document.addEventListener("DOMContentLoaded", () => {
  ui.renderLoader();
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log("Hataaa:", err);
      alert("üzgünüz bir hata oluştu :");
    });
});

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = e.target[0].value;

  if (query.trim() === "")
    return alert("lütfen geçerli bir arama işlemi gerçekleştirin!");

  ui.renderLoader();

  ui.updateTitle(query + " için sonuçlar");
  api
    .searchMusics(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      alert("İşlem gerçekleştirelemedi");
      console.log(err);
    });
});

ui.list.addEventListener("click", (e) => {
  if (e.target.className == "play") {
    const card = e.target.closest(".card");
    const data = card.dataset;

    ui.renderPlayer(data);
  }
});
