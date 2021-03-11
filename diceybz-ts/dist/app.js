/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    var generateButton = document.querySelector('#generate-button');\r\n    var rerollButton = document.querySelector('#reroll-button');\r\n    var sumButton = document.querySelector('#sum-button');\r\n    var diceSection = document.querySelector('#dice-section');\r\n    var counter = 1;\r\n    var diceArray = [];\r\n    var Die = /** @class */ (function () {\r\n        function Die(value) {\r\n            this.div = document.createElement(\"div\");\r\n            this.value = value;\r\n            this.render();\r\n            this.roll();\r\n            this.eventListeners();\r\n            diceArray.push(this);\r\n        }\r\n        Die.prototype.render = function () {\r\n            this.div.className = \"dice\";\r\n            this.div.id = counter.toString();\r\n            diceSection.appendChild(this.div);\r\n            this.div.textContent = this.value.toString();\r\n        };\r\n        Die.prototype.eventListeners = function () {\r\n            var _this = this;\r\n            this.div.addEventListener(\"click\", function () { return _this.roll(); });\r\n            this.div.addEventListener(\"dblclick\", function () {\r\n                diceArray.splice(diceArray.indexOf(_this), 1), _this.div.remove();\r\n                counter--;\r\n            });\r\n        };\r\n        Die.prototype.roll = function () {\r\n            var randomNum = Math.floor(Math.random() * 6) + 1;\r\n            this.value = randomNum;\r\n            this.div.textContent = this.value.toString();\r\n        };\r\n        return Die;\r\n    }());\r\n    generateButton.addEventListener(\"click\", function () {\r\n        console.log(\"Hey\");\r\n        var randomNum = Math.floor(Math.random() * 6) + 1;\r\n        if (counter < 5) {\r\n            new Die(randomNum);\r\n            counter++;\r\n        }\r\n        else {\r\n            counter == 0;\r\n        }\r\n    });\r\n    rerollButton.addEventListener(\"click\", function () {\r\n        for (var i = 0; i < diceArray.length; i++) {\r\n            diceArray[i].roll();\r\n        }\r\n    });\r\n    sumButton.addEventListener(\"click\", function () {\r\n        var totalSum = 0;\r\n        for (var i = 0; i < diceArray.length; i++) {\r\n            totalSum += diceArray[i].value;\r\n        }\r\n        alert(\"The total sum is \" + totalSum + \"!\");\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://diceybz-ts/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;