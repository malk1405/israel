import activateForm from './form/form';
import createModal from './modal';
import createAccepted from './accepted';

const activateForms = () => {
  document.forms.forEach((form) => {
    activateForm(form);
    form.addEventListener(`submit`, function () {
      const focusAfter = form.querySelector(`button[type="submit"]`);
      onSubmit(focusAfter);
    });
  });

  function onSubmit(focusAfter) {
    const modal = createModal({focusAfter});
    modal.setContent(createAccepted(modal));
  }
};

export default activateForms;
