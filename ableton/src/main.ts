const button = document.querySelector(".main-nav__trigger");
const header = document.querySelector("header");

const moreNav = document.querySelector(".main-nav__more");
const moreButton = document.querySelector(".main-nav__link-list__item__more");

function openMenu() {
  header?.classList.toggle("is-expanded");
}

function openMore() {
  const v = moreNav?.getAttribute("aria-hidden");
  moreNav?.setAttribute("aria-hidden", v == "true" ? "false" : "true");
}

button?.addEventListener("click", openMenu);
moreButton?.addEventListener("click", openMore);
