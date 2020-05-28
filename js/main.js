/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/forms.js":
/*!***************************************!*\
  !*** ./source/js/components/forms.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_activateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/activateForm */ "./source/js/utils/activateForm.js");


var activateForms = function activateForms() {
  var forms = document.forms;

  for (var i = 0; i < forms.length; i++) {
    Object(_utils_activateForm__WEBPACK_IMPORTED_MODULE_0__["default"])(forms[i]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (activateForms);

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forms */ "./source/js/components/forms.js");


(function activate() {
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/***/ }),

/***/ "./source/js/utils/activateForm.js":
/*!*****************************************!*\
  !*** ./source/js/utils/activateForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var activateForm = function activateForm(form) {
  if (!form) {
    return;
  }

  activateInputs(form);
  activatePhoneField(form);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
  });
};

function activateInputs(form) {
  var inputs = form.querySelectorAll(".input");

  var _loop = function _loop(i) {
    var className = "input--not-touched";
    inputs[i].classList.add(className);
    inputs[i].addEventListener("focus", function onFocus() {
      inputs[i].classList.remove(className);
      inputs[i].removeEventListener("blur", onFocus);
    });
  };

  for (var i = 0; i < inputs.length; i++) {
    _loop(i);
  }
}

function activatePhoneField(form) {
  var phoneField = form.querySelector("[type=\"tel\"]");

  if (!phoneField) {
    return;
  }

  window.iMask(phoneField, {
    mask: "+{7} (000) 000 00 00"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (activateForm);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map