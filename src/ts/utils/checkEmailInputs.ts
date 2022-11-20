export const checkEmailInputs = (selector: string) => {
  const txtInputs = document.querySelectorAll<HTMLElement>(selector);
  txtInputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key.match(/[а-яё]/gi)) {
        e.preventDefault();
      }
    });

    input.addEventListener("change", (e) => {
      const targetElem = e.target as HTMLInputElement;
      if (targetElem.value.match(/[а-яё]/gi)) {
        targetElem.value = "";
      }
    });
  });
};
