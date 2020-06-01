function createModal({content, focusedElement} = {}) {
  if (!(`content` in document.createElement(`template`))) {
    return;
  }

  const template = document.querySelector(`#modal-template`);

  if (!template) {
    return;
  }

  const clone = template.content.cloneNode(true);

  const modalContainer = clone.querySelector(`.modal-overlay`);
  const traps = modalContainer.querySelectorAll(`.modal__focus-trap`);
  const modal = modalContainer.querySelector(`.modal`);
  const closeBtn = modal.querySelector(`.modal__close-btn`);

  for (let i = 0; i < traps.length; i++) {
    traps[i].addEventListener(`focus`, resetFocus);
  }

  modalContainer.addEventListener(`click`, onClick);

  if (content) {
    modal.appendChild(content);
  }

  document.body.appendChild(modalContainer);
  document.addEventListener(`keydown`, onEscape);

  setFocus();

  function onClick(e) {
    const targets = [modalContainer, closeBtn];

    for (let i = 0; i < targets.length; i++) {
      if (e.target === targets[i]) {
        destroy();
        return;
      }
    }
  }

  function setFocus() {
    const el = modal.querySelector(focusedElement) || closeBtn;
    el.focus();
  }

  function resetFocus() {
    closeBtn.focus();
  }

  function onEscape(e) {
    if (e.keyCode === 27) {
      destroy();
    }
  }

  function destroy() {
    document.removeEventListener(`keydown`, onEscape);
    modalContainer.removeEventListener(`click`, onClick);
    modalContainer.removeEventListener(`blur`, setFocus);

    for (let i = 0; i < traps.length; i++) {
      traps[i].removeEventListener(`focus`, resetFocus);
    }

    document.body.removeChild(modalContainer);
  }
}

export default createModal;
