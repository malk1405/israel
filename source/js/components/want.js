const activateWant = () => {
  const form = document.querySelector(`.want__form-container form`);

  if (!form) {
    return;
  }

  const phoneField = form.querySelector(`#want__form-phone`);


  const maskOptions = {
    mask: `+{7} (000) 000 00 00`
  };

  const mask = window.iMask(phoneField, maskOptions);


  phoneField.addEventListener(`focus`, () => {
    phoneField.classList.remove(`input--valid`);
    phoneField.classList.remove(`input--invalid`);
  });

  phoneField.addEventListener(`blur`, () => {
    phoneField.classList.add(`input--${mask.unmaskedValue.length < 11 ? `in` : ``}valid`);
  });


  form.addEventListener(`submit`, (e) => {
    e.preventDefault();


  });
};

export default activateWant;
