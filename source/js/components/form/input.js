function activateInput(input) {
  const className = `input--not-touched`;
  input.classList.add(className);

  const events = [`focus`, `invalid`];

  toggleListeners(true);

  function onEvent() {
    input.classList.remove(className);
    toggleListeners(false);
  }

  function toggleListeners(condition) {
    for (let i = 0; i < events.length; i++) {
      input[`${condition ? `add` : `remove`}EventListener`](events[i], onEvent);
    }
  }
}

export default activateInput;
