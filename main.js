/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function createAbout(){
    let h2 = document.createElement('h2');
    let para = document.createElement('p');
    let anchor = document.createElement('a');

    h2.textContent = "Passion for our culture";
    para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent id condimentum turpis. Pellentesque ultrices, 
                        erat id tempor vestibulum, lacus lacus condimentum massa, 
                        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
                        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
                        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
                        quis sodales sem dapibus sed. Sed non nisi mauris.`;
    anchor.textContent = "Contact us!";
    
    h2.classList.add('about-title');
    para.classList.add('about-para');
    anchor.classList.add('h-about');

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(h2);
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(para);
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(anchor);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function createHome(){
    let subtitle = document.createElement('p');
    let h1 = document.createElement('h1');
    let anchor = document.createElement('a');

    subtitle.textContent = "Argentinian restaurant";
    h1.textContent = "GAUCHO";
    anchor.textContent = "View menu";

    subtitle.classList.add('sub');
    anchor.classList.add('h-menu');

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(subtitle);
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(h1);
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(anchor);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
let lastBtn;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentDiv);




navigate(homeBtn);
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
lastBtn = homeBtn;

function navigate(clickedBtn){
    if(lastBtn != undefined){
        lastBtn.disabled = false;
        lastBtn.classList.remove('selected');

    }

    clickedBtn.disabled = true;
    clickedBtn.classList.add('selected');

    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);

    }
}

homeBtn.addEventListener("click", () => {
    navigate(homeBtn);
    lastBtn = homeBtn;
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuBtn.addEventListener("click", () => {
    navigate(menuBtn);
    lastBtn = menuBtn;
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

aboutBtn.addEventListener("click", () => {
    navigate(aboutBtn);
    lastBtn = aboutBtn;
    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


let dishes = [
    {
        title: "Asado",
        imgUrl: "img/asado.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    },
    {
        title: "Skewer",
        imgUrl: "img/skewer.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    },
    {
        title: "Choripan",
        imgUrl: "img/choripan.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    }
];

function createMenu(){
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    dishes.forEach(dish => {
        let card = document.createElement('div');
        let img = document.createElement('img');
        let dishTitle = document.createElement('h2');
        let para = document.createElement('p');

        card.classList.add('card');
        img.classList.add('img-dish');

        card.appendChild(img);
        card.appendChild(dishTitle);
        card.appendChild(para);

        img.src = dish.imgUrl;
        dishTitle.textContent = dish.title;
        para.textContent = dish.description;

        cardContainer.appendChild(card);
    });

    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendChild(cardContainer);
}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaURBQVU7QUFDZCxJQUFJLGlEQUFVO0FBQ2QsSUFBSSxpREFBVTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7QUN4Qm9DOztBQUVyQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLGlEQUFVO0FBQ2QsSUFBSSxpREFBVTtBQUNkLElBQUksaURBQVU7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDO0FBQ1M7QUFDQTtBQUNFOztBQUVyQztBQUNBLG9EQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9DbUM7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxpREFBVTtBQUNkOzs7Ozs7VUNsRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGVudERpdiBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGgyLnRleHRDb250ZW50ID0gXCJQYXNzaW9uIGZvciBvdXIgY3VsdHVyZVwiO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmFlc2VudCBpZCBjb25kaW1lbnR1bSB0dXJwaXMuIFBlbGxlbnRlc3F1ZSB1bHRyaWNlcywgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcmF0IGlkIHRlbXBvciB2ZXN0aWJ1bHVtLCBsYWN1cyBsYWN1cyBjb25kaW1lbnR1bSBtYXNzYSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBhdCBncmF2aWRhIGxlY3R1cyBtYXVyaXMgdml0YWUgbGFjdXMuIFF1aXNxdWUgbHVjdHVzIHRpbmNpZHVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhY3VzIG5vbiBhbGlxdWV0LiBJbiBuZWMgZWZmaWNpdHVyIHJpc3VzLiBOdWxsYW0gdnVscHV0YXRlIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpc3RpcXVlIGxvcmVtIHV0IG1hbGVzdWFkYS4gQWVuZWFuIHZlbmVuYXRpcyB2dWxwdXRhdGUgbnVuYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1aXMgc29kYWxlcyBzZW0gZGFwaWJ1cyBzZWQuIFNlZCBub24gbmlzaSBtYXVyaXMuYDtcbiAgICBhbmNob3IudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMhXCI7XG4gICAgXG4gICAgaDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdGl0bGUnKTtcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhcmEnKTtcbiAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnaC1hYm91dCcpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFuY2hvcik7XG59IiwiaW1wb3J0IGNvbnRlbnREaXYgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGxldCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiQXJnZW50aW5pYW4gcmVzdGF1cmFudFwiO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJHQVVDSE9cIjtcbiAgICBhbmNob3IudGV4dENvbnRlbnQgPSBcIlZpZXcgbWVudVwiO1xuXG4gICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3ViJyk7XG4gICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2gtbWVudScpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhbmNob3IpO1xufVxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJyk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyk7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1idG4nKTtcbmxldCBsYXN0QnRuO1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50RGl2O1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbm5hdmlnYXRlKGhvbWVCdG4pO1xuY3JlYXRlSG9tZSgpO1xubGFzdEJ0biA9IGhvbWVCdG47XG5cbmZ1bmN0aW9uIG5hdmlnYXRlKGNsaWNrZWRCdG4pe1xuICAgIGlmKGxhc3RCdG4gIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbGFzdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBsYXN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbiAgICB9XG5cbiAgICBjbGlja2VkQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjbGlja2VkQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICB3aGlsZShjb250ZW50RGl2LmZpcnN0Q2hpbGQpe1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG5cbiAgICB9XG59XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYXZpZ2F0ZShob21lQnRuKTtcbiAgICBsYXN0QnRuID0gaG9tZUJ0bjtcbiAgICBjcmVhdGVIb21lKCk7XG59KTtcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hdmlnYXRlKG1lbnVCdG4pO1xuICAgIGxhc3RCdG4gPSBtZW51QnRuO1xuICAgIGNyZWF0ZU1lbnUoKTtcbn0pO1xuXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hdmlnYXRlKGFib3V0QnRuKTtcbiAgICBsYXN0QnRuID0gYWJvdXRCdG47XG4gICAgY3JlYXRlQWJvdXQoKTtcbn0pOyIsImltcG9ydCBjb250ZW50RGl2IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmxldCBkaXNoZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJBc2Fkb1wiLFxuICAgICAgICBpbWdVcmw6IFwiaW1nL2FzYWRvLmpwZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXG4gICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBcbiAgICAgICAgUHJhZXNlbnQgaWQgY29uZGltZW50dW0gdHVycGlzLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMsIFxuICAgICAgICBlcmF0IGlkIHRlbXBvciB2ZXN0aWJ1bHVtLCBsYWN1cyBsYWN1cyBjb25kaW1lbnR1bSBtYXNzYSwgXG4gICAgICAgIGF0IGdyYXZpZGEgbGVjdHVzIG1hdXJpcyB2aXRhZSBsYWN1cy4gUXVpc3F1ZSBsdWN0dXMgdGluY2lkdW50IFxuICAgICAgICBsYWN1cyBub24gYWxpcXVldC4gSW4gbmVjIGVmZmljaXR1ciByaXN1cy4gTnVsbGFtIHZ1bHB1dGF0ZSBcbiAgICAgICAgdHJpc3RpcXVlIGxvcmVtIHV0IG1hbGVzdWFkYS4gQWVuZWFuIHZlbmVuYXRpcyB2dWxwdXRhdGUgbnVuYyxcbiAgICAgICAgcXVpcyBzb2RhbGVzIHNlbSBkYXBpYnVzIHNlZC4gU2VkIG5vbiBuaXNpIG1hdXJpcy5gXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlNrZXdlclwiLFxuICAgICAgICBpbWdVcmw6IFwiaW1nL3NrZXdlci5qcGdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFxuICAgICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gXG4gICAgICAgIFByYWVzZW50IGlkIGNvbmRpbWVudHVtIHR1cnBpcy4gUGVsbGVudGVzcXVlIHVsdHJpY2VzLCBcbiAgICAgICAgZXJhdCBpZCB0ZW1wb3IgdmVzdGlidWx1bSwgbGFjdXMgbGFjdXMgY29uZGltZW50dW0gbWFzc2EsIFxuICAgICAgICBhdCBncmF2aWRhIGxlY3R1cyBtYXVyaXMgdml0YWUgbGFjdXMuIFF1aXNxdWUgbHVjdHVzIHRpbmNpZHVudCBcbiAgICAgICAgbGFjdXMgbm9uIGFsaXF1ZXQuIEluIG5lYyBlZmZpY2l0dXIgcmlzdXMuIE51bGxhbSB2dWxwdXRhdGUgXG4gICAgICAgIHRyaXN0aXF1ZSBsb3JlbSB1dCBtYWxlc3VhZGEuIEFlbmVhbiB2ZW5lbmF0aXMgdnVscHV0YXRlIG51bmMsXG4gICAgICAgIHF1aXMgc29kYWxlcyBzZW0gZGFwaWJ1cyBzZWQuIFNlZCBub24gbmlzaSBtYXVyaXMuYFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDaG9yaXBhblwiLFxuICAgICAgICBpbWdVcmw6IFwiaW1nL2Nob3JpcGFuLmpwZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXG4gICAgICAgIGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBcbiAgICAgICAgUHJhZXNlbnQgaWQgY29uZGltZW50dW0gdHVycGlzLiBQZWxsZW50ZXNxdWUgdWx0cmljZXMsIFxuICAgICAgICBlcmF0IGlkIHRlbXBvciB2ZXN0aWJ1bHVtLCBsYWN1cyBsYWN1cyBjb25kaW1lbnR1bSBtYXNzYSwgXG4gICAgICAgIGF0IGdyYXZpZGEgbGVjdHVzIG1hdXJpcyB2aXRhZSBsYWN1cy4gUXVpc3F1ZSBsdWN0dXMgdGluY2lkdW50IFxuICAgICAgICBsYWN1cyBub24gYWxpcXVldC4gSW4gbmVjIGVmZmljaXR1ciByaXN1cy4gTnVsbGFtIHZ1bHB1dGF0ZSBcbiAgICAgICAgdHJpc3RpcXVlIGxvcmVtIHV0IG1hbGVzdWFkYS4gQWVuZWFuIHZlbmVuYXRpcyB2dWxwdXRhdGUgbnVuYyxcbiAgICAgICAgcXVpcyBzb2RhbGVzIHNlbSBkYXBpYnVzIHNlZC4gU2VkIG5vbiBuaXNpIG1hdXJpcy5gXG4gICAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGxldCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgZGlzaGVzLmZvckVhY2goZGlzaCA9PiB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IGRpc2hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nLWRpc2gnKTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaFRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgICAgICBpbWcuc3JjID0gZGlzaC5pbWdVcmw7XG4gICAgICAgIGRpc2hUaXRsZS50ZXh0Q29udGVudCA9IGRpc2gudGl0bGU7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=