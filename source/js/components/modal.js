import setListeners from '../utils/setListeners';

function createModal({content, focusedElement} = {}) {
  const template = document.querySelector(`#modal-template`);

  if (!template) {
    return {destroy() {}};
  }

  const clone = template.content.cloneNode(true);

  const container = clone.querySelector(`.modal`);
  const modal = container.querySelector(`.modal__body`);
  const closeBtn = modal.querySelector(`.modal__close-btn`);
  const backdrop = container.querySelector(`.modal__backdrop`);

  if (content) {
    modal.appendChild(content);
  }

  const body = document.body;

  lockBody();
  body.appendChild(container);

  const listeners = [
    {elements: [document], events: [`keydown`], fn: onEscape},
    {elements: [backdrop, closeBtn], events: [`click`], fn: destroy},
    {elements: [container, backdrop], events: [`focus`], fn: resetFocus},
  ].map(setListeners);

  listeners.forEach((el) => {
    el.add();
  });

  setFocus();

  return {destroy};

  function destroy() {
    listeners.forEach((el) => {
      el.remove();
    });

    body.removeChild(container);
    unlockBody();
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

  function lockBody() {
    body.dataset.scrollY = getBodyScrollTop();
    body.style.top = `-${body.dataset.scrollY}px`;
    body.classList.add(`body--lock`);

    function getBodyScrollTop() {
      return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.ScrollTop) ||
        (body && body.scrollTop)
      );
    }
  }

  function unlockBody() {
    body.classList.remove(`body--lock`);
    window.scrollTo(0, body.dataset.scrollY);
    delete body.dataset.scrollY;
    body.style.top = ``;
  }
}

export default createModal;
