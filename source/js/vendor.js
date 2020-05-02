import picturefill from 'picturefill';
import svg4everybody from 'svg4everybody';
import IMask from "imask";

(function vendors() {
  svg4everybody();
  picturefill();

  window.IMask = IMask;
})();
