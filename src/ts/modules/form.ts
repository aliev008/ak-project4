import { postData } from "../services/requests";
import { clearInputs, checkEmailInputs } from "../utils";

export class Form {
  containerSelector: string;
  formBlock: HTMLElement;
  form: HTMLFormElement;
  formSubmitBtn: HTMLElement;
  formInputs: NodeListOf<HTMLElement>;
  state: {};
  formName: string;
  formPostStatus: {
    loadingMessage: string;
    successMessage: string;
    failMessage: string;
    loadingImg: string;
    successImg: string;
    failImg: string;
  };

  constructor({ containerSelector }) {
    this.containerSelector = containerSelector;
    this.formBlock = document.querySelector(containerSelector);
    this.form = this.formBlock.querySelector("form");
    this.formSubmitBtn = this.form.querySelector(".btn");
    this.formInputs = this.form.querySelectorAll<HTMLElement>("input");
    this.formName = this.form.parentElement.className
      .replace("__", " ")
      .replace(/((?<= )[a-z])|^[a-z]/g, (char) => char.toUpperCase());
    this.formPostStatus = {
      loadingMessage: "Loading...",
      successMessage:
        "Thank's! Our specialist will reach you as soon as possible!",
      failMessage: "Something gone wrong :-(",
      loadingImg: "assets/img/spinner.gif",
      successImg: "assets/img/ok.png",
      failImg: "assets/img/fail.png",
    };
  }

  submitForm() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.form.classList.add("animated", "fadeOut");

      const statusMessage = document.createElement("div");
      statusMessage.style.display = "none";
      statusMessage.classList.add("status", "animated", "fadeIn");
      this.formBlock.append(statusMessage);

      const statusImg = document.createElement("img");
      statusImg.setAttribute("src", this.formPostStatus.loadingImg);
      statusMessage.append(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = this.formPostStatus.loadingMessage;
      statusMessage.append(textMessage);

      setTimeout(() => {
        this.form.style.display = "none";
        statusMessage.style.display = "flex";
      }, 400);

      const formData = new FormData(this.form);
      formData.append("form_name", this.formName);
      const url = "assets/question.php";

      postData(url, formData)
        .then((result) => {
          if (result) {
            statusImg.setAttribute("src", this.formPostStatus.successImg);
            textMessage.textContent = this.formPostStatus.successMessage;
            console.log(result);
          } else {
            throw new Error();
          }
        })
        .catch((error) => {
          statusImg.setAttribute("src", this.formPostStatus.failImg);
          textMessage.textContent = this.formPostStatus.failMessage;
        })
        .finally(() => {
          setTimeout(() => {
            statusMessage.remove();
            this.form.style.display = "block";
            this.form.classList.remove("fadeOut");
            this.form.classList.add("fadeIn");
            clearInputs(this.formInputs);
            document.querySelector<HTMLSelectElement>(
              "#city"
            ).selectedIndex = 0;
          }, 5000);
        });
    });
  }

  init() {
    checkEmailInputs(`${this.containerSelector} input[name="email"]`);
    this.submitForm();
  }
}
