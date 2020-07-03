import activateTabs from './tabs';

function activatePrograms() {
  const tabs = document.querySelectorAll(`.programs__tab-radio`);
  const items = document.querySelectorAll(`.programs__item`);
  const hiddenClass = `programs__item--hidden`;
  activateTabs({tabs, items, hiddenClass});
}

export default activatePrograms;
