import { Slider } from "./Slider";

export class SliderMiniHorizontal extends Slider {
  autoplayInit: NodeJS.Timer;
  constructor({ container, next, prev, activeClass, animated, autoplayOn }) {
    super({ container, next, prev, activeClass, animated, autoplayOn });
    this.autoplayInit = setInterval(() => this.nextSlide(), 5000);
  }

  decorizeSlides() {
    Array.from(this.slides).forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animated) {
        slide.querySelector<HTMLElement>(
          ".card__controls-arrow"
        ).style.opacity = "0";
        slide.querySelector<HTMLElement>(".card__title").style.opacity = ".4";
      }
    });

    this.slides[0].classList.add(this.activeClass);

    if (this.animated) {
      this.slides[0].querySelector<HTMLElement>(
        ".card__controls-arrow"
      ).style.opacity = "1";
      this.slides[0].querySelector<HTMLElement>(".card__title").style.opacity =
        "1";
    }
  }

  nextSlide() {
    const lastItemType = this.slides[this.slides.length - 1].tagName;
    if (lastItemType === "BUTTON") {
      const lastItem = this.slides[this.slides.length - 2];
      this.container.insertBefore(this.slides[0], lastItem);
    } else {
      this.container.append(this.slides[0]);
    }
    this.decorizeSlides();
  }

  prevSlide() {
    const lastItemType = this.slides[this.slides.length - 1].tagName;
    if (lastItemType === "BUTTON") {
      const prevItem = this.slides[this.slides.length - 3];
      this.container.insertBefore(prevItem, this.slides[0]);
    } else {
      const prevItem = this.slides[this.slides.length - 1];
      this.container.insertBefore(prevItem, this.slides[0]);
    }
    this.decorizeSlides();
  }

  bindTriggers() {
    this.next.addEventListener("click", () => this.nextSlide());
    this.prev.addEventListener("click", () => this.prevSlide());
    this.container.addEventListener("mouseenter", () => {
      clearInterval(this.autoplayInit);
    });
    this.container.addEventListener("mouseleave", () =>
      this.activeSliderAnimation()
    );
  }

  activeSliderAnimation() {
    this.autoplayInit = setInterval(() => this.nextSlide(), 5000);
  }

  init() {
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start; 
        `;

    this.bindTriggers();
    this.decorizeSlides();
  }
}
