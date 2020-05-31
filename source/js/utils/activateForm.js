const activateForm = (form) => {
  if (!form) {
    return;
  }

  const resetInputs = activateInputs(form);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    form.reset();
    resetInputs();
  });
};

function activateInputs(form) {
  const inputs = form.querySelectorAll(`.input`);

  resetInputs();
  activatePhoneFields(inputs);

  function resetInputs() {
    for (let i = 0; i < inputs.length; i++) {
      resetInput(inputs[i]);
    }
  }

  function resetInput(el) {
    const className = `input--not-touched`;
    el.classList.add(className);

    const events = [`focus`, `invalid`];

    for (let i = 0; i < events.length; i++) {
      el.addEventListener(events[i], onEvent);
    }

    function onEvent() {
      el.classList.remove(className);

      for (let i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], onEvent);
      }
    }
  }

  return resetInputs;
}

function activatePhoneFields(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === `tel`) {
      activatePhoneField(inputs[i]);
    }
  }

  function activatePhoneField(field) {}
}
export default activateForm;
