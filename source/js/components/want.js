import activatePhoneField from "../utils/activatePhoneField";

const activateWant = () => {
  const form = document.querySelector(`.want__form-container form`);

  if (!form) {
    return;
  }


  activatePhoneField(form);

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    form.reset();
  });
};

export default activateWant;
