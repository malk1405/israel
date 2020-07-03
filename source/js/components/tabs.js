import {toggleClass} from '../utils/toggleClass';

function activateTabs({tabs, items, hiddenClass}) {
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
      toggleClass(el, hiddenClass, i !== index);
    });
  }
}

export default activateTabs;
