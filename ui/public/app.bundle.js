/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n// Parent component that includes all other components\nvar EmployeeDirectory = /*#__PURE__*/function (_React$Component) {\n  function EmployeeDirectory() {\n    var _this;\n    _classCallCheck(this, EmployeeDirectory);\n    _this = _callSuper(this, EmployeeDirectory);\n\n    // State to store employees\n    _this.state = {\n      employeesList: []\n    };\n    _this.createEmployee = _this.createEmployee.bind(_this);\n    return _this;\n  }\n  _inherits(EmployeeDirectory, _React$Component);\n  return _createClass(EmployeeDirectory, [{\n    key: \"loadEmployeesData\",\n    value: function () {\n      var _loadEmployeesData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n        var query, response, result;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              query = \"query {\\n            employeesList {\\n                _id,\\n                first_name,\\n                last_name,\\n                age,\\n                date_of_joining,\\n                title,\\n                department,\\n                employee_type,\\n                current_status\\n            }\\n        }\";\n              _context.next = 3;\n              return fetch('/graphql', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  query: query\n                })\n              });\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n            case 6:\n              result = _context.sent;\n              console.log(\"Result being returned: \", result);\n              this.setState({\n                employeesList: result.data.employeesList\n              });\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee, this);\n      }));\n      function loadEmployeesData() {\n        return _loadEmployeesData.apply(this, arguments);\n      }\n      return loadEmployeesData;\n    }()\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadEmployeesData();\n    }\n  }, {\n    key: \"createEmployee\",\n    value: function () {\n      var _createEmployee = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(employee) {\n        var query, response, result;\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \"mutation {\\n            createEmployee(employee: {\\n                first_name: \\\"\".concat(employee.first_name, \"\\\",\\n                last_name: \\\"\").concat(employee.last_name, \"\\\",\\n                age: \").concat(employee.age, \",\\n                date_of_joining: \\\"\").concat(employee.date_of_joining, \"\\\",\\n                title: \").concat(employee.title, \",\\n                department: \").concat(employee.department, \",\\n                employee_type: \").concat(employee.employee_type, \"\\n            }) {\\n                _id,\\n                first_name,\\n                last_name,\\n                age,\\n                date_of_joining,\\n                title,\\n                department,\\n                employee_type,\\n                current_status\\n            }\\n        }\");\n              _context2.next = 3;\n              return fetch('/graphql', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  query: query\n                })\n              });\n            case 3:\n              response = _context2.sent;\n              _context2.next = 6;\n              return response.json();\n            case 6:\n              result = _context2.sent;\n              console.log(\"Result being returned: \", result);\n              this.loadEmployeesData();\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2, this);\n      }));\n      function createEmployee(_x) {\n        return _createEmployee.apply(this, arguments);\n      }\n      return createEmployee;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"main-container\"\n      }, /*#__PURE__*/React.createElement(EMSHeader, null), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"ems-container\"\n      }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {\n        employees: this.state.employeesList\n      })), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(EmployeeCreate, {\n        createEmployee: this.createEmployee,\n        errors: this.state.inputErrorList\n      }))));\n    }\n  }]);\n}(React.Component); // Header component\nvar EMSHeader = /*#__PURE__*/function (_React$Component2) {\n  function EMSHeader() {\n    _classCallCheck(this, EMSHeader);\n    return _callSuper(this, EMSHeader, arguments);\n  }\n  _inherits(EMSHeader, _React$Component2);\n  return _createClass(EMSHeader, [{\n    key: \"render\",\n    value: function render() {\n      var logoStyle = {\n        width: \"5em\"\n      };\n      var headerContainerStyle = {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n      };\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: headerContainerStyle\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: \"./images/ems-logo.png\",\n        style: logoStyle\n      }), /*#__PURE__*/React.createElement(\"h1\", null, \"Employee Management System\"));\n    }\n  }]);\n}(React.Component); // Employee search component\nvar EmployeeSearch = /*#__PURE__*/function (_React$Component3) {\n  function EmployeeSearch() {\n    _classCallCheck(this, EmployeeSearch);\n    return _callSuper(this, EmployeeSearch, arguments);\n  }\n  _inherits(EmployeeSearch, _React$Component3);\n  return _createClass(EmployeeSearch, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"section search-container\"\n      }, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"search\",\n        placeholder: \"Filter by keyword...\"\n      }));\n    }\n  }]);\n}(React.Component); // Employee table component\nvar EmployeeTable = /*#__PURE__*/function (_React$Component4) {\n  function EmployeeTable() {\n    _classCallCheck(this, EmployeeTable);\n    return _callSuper(this, EmployeeTable, arguments);\n  }\n  _inherits(EmployeeTable, _React$Component4);\n  return _createClass(EmployeeTable, [{\n    key: \"render\",\n    value: function render() {\n      var rowStyle = {\n        padding: 10,\n        textAlign: \"center\",\n        verticalAlign: \"middle\",\n        border: \"1px solid orange\",\n        margin: 0\n      };\n      var headerStyle = {\n        padding: 10,\n        backgroundColor: \"#ffa50066\"\n      };\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"section table-container\"\n      }, /*#__PURE__*/React.createElement(\"table\", {\n        border: \"1\"\n      }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"First Name\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Last Name\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Age\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Date of Joining\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Title\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Department\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Employee Type\"), /*#__PURE__*/React.createElement(\"th\", {\n        style: headerStyle\n      }, \"Current Status\"))), /*#__PURE__*/React.createElement(\"tbody\", null, this.props.employees.length > 0 ? this.props.employees.map(function (employee) {\n        return /*#__PURE__*/React.createElement(EmployeeRow, {\n          employee: employee,\n          key: employee._id,\n          rowStyle: rowStyle\n        });\n      }) :\n      /*#__PURE__*/\n      // No employees availble message\n      React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        colSpan: \"8\",\n        style: {\n          textAlign: \"center\",\n          padding: \"10px\",\n          fontStyle: \"italic\"\n        }\n      }, \"No available employees. \", this.props.employees)))));\n    }\n  }]);\n}(React.Component); // Employee row component\nvar EmployeeRow = /*#__PURE__*/function (_React$Component5) {\n  function EmployeeRow() {\n    _classCallCheck(this, EmployeeRow);\n    return _callSuper(this, EmployeeRow, arguments);\n  }\n  _inherits(EmployeeRow, _React$Component5);\n  return _createClass(EmployeeRow, [{\n    key: \"formatDate\",\n    value:\n    // Function to format date\n    function formatDate(dateString) {\n      var date = new Date(dateString);\n      var options = {\n        year: 'numeric',\n        month: 'short',\n        day: 'numeric'\n      };\n      return date.toLocaleDateString('en-US', options).replace(',', '');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var employee = this.props.employee;\n      var CSSstyle = this.props.rowStyle;\n      return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.first_name, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.last_name, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.age, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", this.formatDate(employee.date_of_joining), \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.title, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.department, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.employee_type, \" \"), /*#__PURE__*/React.createElement(\"td\", {\n        style: CSSstyle\n      }, \" \", employee.current_status, \" \"));\n    }\n  }]);\n}(React.Component); // Field error component : displays any error message for each field on create employee\nvar FieldError = /*#__PURE__*/function (_React$Component6) {\n  function FieldError() {\n    _classCallCheck(this, FieldError);\n    return _callSuper(this, FieldError, arguments);\n  }\n  _inherits(FieldError, _React$Component6);\n  return _createClass(FieldError, [{\n    key: \"render\",\n    value: function render() {\n      var errorMessage = this.props.errorMessage;\n      var errorStyle = {\n        color: \"red\",\n        fontSize: \"0.85em\"\n      };\n      var errorIconStyle = {\n        width: \"1em\",\n        marginRight: \"0.5em\"\n      };\n      if (!errorMessage) return null;\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: errorStyle,\n        className: \"error-message\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: \"./images/alert-icon.png\",\n        style: errorIconStyle\n      }), errorMessage);\n    }\n  }]);\n}(React.Component); // Create employee component\nvar EmployeeCreate = /*#__PURE__*/function (_React$Component7) {\n  function EmployeeCreate() {\n    var _this2;\n    _classCallCheck(this, EmployeeCreate);\n    _this2 = _callSuper(this, EmployeeCreate);\n    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);\n\n    // State to store employee input errors\n    _this2.state = {\n      errors: []\n    };\n    return _this2;\n  }\n\n  // Function to validate user input\n  _inherits(EmployeeCreate, _React$Component7);\n  return _createClass(EmployeeCreate, [{\n    key: \"validateInput\",\n    value: function validateInput(employee) {\n      var errors = {};\n      var namePattern = /^[a-zA-Z\\s-]+$/;\n\n      /* Field validation */\n      // First name\n      if (employee.first_name) {\n        // Validate first name format\n        if (!namePattern.test(employee.first_name)) {\n          errors.first_name = 'First name cannot contain special characters.';\n        }\n      } else {\n        errors.first_name = 'First name is required.';\n      }\n      // Last name\n      if (employee.last_name) {\n        // Validate last name format\n        if (!namePattern.test(employee.last_name)) {\n          errors.last_name = 'Last name cannot contain special characters.';\n        }\n      } else {\n        errors.last_name = 'Last name is required.';\n      }\n      // Age\n      if (employee.age) {\n        // Validate if employee age is between 20 to 70\n        if (employee.age < 20 || employee.age > 70) {\n          errors.age = 'Age must be between 20 and 70.';\n        }\n      } else {\n        errors.age = 'Age is required.';\n      }\n      // Date of joining\n      if (employee.date_of_joining) {\n        // Validate if joining date input is in the future\n        var joiningDate = new Date(employee.date_of_joining);\n        var today = new Date();\n        if (joiningDate > today) {\n          errors.date_of_joining = 'Joining date cannot be in the future.';\n        }\n      } else {\n        errors.date_of_joining = 'Joining date is required.';\n      }\n      this.setState({\n        errors: errors\n      });\n      return Object.keys(errors).length == 0; // return true if no errors\n    }\n\n    // Function to clear form after employee is created\n  }, {\n    key: \"clearForm\",\n    value: function clearForm(form) {\n      form.first_name.value = '';\n      form.last_name.value = '';\n      form.age.value = '';\n      form.date_of_joining.value = '';\n      form.title.selectedIndex = 0; // reset the select element to the first option\n      form.department.selectedIndex = 0;\n      form.employee_type.selectedIndex = 0;\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var forms = document.forms.employeeAdd;\n      var employee = {\n        first_name: forms.first_name.value,\n        last_name: forms.last_name.value,\n        age: forms.age.value,\n        date_of_joining: forms.date_of_joining.value,\n        title: forms.title.value,\n        department: forms.department.value,\n        employee_type: forms.employee_type.value\n      };\n      console.log(\"Employee is \", employee);\n\n      // Validate user input\n      if (this.validateInput(employee)) {\n        // Create employee\n        this.props.createEmployee(employee);\n\n        // Clear form\n        this.clearForm(forms);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var formStyle = _defineProperty({\n        borderRadius: 5,\n        backgroundColor: \"#fff\"\n      }, \"borderRadius\", 5);\n      var elementStyle = {\n        marginTop: \"0.7em\",\n        marginBottom: \"0.7em\",\n        width: \"100%\"\n      };\n      var btnStyle = {\n        marginTop: \"1.5em\",\n        marginBottom: \"1.5em\",\n        borderRadius: \"1em\",\n        backgroundColor: \"orange\",\n        border: \"none\",\n        textTransform: \"uppercase\",\n        letterSpacing: 1\n      };\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"section form-container\"\n      }, /*#__PURE__*/React.createElement(\"form\", {\n        name: \"employeeAdd\",\n        onSubmit: this.handleSubmit,\n        style: formStyle\n      }, /*#__PURE__*/React.createElement(\"h2\", null, \"Create New Employee\"), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"first_name\"\n      }, \"First Name\"), /*#__PURE__*/React.createElement(FieldError, {\n        errorMessage: this.state.errors.first_name\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"first_name\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"last_name\"\n      }, \"Last Name\"), /*#__PURE__*/React.createElement(FieldError, {\n        errorMessage: this.state.errors.last_name\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"last_name\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"age\"\n      }, \"Age\"), /*#__PURE__*/React.createElement(FieldError, {\n        errorMessage: this.state.errors.age\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"number\",\n        name: \"age\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"date_of_joining\"\n      }, \"Date of Joining\"), /*#__PURE__*/React.createElement(FieldError, {\n        errorMessage: this.state.errors.date_of_joining\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"date\",\n        name: \"date_of_joining\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"title\"\n      }, \"Title\"), /*#__PURE__*/React.createElement(\"select\", {\n        id: \"title\",\n        name: \"title\"\n      }, /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Employee\"\n      }, \"Employee\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Manager\"\n      }, \"Manager\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Director\"\n      }, \"Director\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"VP\"\n      }, \"VP\"))), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"department\"\n      }, \"Department\"), /*#__PURE__*/React.createElement(\"select\", {\n        id: \"department\",\n        name: \"department\"\n      }, /*#__PURE__*/React.createElement(\"option\", {\n        value: \"IT\"\n      }, \"IT\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Marketing\"\n      }, \"Marketing\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"HR\"\n      }, \"HR\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Engineering\"\n      }, \"Engineering\"))), /*#__PURE__*/React.createElement(\"div\", {\n        style: elementStyle,\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"employee_type\"\n      }, \"Employee Type\"), /*#__PURE__*/React.createElement(\"select\", {\n        id: \"employee_type\",\n        name: \"employee_type\"\n      }, /*#__PURE__*/React.createElement(\"option\", {\n        value: \"FullTime\"\n      }, \"Full-Time\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"PartTime\"\n      }, \"Part-Time\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Contract\"\n      }, \"Contract\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Seasonal\"\n      }, \"Seasonal\"))), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"form-field\"\n      }, /*#__PURE__*/React.createElement(\"button\", {\n        style: btnStyle\n      }, \"Add\"))));\n    }\n  }]);\n}(React.Component);\nvar element = /*#__PURE__*/React.createElement(EmployeeDirectory, null);\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack://mern-ems/./src/App.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/App.jsx"]();
/******/ 	
/******/ })()
;