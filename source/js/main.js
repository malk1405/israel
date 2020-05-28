
import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';

import activateForms from "./components/forms";

(function vendors() {
  svg4everybody();
  picturefill();
})();


(function activate() {
  activateForms();
})();
