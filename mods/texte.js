function texteMode() {
  clearTexts();

  const phrases = [
    "Tu as cliqué. Bravo.",
    "Ce clic ne servait à rien.",
    "Encore un clic. Sérieusement ?",
    "ClickVerse te regarde.",
    "Arrête de cliquer. Ou pas."
  ];

  const p = document.createElement("p");
  p.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  p.style.position = "absolute";
  p.style.top = "50%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  p.style.fontSize = "24px";
  p.style.color = "white";

  document.body.appendChild(p);
}

function clearTexts() {
  document.querySelectorAll("p").forEach(p => {
    if (!p.closest(".container")) p.remove();
  });
}
