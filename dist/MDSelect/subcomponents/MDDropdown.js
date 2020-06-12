'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var MDDropdown = function MDDropdown(_ref) {
	var items = _ref.items,
	    onSelectItem = _ref.onSelectItem,
	    selectedItem = _ref.selectedItem,
	    selectedItems = _ref.selectedItems,
	    multiple = _ref.multiple,
	    customLabel = _ref.customLabel;

	var renderLabel = function renderLabel(item) {
		if (customLabel) {
			return customLabel(item);
		}
		return _react2.default.createElement(
			_react2.default.Fragment,
			null,
			[].concat(_toConsumableArray(item.label)).map(function (char, i) {
				return selectedItem.label.charAt(i).toUpperCase() === char.toUpperCase() ? _react2.default.createElement(
					'span',
					{ className: 'md-select__dropdown-item--highlighted', key: 'l' + i },
					char
				) : _react2.default.createElement(
					'span',
					{ key: 'l' + i },
					char
				);
			})
		);
	};
	var isSelected = function isSelected(item) {
		return selectedItems.find(function (_item) {
			return _item.key === item.key;
		});
	};
	return _react2.default.createElement(
		'div',
		{ className: 'md-select__dropdown' },
		items.map(function (item, i) {
			return _react2.default.createElement(
				'div',
				{
					className: 'md-select__dropdown-item ' + (isSelected(item) && 'md-select__dropdown-item--selected'),
					key: 'item' + i,
					onClick: function onClick(e) {
						return onSelectItem(e, item);
					}
				},
				_react2.default.createElement(
					'span',
					null,
					renderLabel(item)
				)
			);
		})
	);
};

exports.default = MDDropdown;