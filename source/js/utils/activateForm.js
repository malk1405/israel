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

  const className = `input--not-touched`;
  const events = [`focus`, `invalid`];

  for (let i = 0; i < inputs.length; i++) {
    activateInput(inputs[i]);
  }

  function activateInput(input) {
    if (input.type === `tel`) {
      activatePhoneField(input);
    }

    input.classList.add(className);

    for (let i = 0; i < events.length; i++) {
      addListener(input, events[i]);
    }
  }

  function activatePhoneField(phoneField) {}

  function addListener(el, event) {
    el.addEventListener(event, function onEvent() {
      el.classList.remove(className);
      el.removeEventListener(event, onEvent);
    });
  }
}

export default activateForm;
