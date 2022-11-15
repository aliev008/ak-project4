export class Slider {
  container: HTMLElement;
  next: HTMLElement;
  prev: HTMLElement;
  slides: HTMLCollectionOf<HTMLElement>;
  triggers: NodeListOf<HTMLElement>;
  slideIndex: number;
  numberOfSlides: number;
  animated: boolean;
  activeClass: string;
  autoplayOn: boolean;

  constructor({container = null, triggers = null, next = null, prev = null, animated = null, activeClass = null, autoplayOn = null} = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.children as HTMLCollectionOf<HTMLElement>;
    this.triggers = document.querySelectorAll(triggers);
    this.slideIndex = 1;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.numberOfSlides = this.slides.length;
    this.animated = animated;
    this.activeClass = activeClass;
    this.autoplayOn = autoplayOn;
  }
}
