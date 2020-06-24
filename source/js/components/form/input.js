import setListeners from '../../utils/setListeners';

function activateInput(input) {
  const className = `input--not-touched`;
  const listener = setListeners({elements: [input], events: [`input`, `invalid`], fn: onEvent});

  input.classList.add(className);
  listener.add();

  function onEvent() {
    input.classList.remove(className);
    listener.remove();
  }
}

export default activateInput;
