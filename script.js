// Selecteer alle buttons
const allButtons = document.querySelectorAll("button");

// Selecteer alle artikelen
const allArticles = document.querySelectorAll("article");

// Selecteer header boven de artikelen
const articleHeader = document.querySelector(".article-header");

// Kijk of er op een button wordt geklikt
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Sla de waarde van de button op in een variabele
    const doelgroep = button.value;

    // Selecteer alle artikelen met de doelgroep van de button
    const doelgroepArticles = document.querySelectorAll(
      `article.article-${doelgroep}`
    );

    // Verander de naam van de header
    articleHeader.textContent = doelgroep;

    // Verberg alle artikelen
    allArticles.forEach((article) => {
      article.classList.add("hidden");
    });

    // Selecteer de doelgroepartikelen en maak ze zichtbaar
    doelgroepArticles.forEach((article) => {
      article.classList.remove("hidden");
    });
  });
});
