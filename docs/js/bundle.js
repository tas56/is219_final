/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Table.js":
/*!*************************!*\
  !*** ./src/js/Table.js ***!
  \*************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Table() {
    _classCallCheck(this, Table);
  }

  _createClass(Table, null, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var th = document.createElement("th");
          var text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data) {
      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var row = table.insertRow();
          console.log(element);
          var key = void 0;

          for (key in element) {
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Table;
}();

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table */ "./src/js/Table.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Table__WEBPACK_IMPORTED_MODULE_1__);


(0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_0__.default)('http://localhost:8000/api/v1/accounts', function (err, records) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _Table__WEBPACK_IMPORTED_MODULE_1___default().generateTableHead(table, data);
    _Table__WEBPACK_IMPORTED_MODULE_1___default().generateTable(table, dataRecords);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pczIxOWZpbmFsLy4vc3JjL2pzL1RhYmxlLmpzIiwid2VicGFjazovL2lzMjE5ZmluYWwvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly9pczIxOWZpbmFsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lzMjE5ZmluYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaXMyMTlmaW5hbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaXMyMTlmaW5hbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2lzMjE5ZmluYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pczIxOWZpbmFsLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiY2VsbCIsImluc2VydENlbGwiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJlcnIiLCJyZWNvcmRzIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFSZWNvcmRzIiwiVGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVA7QUFBQTtBQUFB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LFVBQUNXLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUNkLE1BQUlELEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2RFLFNBQUssQ0FBQywyQkFBMkJGLEdBQTVCLENBQUw7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFJN0IsS0FBSyxHQUFHUSxRQUFRLENBQUN3QixhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQSxRQUFJL0IsSUFBSSxHQUFHZ0MsTUFBTSxDQUFDQyxJQUFQLENBQWFKLE9BQU8sQ0FBQzdCLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBWDtBQUNBLFFBQUlrQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQzdCLElBQTFCO0FBRUFtQyxtRUFBQSxDQUF3QnBDLEtBQXhCLEVBQStCQyxJQUEvQjtBQUNBbUMsK0RBQUEsQ0FBb0JwQyxLQUFwQixFQUEyQm1DLFdBQTNCO0FBRUg7QUFFUixDQWRNLENBQVAsQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRhYmxlIHtcblxuICAgIHN0YXRpYyBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xuICAgICAgICBsZXQgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICAgICAgICBsZXQgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnO1xuXG5cbmdldEpTT04oJycsKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2FjY291bnRzJyxcbiAgICAoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZzogJyArIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICAgICAgICBsZXQgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgICAgICAgIFRhYmxlLmdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICAgICAgICAgIFRhYmxlLmdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcblxuICAgICAgICB9XG5cbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9