export default class MainNav {
  constructor(element) {
    this.element = element;
    this.changeStylesIfScrolling = this.changeStylesIfScrolling.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  changeStylesIfScrolling() {
    if (pageYOffset > 10) {
      this.element.classList.add("main-nav--scrolled");
    } else {
      this.element.classList.remove("main-nav--scrolled");
    }
  }

  scrollTo(event) {
    const target = event.target;
    if (target.nodeName !== "A") return;
    event.preventDefault();

    const href = target.getAttribute("href");
    const el = document.querySelector(href);
    const top = el.getBoundingClientRect().top + window.pageYOffset - this.element.offsetHeight;

    window.scrollTo({ top: top, behavior: "smooth" });
  }

  init() {
    this.element.addEventListener("click", this.scrollTo);
    window.addEventListener("scroll", this.changeStylesIfScrolling);
  }
}
