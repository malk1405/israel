import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';
import templatePolyfill from 'template-polyfill';

import activateForms from './components/forms';

(function vendors() {
  svg4everybody();
  picturefill();
  templatePolyfill();
})();

(function activate() {
  activateForms();
})();
