import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';
import templatePolyfill from 'template-polyfill';

import activateForms from './components/forms';
import activateOrder from './components/order';
import activatePrograms from './components/programs';
import activateFaq from './components/form/faq';
import activateLife from './components/life';

(function vendors() {
  svg4everybody();
  picturefill();
  templatePolyfill();
})();

(function activate() {
  activateOrder();
  activateForms();
  activatePrograms();
  activateLife();
  activateFaq();
})();
