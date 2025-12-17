> Ontwerp en maak een interactieve website voor een opdrachtgever. De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Buurtcampuskrant
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Digitale versie van de Buurtcampuskrant

## User story
Als gebruiker wil ik alle artikelen op doelgroep kunnen filteren, zodat ik artikelen kan bekijken die bij mij horen.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Klik [hier](https://maartentepoele.github.io/fix-the-flow-interactive-website/) om de website zelf te bekijken!

<img width="1800" height="760" alt="3-devices-black" src="https://github.com/user-attachments/assets/16e29e92-8d50-42b1-b280-8062975ce754" />

De Buurtcampuskrant is een door HvA-studenten gemaakte website wat de inhoud van de fysieke Buurtcampuskrant mooi op een website weergeeft. Deze sprint heb ik vooral gewerkt aan interactie op de homepagina. Op de homepagina kan alle artikelen van de Buurtcampuskrant filteren op doelgroep.

<img width="412" height="435" alt="image" src="https://github.com/user-attachments/assets/6c47cf8c-98ba-4faf-a5bf-dcdf0e17421f" />

'Studenten' is geklikt en de muis staat op 'Bewoners'.


Met het filter (afbeelding hierboven) heb ik goed rekening gehouden met feedback en feedforward. De feedback is terug te zien als je hovert over een doelgroep, of als op een doelgroep klikt. De feedforward is terug te zien aan het woord 'Filter' bovenaan.


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De voorpagina is opgebouwd met een header, main en footer. In de header kan je navigeren naar verschillende buurten. In de main staan de artikelen weergegeven en in de footer staat een formulier om je op te geven voor de nieuwsbrief.


De interactie met het filter: in HTML staan alle artikelen van alle doelgroepen onder elkaar. Met JavaScript worden de artikelen alleen per doelgroep weergegeven:
```
// Selecteer de doelgroepartikelen en maak ze zichtbaar
doelgroepArticles.forEach(function (article) {
  article.classList.remove("hidden");
  });
```

De interactie met de wolkjees in de header: in CSS heb ik twee classes aangemaakt voor de animatie per wolk:
```
.fly {
  translate: -100vw;
}

.fade {
  opacity: 0;
}
```

Met JavaScript zet ik de class op de afbeelding als je erop klikt:
```
// Wolkjes animatie
cloud1 = document.querySelector(".cloud1");
cloud1.addEventListener("click", function () {
  cloud1.classList.add("fly");
});

cloud2 = document.querySelector(".cloud2");
cloud2.addEventListener("click", function () {
  cloud2.classList.add("fade");
});
```

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

