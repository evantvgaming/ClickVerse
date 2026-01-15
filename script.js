console.log("ClickVerse chargé.");

let firstClick = true;

document.addEventListener("click", () => {
  if (firstClick) {
    document.body.style.background = "#111";
    firstClick = false;
  }

  hotdogMode();
});
