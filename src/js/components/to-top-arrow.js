export default class ToTopLink {
  constructor(element) {
    this.element = element;
    this.toTopHandler = this.toTopHandler.bind(this);
  }

  toTopHandler(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  init() {
    this.element.addEventListener("click", this.toTopHandler);
  }
}
