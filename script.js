// --- Declareer alle elementen die ik nodig heb in variabelen ---

// Buttons
const btnStudenten = document.querySelector(".btn-studenten");
const btnBewoners = document.querySelector(".btn-bewoners");
const btnWijkpartners = document.querySelector(".btn-wijkpartners");
const btnHvAMedewerkers = document.querySelector(".btn-hva-medewerkers");

// Artikelen
const nieuwsArtikelen = document.querySelectorAll(".article-nieuws");
const studentenArtikelen = document.querySelectorAll(".article-studenten");
const bewonersArtikelen = document.querySelectorAll(".article-bewoners");
const wijkpartnersArtikelen = document.querySelectorAll(
  ".article-wijkpartners"
);
const HvA_medewerkersArtikelen = document.querySelectorAll(
  ".article-hva-medewerkers"
);
const alleArtikelen = document.querySelectorAll("article");

// --- Click events voor de buttons ---
btnStudenten.addEventListener("click", () => {
  hideAllArticles();

  //Class aanpassen van artikelen om ze zichtbaar te maken
  studentenArtikelen.forEach(function (studentArtikel) {
    studentArtikel.classList.remove("hidden");
  });
});

btnBewoners.addEventListener("click", () => {
  hideAllArticles();

  //Class aanpassen van artikelen om ze zichtbaar te maken
  bewonersArtikelen.forEach(function (bewonerArtikel) {
    bewonerArtikel.classList.remove("hidden");
  });
});

btnWijkpartners.addEventListener("click", () => {
  hideAllArticles();

  //Class aanpassen van artikelen om ze zichtbaar te maken
  wijkpartnersArtikelen.forEach(function (wijkpartnerArtikel) {
    wijkpartnerArtikel.classList.remove("hidden");
  });
});

btnHvAMedewerkers.addEventListener("click", () => {
  hideAllArticles();

  //Class aanpassen van artikelen om ze zichtbaar te maken
  HvA_medewerkersArtikelen.forEach(function (HvA_medewerkerArtikel) {
    HvA_medewerkerArtikel.classList.remove("hidden");
  });
});

// Function om alle artikelen op hidden te zetten
function hideAllArticles() {
  alleArtikelen.forEach(function (artikel) {
    artikel.classList.add("hidden");
  });
}
