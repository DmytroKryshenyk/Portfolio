export default class Header {
  constructor(element) {
    this.element = element;
    this.scrollTo = this.scrollTo.bind(this);
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
  }
}
