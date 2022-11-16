export class DifferenceColumn {
  columnSelector: HTMLElement;
  items: NodeListOf<HTMLElement>;
  showButton: HTMLElement;
  itemsCounter: number;
  constructor({ columnSelector, columnItemsSelector }) {
    this.columnSelector = document.querySelector(columnSelector);
    this.items = document.querySelectorAll<HTMLElement>(columnItemsSelector);
    this.showButton = this.items[this.items.length - 1];
    this.itemsCounter = 0;
  }

  handleItems() {
    this.items.forEach((item) => {
      if (item !== this.showButton) item.style.display = "none";
      item.classList.add('animated', 'fadeIn');
    });
  }

  bindTriggers() {
    this.showButton.addEventListener("click", () => {
      this.items[this.itemsCounter].style.display = "flex";
      this.itemsCounter++;
      if (this.itemsCounter === this.items.length - 1) this.showButton.remove();
    });
  }

  init() {
    this.handleItems();
    this.bindTriggers();
  }
}
