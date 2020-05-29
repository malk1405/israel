import iMask from "imask/esm/imask";
import "imask/esm/masked/number";

const activateForm = (form) => {
  if (!form) {
    return;
  }

  activateInputs(form);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    form.reset();
    activateInputs(form);
  });
};

function activateInputs(form) {
  const inputs = form.querySelectorAll(`.input`);

  inputs.forEach((input) => {
    if (input.type === `tel`) {
      activatePhoneField(input);
    }

    const className = `input--not-touched`;
    input.classList.add(className);

    input.addEventListener(`focus`, function onFocus() {
      input.classList.remove(className);
      input.removeEventListener(`focus`, onFocus);
    });
  });
}

function activatePhoneField(phoneField) {
  iMask(phoneField, {
    mask: `+{7} (000) 000 00 00`
  });
}

export default activateForm;
