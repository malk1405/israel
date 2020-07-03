import activateTabs from './tabs';

function activateLife() {
  const tabs = document.querySelectorAll(`.life__gallery-radio`);

  console.log(tabs);
  const items = document.querySelectorAll(`.life__picture`);
  const hiddenClass = `life__picture--hidden`;
  activateTabs({tabs, items, hiddenClass});
}

export default activateLife;
