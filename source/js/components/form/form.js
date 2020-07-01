import activatePhoneField from './phone';
import activateInput from './input';

const activateForm = (form) => {
  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll(`.input`);

  process(activatePhoneField);
  process(activateInput);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    process(activateInput);

    const formData = {};
    process(getData);

    form.reset();

    function getData(input) {
      if (input.name) {
        formData[input.name] = input.dataset.maskedValue || input.value;
      }
    }
  });

  function process(fn) {
    inputs.forEach(fn);
  }
};

export default activateForm;
