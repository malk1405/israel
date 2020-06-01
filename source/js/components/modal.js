import setListeners from '../utils/setListeners';

function createModal({content, focusedElement} = {}) {
  if (!(`content` in document.createElement(`template`))) {
    return;
  }

  const template = document.querySelector(`#modal-template`);

  if (!template) {
    return;
  }

  const clone = template.content.cloneNode(true);

  const container = clone.querySelector(`.modal`);
  const modal = container.querySelector(`.modal__body`);
  const closeBtn = modal.querySelector(`.modal__close-btn`);
  const backdrop = container.querySelector(`.modal__backdrop`);

  if (content) {
    modal.appendChild(content);
  }

  document.body.appendChild(container);

  const closeOnEsc = setListeners([document], [`keydown`], onEscape);
  closeOnEsc.add();

  const closeOnClick = setListeners([backdrop, closeBtn], [`click`], destroy);
  closeOnClick.add();

  const resetFocus = setListeners([container, backdrop], [`focus`], function () {
    closeBtn.focus();
  });
  resetFocus.add();

  setFocus();

  function destroy() {

    closeOnEsc.remove();
    closeOnClick.remove();
    resetFocus.remove();

    document.body.removeChild(container);
  }

  function setFocus() {
    const el = modal.querySelector(focusedElement) || closeBtn;
    el.focus();
  }

  function onEscape(e) {
    if (e.keyCode === 27) {
      destroy();
    }
  }
}


export default createModal;
