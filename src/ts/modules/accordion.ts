export class Accordion {
  questions: NodeListOf<HTMLElement>;
  answers: NodeListOf<HTMLElement>;

  constructor({ questions, answers }) {
    this.questions = document.querySelectorAll(questions);
    this.answers = document.querySelectorAll(answers);
  }
  // const questions = document.querySelectorAll("#accordion > p"),
  //   answers = document.querySelectorAll("#accordion > div");

  showAnswers(question, answer) {
    question.classList.toggle("question-active");

    if (question.classList.contains("question-active")) {
      answer.classList.add("active");
      answer.style.setProperty("--max-height", `${answer.scrollHeight + 80}px`);
    } else {
      answer.classList.remove("active");
      answer.style.setProperty("--max-height", `0px`);
    }
  }

  bindTriggers() {
    this.answers.forEach((answer) => {
      answer.style.setProperty("--max-height", `0px`);
      answer.style.display = 'block';
    });

    this.questions.forEach((question, index) => {
      const answer = this.answers[index];
      question.tabIndex = 0;
      question.addEventListener("click", () => {
        this.showAnswers(question, answer);
      });
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.showAnswers(question, answer);
        }
      });
    });
  }
  init() {
    this.bindTriggers();
  }
}
