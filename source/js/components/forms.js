import activateForm from './form/form';
import createModal from './modal';
import createAccepted from './accepted';

const activateForms = () => {
  document.forms.forEach((form) => {
    activateForm(form);
    form.addEventListener(`submit`, onSubmit);
  });

  function onSubmit() {
    const modal = createModal();
    modal.setContent(createAccepted(modal));
  }
};

export default activateForms;
