import { Slider } from "./Slider";
import { getData } from "../../services/requests";
import { downloadFile } from "../../utils/downloadFile";

export class ModulesSlider extends Slider {
  constructor({ container, nextModuleTriggers, prevModuleTriggers = null }) {
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

  async downloadPDF(): Promise<void> {
    const downloadBtns = document.querySelectorAll(
        ".module__info-book .download"
      ),
      data = await getData("assets/db.json");

    downloadBtns &&
      downloadBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          const pdfName = data.pdf_files[index].name;
          const pdfUrl = `assets/files/${pdfName}.pdf`;
          downloadFile(pdfUrl, pdfName);
        });
      });
  }

  bindTriggers() {
    this.nextModuleTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        this.plusSlides(1);
      });
    });

    this.prevModuleTriggers &&
      this.prevModuleTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          this.plusSlides(-1);
        });
      });

    this.homeBtns.forEach((homeBtn) => {
      homeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.downloadPDF();
  }
  render(): void {
    try {
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    } catch (error) {}
  }
}
