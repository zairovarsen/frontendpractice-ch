import "./style.css";

const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

const expandableButtons = [
  ...document.querySelectorAll(".footer__link__expandable"),
];
const planFaqItems = [...document.querySelectorAll(".plan__faq__item")];

expandableButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const { target } = e;
    if (!target) {
      return;
    }
    const expanded = target.getAttribute("aria-expanded");
    target.setAttribute("aria-expanded", expanded == "true" ? "false" : "true");
  });
});

planFaqItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const { currentTarget } = e;

    if (!currentTarget) {
      return;
    }

    const button = (currentTarget as HTMLElement).querySelector(
      ".plan__faq__trigger"
    );

    const expanded = button?.getAttribute("aria-expanded");
    const content = (currentTarget as HTMLElement).querySelector(
      ".plan__faq__content"
    );

    switch (expanded) {
      case "true":
        button?.setAttribute("aria-expanded", "false");
        break;
      default:
        button?.setAttribute("aria-expanded", "true");
    }
    content?.toggleAttribute("hidden");
  });
});

burger?.addEventListener("click", () => {
  burger.classList.toggle("expanded");
  document.body.classList.toggle("expanded");
});

window.addEventListener("scroll", function (e) {
  const { scrollY } = window;
  if (scrollY >= 200) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});
