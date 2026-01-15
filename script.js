console.log("ClickVerse chargé.");

let firstClick = true;

document.addEventListener("click", () => {
  if (firstClick) {
    document.body.style.background = "#111";
    firstClick = false;
  }

  hotdogMode();
});
let toggle = true;

document.addEventListener("click", () => {
  if (toggle) {
    texteMode();
  } else {
    // rien d’autre pour l’instant
  }
  toggle = !toggle;
});
