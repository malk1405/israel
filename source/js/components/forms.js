import activateForm from "../utils/activateForm";

const activateForms = () => {
  document.forms.forEach((form) => {
    activateForm(form);
  });
};

export default activateForms;
