'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Icon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = function Icon(_ref) {
	var name = _ref.name,
	    _ref$height = _ref.height,
	    height = _ref$height === undefined ? '20px' : _ref$height,
	    _ref$width = _ref.width,
	    width = _ref$width === undefined ? '20px' : _ref$width,
	    _ref$fill = _ref.fill,
	    fill = _ref$fill === undefined ? '#000' : _ref$fill;

	var icons = {
		'arrow-up': _react2.default.createElement(
			'svg',
			{ className: 'icon', height: height, width: width, fill: fill, x: '0px', y: '0px', viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M149 299h214l-107 -107z' })
		),
		'remove': _react2.default.createElement(
			'svg',
			{ className: 'icon', height: height, width: width, fill: fill, x: '0px', y: '0px', viewBox: '0 0 20 20' },
			_react2.default.createElement('path', { d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z' })
		),
		'check': _react2.default.createElement(
			'svg',
			{ className: 'icon', style: { transform: 'rotate(180deg)' }, height: height, width: width, fill: fill, x: '0px', y: '0px', viewBox: '0 0 512 512' },
			_react2.default.createElement('path', { d: 'M192 167l226 226l30 -30l-256 -256l-119 119l30 30z' })
		)
	};
	return icons[name];
};