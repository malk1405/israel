import setListeners from '../utils/setListeners';

function createModal({content, focusedElement} = {}) {
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

  const listeners = [
    {elements: [document], events: [`keydown`], fn: onEscape},
    {elements: [backdrop, closeBtn], events: [`click`], fn: destroy},
    {elements: [container, backdrop], events: [`focus`], fn: resetFocus},
  ].map(setListeners);

  listeners.forEach((el) => {
    el.add();
  });

  setFocus();

  function destroy() {
    listeners.forEach((el) => {
      el.remove();
    });

    document.body.removeChild(container);
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
}

export default createModal;
