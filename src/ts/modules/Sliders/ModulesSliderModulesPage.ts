import { Slider } from "./Slider";

export class ModulesSliderModulesPage extends Slider {
  constructor({ container, nextModuleTriggers, prevModuleTriggers}) {
    try {
      super({ container, nextModuleTriggers, prevModuleTriggers });
    } catch (error) {}
  }

  showSlides(n: number): void {
    if (n > this.numberOfSlides) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.numberOfSlides;

    const currentSlide: HTMLElement = this.slides[this.slideIndex - 1];

    Array.from(this.slides).forEach((slide): void => {
      slide.style.display = "none";
      slide.classList.add("animated", "fadeIn");
    });

    if (currentSlide.classList.contains("modules")) {
      const popupCard = currentSlide.querySelector<HTMLElement>(".hanson");

      popupCard.style.display = "none";
      popupCard.classList.add("animated", "fadeInUp");

      setTimeout(() => {
        popupCard.style.display = "block";
      }, 3000);
    }

    currentSlide.style.display = "block";
  }

  plusSlides(n: number): void {
    this.showSlides((this.slideIndex += n));
  }

  render(): void {
    try {
      this.nextModuleTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          this.plusSlides(1);
        });
      });

      this.prevModuleTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          this.plusSlides(-1);
        });
      });

      this.showSlides(this.slideIndex);
    } catch (error) {}
  }
}