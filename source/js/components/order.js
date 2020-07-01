import createModal from './modal';
import activateForm from './form/form';
import createAccepted from './accepted';

function activateOrder() {
  const orderButton = document.querySelector(`.header__button`);

  orderButton.addEventListener(`click`, function order() {

    const template = document.querySelector(`#order-template`);

    if (!template) {
      return;
    }

    const clone = template.content.cloneNode(true);
    const container = clone.querySelector(`.order`);

    const form = container.querySelector(`form`);
    activateForm(form);

    form.addEventListener(`submit`, function () {

      modal.setContent(createAccepted(modal));
      modal.setFocus();
    });

    const modal = createModal({content: container, focusAfter: orderButton});
    modal.setFocus(`input`);


  });


}

export default activateOrder;
