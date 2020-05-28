const activateForm = (form) => {
  if (!form) {
    return;
  }

  activateInputs(form);
  activatePhoneField(form);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    form.reset();
  });
};

function activateInputs(form) {
  const inputs = form.querySelectorAll(`.input`);

  for (let i = 0; i < inputs.length; i++) {
    const className = `input--not-touched`;
    inputs[i].classList.add(className);

    inputs[i].addEventListener(`focus`, function onFocus() {
      inputs[i].classList.remove(className);
      inputs[i].removeEventListener(`blur`, onFocus);
    });
  }
}

function activatePhoneField(form) {
  const phoneField = form.querySelector(`[type="tel"]`);

  if (!phoneField) {
    return;
  }

  window.iMask(phoneField, {
    mask: `+{7} (000) 000 00 00`,
  });
}

export default activateForm;
