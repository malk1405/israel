export default function deactivateLinks() {
  function noop(e) {
    e.preventDefault();
  }

  document.querySelectorAll(`a[href="#"]`).forEach((link) => {
    link.addEventListener(`click`, noop);
  });
}
