import "./styles/main.css";

const search = document.querySelector(".btn__toggle-search");
const menu = document.querySelector(".btn__toggle-menu");
const hc = document.querySelector(".hc") as HTMLElement;
const closeSearch = document.querySelector("#search-close");

menu?.addEventListener("click", () => {
  hc.classList.toggle("menu-open");
});

search?.addEventListener("click", () => {
  hc.classList.toggle("search-open");
});

closeSearch?.addEventListener("click", () => {
  hc.classList.remove("search-open");
});
