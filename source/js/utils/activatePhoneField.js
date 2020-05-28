const activatePhoneField = (form) => {
  const phoneField = form.querySelector(`[type="tel"]`);

  if (!phoneField) {
    return () => {};
  }

  const maskOptions = {
    mask: `+{7} (000) 000 00 00`,
  };

  const mask = window.iMask(phoneField, maskOptions);

  phoneField.addEventListener(`focus`, () => {
    phoneField.classList.remove(`input--valid`);
    phoneField.classList.remove(`input--invalid`);
  });

  phoneField.addEventListener(`blur`, () => {
    phoneField.classList.add(
        `input--${mask.unmaskedValue.length < 11 ? `in` : ``}valid`
    );
  });

  return () =>{
    phoneField.removeEventListener(`focus`);
    phoneField.removeEventListener(`blur`);
  };
};

export default activatePhoneField;
