function createAccepted(modal) {
  const template = document.querySelector(`#accepted-template`);

  if (!template) {
    return null;
  }

  const clone = template.content.cloneNode(true);
  const acceptedButton = clone.querySelector(`.accepted__button`);

  acceptedButton.addEventListener(`click`, function () {
    modal.destroy();
  });

  return clone.querySelector(`.accepted`);
}

export default createAccepted;
