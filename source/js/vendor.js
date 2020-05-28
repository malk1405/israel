import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';

import IMask from 'imask/esm/imask';
import 'imask/esm/masked/number';

(function vendors() {
  svg4everybody();
  picturefill();

  window.iMask = IMask;
})();
