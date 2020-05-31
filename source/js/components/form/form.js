import activatePhoneField from './phone';
import activateInput from './input';
import createModal from '../modal';

const activateForm = (form) => {
  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll(`.input`);

  process(activatePhoneField);
  process(activateInput);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    form.reset();
    process(activateInput);
    createModal();
  });

  function process(fn) {
    for (let i = 0; i < inputs.length; i++) {
      fn(inputs[i]);
    }
  }
};

export default activateForm;
