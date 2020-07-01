/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/js/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/form/form.js":
/*!*******************************************!*\
  !*** ./source/js/components/form/form.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone */ "./source/js/components/form/phone.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./source/js/components/form/input.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal */ "./source/js/components/modal.js");







var activateForm = function activateForm(form) {
  if (!form) {
    return;
  }

  var inputs = form.querySelectorAll(".input");
  process(_phone__WEBPACK_IMPORTED_MODULE_3__["default"]);
  process(_input__WEBPACK_IMPORTED_MODULE_4__["default"]);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    process(_input__WEBPACK_IMPORTED_MODULE_4__["default"]);
    var formData = {};
    process(getData);
    form.reset();
    var modal = Object(_modal__WEBPACK_IMPORTED_MODULE_5__["default"])({
      content: getModalContent()
    });

    function getData(input) {
      if (input.name) {
        formData[input.name] = input.dataset.maskedValue || input.value;
      }
    }

    function getModalContent() {
      var template = document.querySelector("#accepted-template");

      if (!template) {
        return null;
      }

      var clone = template.content.cloneNode(true);
      var acceptedButton = clone.querySelector(".accepted__button");
      acceptedButton.addEventListener("click", function () {
        modal.destroy();
      });
      return clone.querySelector(".accepted");
    }
  });

  function process(fn) {
    inputs.forEach(fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (activateForm);

/***/ }),

/***/ "./source/js/components/form/input.js":
/*!********************************************!*\
  !*** ./source/js/components/form/input.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_setListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/setListeners */ "./source/js/utils/setListeners.js");


function activateInput(input) {
  var className = "input--not-touched";
  var listener = Object(_utils_setListeners__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elements: [input],
    events: ["input", "invalid"],
    fn: onEvent
  });
  input.classList.add(className);
  listener.add();

  function onEvent() {
    input.classList.remove(className);
    listener.remove();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (activateInput);

/***/ }),

/***/ "./source/js/components/form/phone.js":
/*!********************************************!*\
  !*** ./source/js/components/form/phone.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function activatePhoneField(input) {
  if (input.type !== "tel") {
    return;
  }

  var maskedValue = "";
  var phonePattern = input.title;
  var nonDigits = {
    length: 0
  };

  for (var i = 0; i < phonePattern.length; i++) {
    var char = phonePattern.charAt(i);

    if (!isDigit(char) && char !== "X") {
      nonDigits[i] = char;
      nonDigits.length++;

      if (!nonDigits.parenthesesIndex && char === "(") {
        nonDigits.parenthesesIndex = i;
      }
    }
  }

  var countryCode = "";

  for (var _i = 0; _i < phonePattern.length; _i++) {
    var _char = phonePattern.charAt(_i);

    if (isDigit(_char)) {
      countryCode += _char;
    } else if (countryCode) {
      break;
    }
  }

  var keyCode;
  input.addEventListener("keydown", function (e) {
    keyCode = e.keyCode;
  });
  input.addEventListener("input", function (e) {
    var value = e.target.value;
    var newMaskedValue = getMaskedValue(value);
    var newValue = getFullValue(newMaskedValue);
    var cursorPosition = event.target.selectionEnd;
    var shortValue = value.substr(0, cursorPosition);
    var shortMaskedValue = getMaskedValue(shortValue);
    var newShortValue = getFullValue(shortMaskedValue);
    cursorPosition = newShortValue.length;
    var deleteCode = 46;

    if (keyCode === deleteCode && cursorPosition < newValue.length) {
      while (!isDigit(newValue[cursorPosition])) {
        cursorPosition++;
      }
    }

    if (cursorPosition <= nonDigits.parenthesesIndex) {
      cursorPosition = nonDigits.parenthesesIndex + 1;
    }

    maskedValue = newMaskedValue;
    input.dataset.maskedValue = maskedValue;
    input.value = newValue;
    input.setSelectionRange(cursorPosition, cursorPosition);
  });
  input.addEventListener("blur", function () {
    if (maskedValue === countryCode) {
      input.value = "";
    }
  });

  function getMaskedValue(value) {
    var res = "";

    for (var _i2 = 0; _i2 < value.length; _i2++) {
      var _char2 = value.charAt(_i2);

      if (isDigit(_char2)) {
        res += _char2;
      }
    }

    if (res.substr(0, countryCode.length) !== countryCode) {
      res = countryCode + res;
    }

    var maskedPhoneLength = phonePattern.length - nonDigits.length;
    return res.substr(0, maskedPhoneLength);
  }

  function getFullValue(str) {
    var res = "";

    for (var _i3 = 0; _i3 < str.length; _i3++) {
      while (nonDigits[res.length]) {
        res += nonDigits[res.length];
      }

      res += str[_i3];
    }

    while (res.length <= nonDigits.parenthesesIndex) {
      res += nonDigits[res.length];
    }

    return res;
  }

  function isDigit(c) {
    return !isNaN(parseInt(c, 10));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (activatePhoneField);

/***/ }),

/***/ "./source/js/components/forms.js":
/*!***************************************!*\
  !*** ./source/js/components/forms.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form */ "./source/js/components/form/form.js");




var activateForms = function activateForms() {
  document.forms.forEach(_form_form__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (activateForms);

/***/ }),

/***/ "./source/js/components/modal.js":
/*!***************************************!*\
  !*** ./source/js/components/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_setListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/setListeners */ "./source/js/utils/setListeners.js");





function createModal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      content = _ref.content,
      focusedElement = _ref.focusedElement;

  var template = document.querySelector("#modal-template");

  if (!template) {
    return {
      destroy: function destroy() {}
    };
  }

  var clone = template.content.cloneNode(true);
  var container = clone.querySelector(".modal");
  var modal = container.querySelector(".modal__body");
  var closeBtn = modal.querySelector(".modal__close-btn");
  var backdrop = container.querySelector(".modal__backdrop");

  if (content) {
    modal.appendChild(content);
  }

  var body = document.body;
  lockBody();
  body.appendChild(container);
  var listeners = [{
    elements: [document],
    events: ["keydown"],
    fn: onEscape
  }, {
    elements: [backdrop, closeBtn],
    events: ["click"],
    fn: destroy
  }, {
    elements: [container, backdrop],
    events: ["focus"],
    fn: resetFocus
  }].map(_utils_setListeners__WEBPACK_IMPORTED_MODULE_3__["default"]);
  listeners.forEach(function (el) {
    el.add();
  });
  setFocus();
  return {
    destroy: destroy
  };

  function destroy() {
    listeners.forEach(function (el) {
      el.remove();
    });
    body.removeChild(container);
    unlockBody();
  }

  function setFocus() {
    var el = modal.querySelector(focusedElement) || closeBtn;
    el.focus();
  }

  function resetFocus() {
    closeBtn.focus();
  }

  function onEscape(e) {
    if (e.keyCode === 27) {
      destroy();
    }
  }

  function lockBody() {
    body.dataset.scrollY = getBodyScrollTop();
    body.style.top = "-".concat(body.dataset.scrollY, "px");
    body.classList.add("body--lock");

    function getBodyScrollTop() {
      return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
    }
  }

  function unlockBody() {
    body.classList.remove("body--lock");
    window.scrollTo(0, body.dataset.scrollY);
    delete body.dataset.scrollY;
    body.style.top = "";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createModal);

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var template_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! template-polyfill */ "./node_modules/template-polyfill/index.js");
/* harmony import */ var template_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(template_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms */ "./source/js/components/forms.js");





(function vendors() {
  svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
  picturefill__WEBPACK_IMPORTED_MODULE_0___default()();
  template_polyfill__WEBPACK_IMPORTED_MODULE_2___default()();
})();

(function activate() {
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/***/ }),

/***/ "./source/js/utils/setListeners.js":
/*!*****************************************!*\
  !*** ./source/js/utils/setListeners.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);



function setListeners(_ref) {
  var elements = _ref.elements,
      events = _ref.events,
      fn = _ref.fn;
  return {
    add: function add() {
      set(true);
    },
    remove: function remove() {
      set(false);
    }
  };

  function set(condition) {
    elements.forEach(function (element) {
      events.forEach(function (event) {
        element["".concat(condition ? "add" : "remove", "EventListener")](event, fn);
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setListeners);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map