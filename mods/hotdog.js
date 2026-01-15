function hotdogMode() {
  const version = Math.ceil(Math.random() * 3);

  if (version === 1) hotdogSoft();
  if (version === 2) hotdogChaos();
  if (version === 3) hotdogWTF();
}

function hotdogSoft() {
  clearChaos();
  addHotdog();
}

function hotdogChaos() {
  clearChaos();
  for (let i = 0; i < 5; i++) {
    addHotdog();
  }
}

function hotdogWTF() {
  clearChaos();
  for (let i = 0; i < 10; i++) {
    addHotdog(true);
  }
}
function addHotdog(rotate = false) {
  const img = document.createElement("img");
  const num = Math.ceil(Math.random() * 3);

  img.src = `assets/hotdogs/${num}.jpg`;
  img.style.position = "absolute";
  img.style.top = Math.random() * window.innerHeight + "px";
  img.style.left = Math.random() * window.innerWidth + "px";

  if (rotate) {
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
  }

  document.body.appendChild(img);
}

function clearChaos() {
  document.querySelectorAll("img").forEach(img => img.remove());
}
assets/hotdogs/1.jpg
assets/hotdogs/2.jpg
assets/hotdogs/3.jpg
