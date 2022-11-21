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
  nextModuleTriggers: NodeListOf<HTMLElement>;
  prevModuleTriggers: NodeListOf<HTMLElement>;
  homeBtns: NodeListOf<HTMLElement>;
  constructor({
    container = null,
    nextModuleTriggers = null,
    prevModuleTriggers = null,
    next = null,
    prev = null,
    animated = null,
    activeClass = null,
    autoplayOn = null,
  } = {}) {
    try {
      this.container = document.querySelector(container);
      this.slides = this.container.children as HTMLCollectionOf<HTMLElement>;
      this.nextModuleTriggers = document.querySelectorAll(nextModuleTriggers);
      this.prevModuleTriggers = document.querySelectorAll(prevModuleTriggers);
      this.slideIndex = 1;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.numberOfSlides = this.slides.length;
      this.animated = animated;
      this.activeClass = activeClass;
      this.autoplayOn = autoplayOn;
      this.homeBtns = document.querySelectorAll('.sidecontrol > a');
    } catch (error) {}
  }
}
