let menu = document.querySelector(".menu");
let tabs = document.querySelector(".tabContainer");

menu.addEventListener("click", () => {
  if (tabs.style === null || tabs.style.display === "none") {
    tabs.style.display = "flex";
  } else {
    tabs.style.display = "none";
  }
});
