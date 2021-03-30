webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/StudentFeedback.js":
/*!*********************************************************!*\
  !*** ./components/survey-components/StudentFeedback.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/StudentFeedback.js\",\n    _this = undefined;\n\n\n\nvar StudentFeedback = function StudentFeedback() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      m: \"2em\",\n      padding: \"2em\",\n      bg: \"#edf2f7\",\n      a: true,\n      minW: \"80%\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        fontWeight: \"bold\",\n        children: \"Additional comments on TA's performance\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Textarea\"], {\n        onChange: function onChange(e) {\n          return setTaPerformanceText({\n            text: e.target.value\n          });\n        },\n        bg: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n      m: \"2em\",\n      padding: \"2em\",\n      bg: \"#edf2f7\",\n      minW: \"80%\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n        fontWeight: \"bold\",\n        children: \"List ways this course can be improved\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Textarea\"], {\n        onChange: function onChange(e) {\n          return setClassPerformanceText({\n            text: e.target.value\n          });\n        },\n        bg: \"white\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = StudentFeedback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentFeedback);\n\nvar _c;\n\n$RefreshReg$(_c, \"StudentFeedback\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdHVkZW50RmVlZGJhY2suanM/MGIyYyJdLCJuYW1lcyI6WyJTdHVkZW50RmVlZGJhY2siLCJlIiwic2V0VGFQZXJmb3JtYW5jZVRleHQiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRDbGFzc1BlcmZvcm1hbmNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQU9BLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUUxQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQ0ksT0FBQyxFQUFDLEtBRE47QUFFSSxhQUFPLEVBQUMsS0FGWjtBQUdJLFFBQUUsRUFBQyxTQUhQO0FBR2lCLE9BQUMsTUFIbEI7QUFJSSxVQUFJLEVBQUMsS0FKVDtBQUFBLDhCQU1JLHFFQUFDLHFEQUFEO0FBQU0sa0JBQVUsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0kscUVBQUMseURBQUQ7QUFDSSxnQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsaUJBQU9DLG9CQUFvQixDQUFDO0FBQUVDLGdCQUFJLEVBQUVGLENBQUMsQ0FBQ0csTUFBRixDQUFTQztBQUFqQixXQUFELENBQTNCO0FBQUEsU0FEZDtBQUVJLFVBQUUsRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWNJLHFFQUFDLDBEQUFEO0FBQ0ksT0FBQyxFQUFDLEtBRE47QUFFSSxhQUFPLEVBQUMsS0FGWjtBQUdJLFFBQUUsRUFBQyxTQUhQO0FBSUksVUFBSSxFQUFDLEtBSlQ7QUFBQSw4QkFNSSxxRUFBQyxxREFBRDtBQUFNLGtCQUFVLEVBQUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JLHFFQUFDLHlEQUFEO0FBQ0ksZ0JBQVEsRUFBRSxrQkFBQ0osQ0FBRDtBQUFBLGlCQUFPSyx1QkFBdUIsQ0FBQztBQUFFSCxnQkFBSSxFQUFFRixDQUFDLENBQUNHLE1BQUYsQ0FBU0M7QUFBakIsV0FBRCxDQUE5QjtBQUFBLFNBRGQ7QUFFSSxVQUFFLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQSxrQkFESjtBQThCSCxDQWhDRDs7S0FBTUwsZTtBQWtDU0EsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRGZWVkYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGV4dCxcbiAgICBDb250YWluZXIsXG4gICAgVGV4dGFyZWEsXG4gICAgXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFN0dWRlbnRGZWVkYmFjayA9ICgpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbT1cIjJlbVwiXG4gICAgICAgICAgICAgICAgcGFkZGluZz1cIjJlbVwiXG4gICAgICAgICAgICAgICAgYmc9XCIjZWRmMmY3XCIgYVxuICAgICAgICAgICAgICAgIG1pblc9XCI4MCVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+QWRkaXRpb25hbCBjb21tZW50cyBvbiBUQSdzIHBlcmZvcm1hbmNlPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhUGVyZm9ybWFuY2VUZXh0KHsgdGV4dDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgID48L1RleHRhcmVhPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBtPVwiMmVtXCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwiMmVtXCJcbiAgICAgICAgICAgICAgICBiZz1cIiNlZGYyZjdcIlxuICAgICAgICAgICAgICAgIG1pblc9XCI4MCVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+TGlzdCB3YXlzIHRoaXMgY291cnNlIGNhbiBiZSBpbXByb3ZlZDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDbGFzc1BlcmZvcm1hbmNlVGV4dCh7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICA+PC9UZXh0YXJlYT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudEZlZWRiYWNrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/survey-components/StudentFeedback.js\n");

/***/ }),

/***/ "./pages/studentSurvey.js":
/*!********************************!*\
  !*** ./pages/studentSurvey.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_armaandhanoa_Documents_Documents_Armaan_s_Mac_mini_Projects_ABET_Spring21_FontNew_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useToggle */ \"./hooks/useToggle.js\");\n/* harmony import */ var _components_survey_components_StudentLoginBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/survey-components/StudentLoginBox */ \"./components/survey-components/StudentLoginBox.js\");\n/* harmony import */ var _components_survey_components_StudentInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/survey-components/StudentInfoForm */ \"./components/survey-components/StudentInfoForm.js\");\n/* harmony import */ var _components_survey_components_CourseOutcomesSurvey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/survey-components/CourseOutcomesSurvey */ \"./components/survey-components/CourseOutcomesSurvey.js\");\n/* harmony import */ var _components_survey_components_TAsurvey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/survey-components/TAsurvey */ \"./components/survey-components/TAsurvey.js\");\n/* harmony import */ var _components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/survey-components/SurveyPageData */ \"./components/survey-components/SurveyPageData.js\");\n/* harmony import */ var _components_survey_components_StudentFeedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/survey-components/StudentFeedback */ \"./components/survey-components/StudentFeedback.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/pages/studentSurvey.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n//imports\n\n //hooks\n\n //components\n\n\n\n\n //page data \n\n\n\n\nvar studentSurvey = function studentSurvey() {\n  _s();\n\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"PageContext\"]);\n  var course = context.course; //state\n\n  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true),\n      _useToggle2 = Object(_Users_armaandhanoa_Documents_Documents_Armaan_s_Mac_mini_Projects_ABET_Spring21_FontNew_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useToggle, 2),\n      isLoggedIn = _useToggle2[0],\n      toggleLogin = _useToggle2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    major: \"\",\n    classification: \"\",\n    expectedGrade: \"\"\n  }),\n      studentInformation = _useState[0],\n      setStudentInformation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(context.course['course-outcomes']),\n      outcomeSurvey = _useState2[0],\n      setOutcomeSurvey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(context.questions),\n      TAquestions = _useState3[0],\n      setTAquestions = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    TAeval: \"\",\n    additionalFeedback: \"\"\n  }),\n      studentInput = _useState4[0],\n      setStudentInput = _useState4[1];\n\n  var testFunction = function testFunction() {\n    console.log(studentInformationMajor.major);\n    console.log(studentInformationYear.year);\n    console.log(studentInformationGrades.grades);\n    console.log(taPerformanceText.text);\n    console.log(classPerformanceText.text);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"PageContext\"].Provider, {\n    value: _components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"pageData\"],\n    children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n      mt: \"2em\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"2xl\",\n        fontWeight: \"bold\",\n        children: [course.code, \" \", course.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentInfoForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        studentInformation: studentInformation,\n        setStudentInformation: setStudentInformation\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_CourseOutcomesSurvey__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        outcomeSurvey: outcomeSurvey,\n        setOutcomeSurvey: setOutcomeSurvey\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_TAsurvey__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        TAquestions: TAquestions,\n        setTAquestions: setTAquestions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentFeedback__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        onClick: testFunction,\n        mb: \"1em\",\n        colorScheme: \"green\",\n        children: \"Submit Survey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentLoginBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      toggleLoggin: toggleLogin\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(studentSurvey, \"rxAaFpoKQ7c+xKvubPtBARGV8dU=\", false, function () {\n  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (studentSurvey);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudFN1cnZleS5qcz84YWM2Il0sIm5hbWVzIjpbInN0dWRlbnRTdXJ2ZXkiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwiY291cnNlIiwidXNlVG9nZ2xlIiwiaXNMb2dnZWRJbiIsInRvZ2dsZUxvZ2luIiwidXNlU3RhdGUiLCJtYWpvciIsImNsYXNzaWZpY2F0aW9uIiwiZXhwZWN0ZWRHcmFkZSIsInN0dWRlbnRJbmZvcm1hdGlvbiIsInNldFN0dWRlbnRJbmZvcm1hdGlvbiIsIm91dGNvbWVTdXJ2ZXkiLCJzZXRPdXRjb21lU3VydmV5IiwicXVlc3Rpb25zIiwiVEFxdWVzdGlvbnMiLCJzZXRUQXF1ZXN0aW9ucyIsIlRBZXZhbCIsImFkZGl0aW9uYWxGZWVkYmFjayIsInN0dWRlbnRJbnB1dCIsInNldFN0dWRlbnRJbnB1dCIsInRlc3RGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzdHVkZW50SW5mb3JtYXRpb25NYWpvciIsInN0dWRlbnRJbmZvcm1hdGlvblllYXIiLCJ5ZWFyIiwic3R1ZGVudEluZm9ybWF0aW9uR3JhZGVzIiwiZ3JhZGVzIiwidGFQZXJmb3JtYW5jZVRleHQiLCJ0ZXh0IiwiY2xhc3NQZXJmb3JtYW5jZVRleHQiLCJwYWdlRGF0YSIsImNvZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBU0E7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx3RkFBRCxDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUF2QixDQUYwQixDQUsxQjs7QUFMMEIsbUJBTVFDLGdFQUFTLENBQUMsSUFBRCxDQU5qQjtBQUFBO0FBQUEsTUFNbkJDLFVBTm1CO0FBQUEsTUFNUEMsV0FOTzs7QUFBQSxrQkFPMEJDLHNEQUFRLENBQUM7QUFDM0RDLFNBQUssRUFBRSxFQURvRDtBQUUzREMsa0JBQWMsRUFBRSxFQUYyQztBQUczREMsaUJBQWEsRUFBRTtBQUg0QyxHQUFELENBUGxDO0FBQUEsTUFPbkJDLGtCQVBtQjtBQUFBLE1BT0NDLHFCQVBEOztBQUFBLG1CQVlnQkwsc0RBQVEsQ0FBQ1AsT0FBTyxDQUFDRyxNQUFSLENBQWUsaUJBQWYsQ0FBRCxDQVp4QjtBQUFBLE1BWW5CVSxhQVptQjtBQUFBLE1BWUpDLGdCQVpJOztBQUFBLG1CQWFZUCxzREFBUSxDQUFDUCxPQUFPLENBQUNlLFNBQVQsQ0FicEI7QUFBQSxNQWFuQkMsV0FibUI7QUFBQSxNQWFOQyxjQWJNOztBQUFBLG1CQWNjVixzREFBUSxDQUFDO0FBQy9DVyxVQUFNLEVBQUUsRUFEdUM7QUFFL0NDLHNCQUFrQixFQUFFO0FBRjJCLEdBQUQsQ0FkdEI7QUFBQSxNQWNuQkMsWUFkbUI7QUFBQSxNQWNMQyxlQWRLOztBQW9CMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUF1QixDQUFDakIsS0FBcEM7QUFDQWUsV0FBTyxDQUFDQyxHQUFSLENBQVlFLHNCQUFzQixDQUFDQyxJQUFuQztBQUNBSixXQUFPLENBQUNDLEdBQVIsQ0FBWUksd0JBQXdCLENBQUNDLE1BQXJDO0FBQ0FOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxpQkFBaUIsQ0FBQ0MsSUFBOUI7QUFDQVIsV0FBTyxDQUFDQyxHQUFSLENBQVlRLG9CQUFvQixDQUFDRCxJQUFqQztBQUNELEdBTkQ7O0FBT0Esc0JBQ0UscUVBQUMsd0ZBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRUUscUZBQTdCO0FBQUEsY0FDRzVCLFVBQVUsZ0JBRVQscUVBQUMsdURBQUQ7QUFBUSxRQUFFLEVBQUMsS0FBWDtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQU0sZ0JBQVEsRUFBQyxLQUFmO0FBQXFCLGtCQUFVLEVBQUMsTUFBaEM7QUFBQSxtQkFBd0NGLE1BQU0sQ0FBQytCLElBQS9DLE9BQXNEL0IsTUFBTSxDQUFDZ0MsSUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyxxRkFBRDtBQUFpQiwwQkFBa0IsRUFBRXhCLGtCQUFyQztBQUF5RCw2QkFBcUIsRUFBRUM7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUscUVBQUMsMEZBQUQ7QUFBc0IscUJBQWEsRUFBRUMsYUFBckM7QUFBb0Qsd0JBQWdCLEVBQUVDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFLHFFQUFDLDhFQUFEO0FBQVUsbUJBQVcsRUFBRUUsV0FBdkI7QUFBb0Msc0JBQWMsRUFBRUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUUscUVBQUMsc0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBUUUscUVBQUMsdURBQUQ7QUFBUSxlQUFPLEVBQUVLLFlBQWpCO0FBQStCLFVBQUUsRUFBQyxLQUFsQztBQUF3QyxtQkFBVyxFQUFDLE9BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlMsZ0JBYVQscUVBQUMscUZBQUQ7QUFBaUIsa0JBQVksRUFBRWhCO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0E3Q0Q7O0dBQU1QLGE7VUFNOEJLLHdEOzs7QUF3Q3JCTCw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3N0dWRlbnRTdXJ2ZXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydHNcbmltcG9ydCB7XG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0XG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVGV4dCxcbiAgVlN0YWNrLFxuICBCdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG4vL2hvb2tzXG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCIuLi9ob29rcy91c2VUb2dnbGVcIlxuLy9jb21wb25lbnRzXG5pbXBvcnQgU3R1ZGVudExvZ2luQm94IGZyb20gXCIuLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRMb2dpbkJveFwiO1xuaW1wb3J0IFN0dWRlbnRJbmZvRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdHVkZW50SW5mb0Zvcm1cIjtcbmltcG9ydCBDb3Vyc2VPdXRjb21lc1N1cnZleSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9Db3Vyc2VPdXRjb21lc1N1cnZleVwiO1xuaW1wb3J0IFRBc3VydmV5IGZyb20gXCIuLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1RBc3VydmV5XCI7XG4vL3BhZ2UgZGF0YSBcbmltcG9ydCB7IFBhZ2VDb250ZXh0LCBwYWdlRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3VydmV5LWNvbXBvbmVudHMvU3VydmV5UGFnZURhdGEnO1xuaW1wb3J0IFN0dWRlbnRGZWVkYmFjayBmcm9tIFwiLi4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdHVkZW50RmVlZGJhY2tcIjtcblxuY29uc3Qgc3R1ZGVudFN1cnZleSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpO1xuICBjb25zdCBjb3Vyc2UgPSBjb250ZXh0LmNvdXJzZTtcblxuXG4gIC8vc3RhdGVcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHRvZ2dsZUxvZ2luXSA9IHVzZVRvZ2dsZSh0cnVlKTtcbiAgY29uc3QgW3N0dWRlbnRJbmZvcm1hdGlvbiwgc2V0U3R1ZGVudEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBtYWpvcjogXCJcIixcbiAgICBjbGFzc2lmaWNhdGlvbjogXCJcIixcbiAgICBleHBlY3RlZEdyYWRlOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbb3V0Y29tZVN1cnZleSwgc2V0T3V0Y29tZVN1cnZleV0gPSB1c2VTdGF0ZShjb250ZXh0LmNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10pO1xuICBjb25zdCBbVEFxdWVzdGlvbnMsIHNldFRBcXVlc3Rpb25zXSA9IHVzZVN0YXRlKGNvbnRleHQucXVlc3Rpb25zKVxuICBjb25zdCBbc3R1ZGVudElucHV0LCBzZXRTdHVkZW50SW5wdXRdID0gdXNlU3RhdGUoe1xuICAgIFRBZXZhbDogXCJcIixcbiAgICBhZGRpdGlvbmFsRmVlZGJhY2s6IFwiXCJcbiAgfSlcblxuXG4gIGNvbnN0IHRlc3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdHVkZW50SW5mb3JtYXRpb25NYWpvci5tYWpvcik7XG4gICAgY29uc29sZS5sb2coc3R1ZGVudEluZm9ybWF0aW9uWWVhci55ZWFyKTtcbiAgICBjb25zb2xlLmxvZyhzdHVkZW50SW5mb3JtYXRpb25HcmFkZXMuZ3JhZGVzKTtcbiAgICBjb25zb2xlLmxvZyh0YVBlcmZvcm1hbmNlVGV4dC50ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhjbGFzc1BlcmZvcm1hbmNlVGV4dC50ZXh0KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3BhZ2VEYXRhfT5cbiAgICAgIHtpc0xvZ2dlZEluXG4gICAgICAgID9cbiAgICAgICAgPFZTdGFjayBtdD1cIjJlbVwiPlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIj57Y291cnNlLmNvZGV9IHtjb3Vyc2UubmFtZX08L1RleHQ+XG5cbiAgICAgICAgICA8U3R1ZGVudEluZm9Gb3JtIHN0dWRlbnRJbmZvcm1hdGlvbj17c3R1ZGVudEluZm9ybWF0aW9ufSBzZXRTdHVkZW50SW5mb3JtYXRpb249e3NldFN0dWRlbnRJbmZvcm1hdGlvbn0gLz5cbiAgICAgICAgICA8Q291cnNlT3V0Y29tZXNTdXJ2ZXkgb3V0Y29tZVN1cnZleT17b3V0Y29tZVN1cnZleX0gc2V0T3V0Y29tZVN1cnZleT17c2V0T3V0Y29tZVN1cnZleX0vPlxuICAgICAgICAgIDxUQXN1cnZleSBUQXF1ZXN0aW9ucz17VEFxdWVzdGlvbnN9IHNldFRBcXVlc3Rpb25zPXtzZXRUQXF1ZXN0aW9uc30vPlxuICAgICAgICAgIDxTdHVkZW50RmVlZGJhY2svPlxuXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0ZXN0RnVuY3Rpb259IG1iPVwiMWVtXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPlN1Ym1pdCBTdXJ2ZXk8L0J1dHRvbj5cbiAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDpcbiAgICAgICAgPFN0dWRlbnRMb2dpbkJveCB0b2dnbGVMb2dnaW49e3RvZ2dsZUxvZ2lufSAvPlxuICAgICAgfVxuICAgIDwvUGFnZUNvbnRleHQuUHJvdmlkZXI+KVxufTtcbmV4cG9ydCBkZWZhdWx0IHN0dWRlbnRTdXJ2ZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/studentSurvey.js\n");

/***/ })

})