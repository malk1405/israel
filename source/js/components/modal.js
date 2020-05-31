function createModal(el) {
  if (!(`content` in document.createElement(`template`))) {
    return;
  }

  const template = document.querySelector(`#modal-template`);

  if (!template) {
    return;
  }

  const clone = template.content.cloneNode(true);

  const modalContainer = clone.querySelector(`.modal-overlay`);
  const modal = modalContainer.querySelector(`.modal`);
  const closeBtn = modal.querySelector(`.modal__close-btn`);
  closeBtn.addEventListener(`click`, destroy);

  document.body.appendChild(modalContainer);
  function destroy() {
    document.body.removeChild(modalContainer);
  }
}

export default createModal;
