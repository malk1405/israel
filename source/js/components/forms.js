import activateForm from './form/form';

const activateForms = () => {
  const forms = document.forms;

  for (let i = 0; i < forms.length; i++) {
    activateForm(forms[i]);
  }
};

export default activateForms;
