document.addEventListener("click", () => {
  const rand = Math.random();

  if (rand < 0.5) {
    texteMode();
  } else {
    hotdogMode();
  }
});
