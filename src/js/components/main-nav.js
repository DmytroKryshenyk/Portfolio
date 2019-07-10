export default class MainNav {
  constructor(element) {
    this.element = element;
    this.changeStylesIfScrolling = this.changeStylesIfScrolling.bind(this);
  }

  changeStylesIfScrolling() {
    if (pageYOffset > 10) {
      this.element.classList.add("main-nav--scrolled");
    } else {
      this.element.classList.remove("main-nav--scrolled");
    }
  }

  init() {
    window.addEventListener("scroll", this.changeStylesIfScrolling);
  }
}
