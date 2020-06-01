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

  modalContainer.addEventListener(`click`, onClick);

  document.body.appendChild(modalContainer);
  document.addEventListener(`keydown`, onEscape);

  function onClick(e) {
    const targets = [modalContainer, closeBtn];

    for (let i = 0; i < targets.length; i++) {
      if (e.target === targets[i]) {
        destroy();
        return;
      }
    }
  }

  function onEscape(e) {
    if (e.keyCode === 27) {
      destroy();
    }
  }

  function destroy() {
    document.removeEventListener(`keydown`, onEscape);
    modalContainer.removeEventListener(`click`, onClick);

    document.body.removeChild(modalContainer);
  }
}

export default createModal;
