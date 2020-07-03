function activateFaq() {
  const items = document.querySelectorAll(`.faq__item`);

  items.forEach((item) => {
    const button = item.querySelector(`button`);

    if (!button) {
      return;
    }

    button.addEventListener(`click`, function () {
      item.classList.toggle(`faq__item--open`);
    });
  });
}

export default activateFaq;
