"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["children"];
function Button(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    className: " o-jeeUx o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE  o-bkmzIL o-fdTMrI _2f7K o-casNrQ o-fznVqX o-fznVsN ",
    type: "button"
  }, props), "Hello World!", children);
}
var _default = exports["default"] = Button;