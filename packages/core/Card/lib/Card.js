"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _button = _interopRequireDefault(require("@core/button"));
function Card(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
    className: "o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-YCHtV o-fklLUJ o-cglRxs o-cYOpxG"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "test",
    title: "Maruti Suzuki New Swift"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card__body"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "test",
    title: "Maruti Suzuki New Swift"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card__body-head"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "oxygen-card-primary-title"
  }, "Maruti Suzuki New Swift")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card__body-content"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "oxygen-card-secondary-title"
  }, "\u20B94.5 - 7.5 Lakhs"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "o-bfyaNx o-brXWGL o-bqHweY   njI3"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI ",
    src: "https://imgd.aeplcdn.com/0x0/design15/d/swift.jpg?q=85&v=2",
    alt: "Maruti Suzuki New Swift",
    title: "Maruti Suzuki New Swift"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card-primary-subtitle"
  }, "Estimated price"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card-secondary-subtitle"
  }, "Expected launch February 2018")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oxygen-card__media"
  }))), /*#__PURE__*/_react["default"].createElement(_button["default"], null, "Custom Card Version 1.2.3 "));
}
var _default = exports["default"] = Card;