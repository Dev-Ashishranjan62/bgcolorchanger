const color = [
  "blue",
  "green",
  "indigo",
  "grey",
  "orange",
  "olive",
  "cyan",
  "teal",
  "tan",
  "maroon",
  "violet",
  "pink",
];
const colorChangerBtn = document.getElementById("changerBtn");
colorChangerBtn.addEventListener("click", () => {
  let rendomIndex = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[rendomIndex];
});
