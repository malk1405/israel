import {toggleClass} from '../utils/toggleClass';

function activateTabs({tabsClass, itemsClass}) {
  const tabs = document.querySelectorAll(`.${tabsClass}`);
  const items = document.querySelectorAll(`.${itemsClass}`);

  tabs.forEach((el) => {
    el.addEventListener(`change`, (e) => {
      showElems(+e.target.dataset.index);
    });
  });

  setIndices();
  showElems(0);

  function setIndices() {
    tabs.forEach((el, i) => {
      el.dataset.index = i;
    });
  }

  function showElems(index) {
    items.forEach((el, i) => {
      toggleClass(el, `${itemsClass}--hidden`, i !== index);
    });
  }
}

export default activateTabs;
