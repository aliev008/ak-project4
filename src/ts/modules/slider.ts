export class Slider {
  selector: HTMLElement;
  slides: HTMLElement[];
  triggers: NodeListOf<HTMLElement>;
  slideIndex: number;
  numberOfSlides: number;

  constructor(selector: string, triggers: string) {
    this.selector = document.querySelector(selector);
    this.slides = Array.from(this.selector.children as HTMLCollectionOf<HTMLElement>);
    this.triggers = document.querySelectorAll(triggers);
    this.slideIndex = 1;
    this.numberOfSlides = this.slides.length;
  }

  showSlides(n: number): void {
    n > this.numberOfSlides && (this.slideIndex = 1);
    n < 1 && (this.slideIndex = this.numberOfSlides);

    this.slides.forEach((slide): void => {
      slide.style.display = "none";
      slide.classList.add("animated", "fadeIn");
    });

    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n: number): void {
    this.showSlides((this.slideIndex += n));
  }

  render(): void {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        this.plusSlides(1);
      });
    });
    this.showSlides(this.slideIndex);
  }
}
