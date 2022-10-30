export class Slider {
  constructor(selector, triggers) {
    this.selector = document.querySelector(selector);
    this.slides = this.selector.children;
    this.triggers = document.querySelectorAll(triggers);
    this.slideIndex = 1;
    this.numberOfSlides = this.slides.length;
  }

  showSlides(n) {
    n > this.numberOfSlides && (this.slideIndex = 1);
    n < 1 && (this.slideIndex = this.numberOfSlides);

    this.slides.forEach((slide) => {
      slide.style.display = "none";
      slide.classList.add('animated', 'fadeIn');
    });
    this.slides[this.slideIndex - 1].style.display = "block";
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        this.plusSlides(1);
      });
    });
    this.showSlides(this.slideIndex);
  }
}