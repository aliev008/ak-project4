export const clearInputs = (inputs: NodeListOf<HTMLElement>) => {
  inputs.forEach((input: HTMLInputElement) => {
    switch (input.getAttribute("type")) {
      case "checkbox":
        input.checked = false;
        input.required = true;
        break;
      default:
        input.value = "";
    }
  });
};
