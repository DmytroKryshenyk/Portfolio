export default class SkillsProgresBar {
  constructor(element) {
    this.element = element;
  }

  addOrRemoveClassIfVisible(element) {
    // Дістаєм позицію елемента
    let targetElementPosition = {
        top: window.pageYOffset + element.getBoundingClientRect().top,
        bottom: window.pageYOffset + element.getBoundingClientRect().bottom
      },
      // Дістаєм позицію вікна
      windowPosition = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    /* Ниже умова, що якщо позиція нижньої частини елемента більше позиції верхньої частини вікна(то елемент видно зверху) і якщо позиція верхньої частини елемента менше позиції нижньої частини вікна( то елемент видно знизу). */
    if (
      targetElementPosition.bottom > windowPosition.top &&
      targetElementPosition.top < windowPosition.bottom
    ) {
      element.classList.add("skills__list--visible"); // Якщо елемент  видно, то запускаємо наступний код
    } else {
      element.classList.remove("skills__list--visible"); // Якщо елемент НЕ видно, то запускаємо наступний код
    }
  }

  init() {
    window.addEventListener("scroll", this.addOrRemoveClassIfVisible.bind(this, this.element));
  }
}
