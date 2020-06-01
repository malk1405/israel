function setListeners(elements, events, fn) {
  return {
    add() {
      set(true);
    },
    remove() {
      set(false);
    },
  };

  function set(condition) {
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < events.length; j++) {
        elements[i][`${condition ? `add` : `remove`}EventListener`](
            events[j],
            fn
        );
      }
    }
  }
}

export default setListeners;
