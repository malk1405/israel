function setListeners({elements, events, fn}) {
  return {
    add() {
      set(true);
    },
    remove() {
      set(false);
    },
  };

  function set(condition) {
    elements.forEach((element) => {
      events.forEach((event) => {
        element[`${condition ? `add` : `remove`}EventListener`](
            event,
            fn
        );
      });
    });
  }
}

export default setListeners;
