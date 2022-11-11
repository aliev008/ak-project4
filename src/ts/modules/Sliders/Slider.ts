export class Slider {
  container: HTMLElement;
  next: HTMLElement;
  prev: HTMLElement;
  slides: HTMLCollectionOf<HTMLElement>;
  triggers: NodeListOf<HTMLElement>;
  slideIndex: number;
  numberOfSlides: number;

  constructor({
    container = null,
    triggers = null,
    next = null,
    prev = null,
  } = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.children as HTMLCollectionOf<HTMLElement>;
    this.triggers = document.querySelectorAll(triggers);
    this.slideIndex = 1;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.numberOfSlides = this.slides.length;
    console.log(this);
  }
}
