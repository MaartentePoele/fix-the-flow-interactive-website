// Selecteer alle buttons
const buttons = document.querySelectorAll("button");

// Selecteer alle artikelen
const allArticles = document.querySelectorAll("article");

// Kijk of er op een button wordt geklikt
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Sla de waarde van de button op in een variabele
    const doelgroep = button.value;

    // Selecteer alle artikelen met de doelgroep van de button
    const doelgroepArticles = document.querySelectorAll(
      `article.article-${doelgroep}`
    );

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
