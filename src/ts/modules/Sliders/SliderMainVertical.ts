import { Slider } from "./Slider";

export class SliderMainVertical extends Slider {
  constructor({container, triggers}) {
        super({container, triggers});
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
        this.triggers.forEach((trigger) => {
          trigger.addEventListener("click", () => {
            this.plusSlides(1);
          });

          trigger.parentElement.previousElementSibling.addEventListener('click', (event) => {
            event.preventDefault();
              this.slideIndex = 1;
              this.showSlides(this.slideIndex);
            })

        });

        this.showSlides(this.slideIndex);
      }
}