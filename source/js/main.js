import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';
import templatePolyfill from 'template-polyfill';

import activateForms from './components/forms';
import activateOrder from './components/order';
import activatePrograms from './components/programs';

(function vendors() {
  svg4everybody();
  picturefill();
  templatePolyfill();
})();

(function activate() {
  activateOrder();
  activateForms();
  activatePrograms();
})();
