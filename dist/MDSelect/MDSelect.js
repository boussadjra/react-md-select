'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./subcomponents/icons');

var _MDDropdown = require('./subcomponents/MDDropdown');

var _MDDropdown2 = _interopRequireDefault(_MDDropdown);

var _MDSpinner = require('./subcomponents/MDSpinner');

var _MDSpinner2 = _interopRequireDefault(_MDSpinner);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MDSelect = function MDSelect(_ref) {
	var options = _ref.options,
	    label = _ref.label,
	    _ref$type = _ref.type,
	    type = _ref$type === undefined ? 'standard' : _ref$type,
	    value = _ref.value,
	    onChange = _ref.onChange,
	    config = _ref.config,
	    multiple = _ref.multiple,
	    renderLabel = _ref.renderLabel,
	    asyncOptions = _ref.asyncOptions;

	var _useState = (0, _react.useState)({ label: '', key: '' }),
	    _useState2 = _slicedToArray(_useState, 2),
	    selectedItem = _useState2[0],
	    setSelectedItem = _useState2[1];

	var _useState3 = (0, _react.useState)([]),
	    _useState4 = _slicedToArray(_useState3, 2),
	    selectedItems = _useState4[0],
	    setSelectedItems = _useState4[1];

	var _useState5 = (0, _react.useState)(false),
	    _useState6 = _slicedToArray(_useState5, 2),
	    active = _useState6[0],
	    setActive = _useState6[1];

	var _useState7 = (0, _react.useState)(false),
	    _useState8 = _slicedToArray(_useState7, 2),
	    typing = _useState8[0],
	    setTyping = _useState8[1];

	var _useState9 = (0, _react.useState)(false),
	    _useState10 = _slicedToArray(_useState9, 2),
	    showDropdown = _useState10[0],
	    setShowDropdown = _useState10[1];

	var _useState11 = (0, _react.useState)([]),
	    _useState12 = _slicedToArray(_useState11, 2),
	    items = _useState12[0],
	    setItems = _useState12[1];

	var RANDOM_ID = 'mds' + (Math.random() * 10000).toFixed();
	var ref = _defineProperty({}, 'dropdown' + RANDOM_ID, null);
	ref['dropdown' + RANDOM_ID] = (0, _react.useRef)(null);
	(0, _react.useEffect)(function () {
		/**
   * Alert if clicked on outside of element
   */
		function handleClickOutside(event) {
			if (ref['dropdown' + RANDOM_ID].current && !ref['dropdown' + RANDOM_ID].current.contains(event.target)) {
				setShowDropdown(false);
			}
		}

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return function () {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, RANDOM_ID]);
	/**
  *
  */
	(0, _react.useEffect)(function () {
		var _value = { label: '', key: '' };
		_value = mapConfig(value);
		setSelectedItem(_value);
	}, []);
	(0, _react.useEffect)(function () {
		setActive(selectedItem.label ? true : false);
	}, [selectedItem]);

	(0, _react.useEffect)(function () {
		setItems(!asyncOptions ? options.map(function (option) {
			option = _extends({}, option, mapConfig(option));
			return option;
		}) : []);
	}, [config, options]);

	/****
  *
  */

	var mapConfig = function mapConfig(_value) {
		return {
			key: _value ? _value[config.itemKey ? config.itemKey : 'value'] : '',
			label: _value ? _value[config.itemLabel ? config.itemLabel : 'label'] : ''
		};
	};
	var onfocus = function onfocus() {
		setActive(true);
		setShowDropdown(true);
	};

	var handleChange = function handleChange(e) {

		if (asyncOptions) {
			e.target.value ? setTyping(true) : setTyping(false);

			asyncOptions(e.target.value, function (_options) {
				setTyping(false);
				setItems(_options.map(function (option) {
					option = _extends({}, option, mapConfig(option));
					return option;
				}));
			});
		} else {
			setItems(options.filter(function (_option) {
				var _searchValue = e.target.value.toUpperCase();

				return _option.label.toUpperCase().includes(_searchValue);
			}).map(function (option) {
				option = _extends({}, option, mapConfig(option));
				return option;
			}));
		}
		setSelectedItem({ key: '', label: e.target.value });
	};
	var selectItem = function selectItem(e, item) {
		//e.stopPropagation();
		if (multiple) {
			var _items = [].concat(_toConsumableArray(selectedItems));
			var alreadExists = _items.find(function (_item) {
				return _item.key === item.key;
			});

			if (alreadExists) {
				removeItem(item);
			} else {
				_items.push(item);
				setSelectedItems(_items);
				onChange(_items);
			}
		} else {
			setSelectedItem(item);
			setShowDropdown(false);
			onChange(item);
		}
	};
	var remove = function remove() {
		setSelectedItem({ label: '', key: '' });
	};

	var removeItem = function removeItem(item) {
		var _items = [].concat(_toConsumableArray(selectedItems));
		var filteredItems = _items.filter(function (_item) {
			return _item.key !== item.key;
		});
		setSelectedItems(filteredItems);

		onChange(filteredItems);
	};

	/**
  *
  *
  */
	return _react2.default.createElement(
		'div',
		{ className: 'md-select ' + ('md-select-' + type) },
		_react2.default.createElement(
			'label',
			{ htmlFor: RANDOM_ID, className: 'md-select__label ' + (active ? 'md-select__label--active' : '') },
			label
		),
		_react2.default.createElement('input', {
			value: selectedItem.label,
			type: 'text',
			className: 'md-select__input',
			onFocus: function onFocus() {
				return onfocus();
			},
			onChange: function onChange(e) {
				return handleChange(e);
			},
			id: RANDOM_ID
		}),
		asyncOptions && active && typing && _react2.default.createElement(
			'span',
			{ className: 'md-select__spinner' },
			_react2.default.createElement(_MDSpinner2.default, null)
		),
		multiple && _react2.default.createElement(
			'div',
			{ className: 'md-select__chips' },
			selectedItems.map(function (item, k) {
				return k < 2 && _react2.default.createElement(
					'div',
					{ className: 'md-chip', key: 'si' + k },
					_react2.default.createElement(
						'span',
						{ className: 'md-chip__text' },
						item.label
					),
					_react2.default.createElement(
						'span',
						{ className: 'md-chip__close', onClick: function onClick() {
								return removeItem(item);
							} },
						_react2.default.createElement(_icons.Icon, { name: 'remove', fill: '#aaa' })
					)
				);
			}),
			selectedItems.length > 2 && _react2.default.createElement(
				'div',
				{ className: 'md-chip md-chip--small', onClick: function onClick() {
						return setShowDropdown(true);
					} },
				_react2.default.createElement(
					'div',
					{ className: 'md-chip__text' },
					'+',
					selectedItems.length - 2
				)
			)
		),
		active && !multiple && !asyncOptions && _react2.default.createElement(
			'span',
			{
				onClick: function onClick() {
					return remove();
				},
				className: 'md-select__remove ' + (active ? 'md-select__remove--active' : '')
			},
			_react2.default.createElement(_icons.Icon, { name: 'remove' })
		),
		_react2.default.createElement(
			'span',
			{ className: 'md-select__arrow ' + (active ? 'md-select__arrow--active' : '') },
			_react2.default.createElement(_icons.Icon, { name: 'arrow-up' })
		),
		_react2.default.createElement(
			'div',
			{
				ref: ref['dropdown' + RANDOM_ID],
				id: 'dropdown' + RANDOM_ID,
				className: 'md-select__dropdown-wrp ' + (showDropdown ? 'md-select__dropdown-wrp--active' : '')
			},
			_react2.default.createElement(_MDDropdown2.default, {
				items: items,
				onSelectItem: selectItem,
				multiple: multiple,
				selectedItem: selectedItem,
				selectedItems: selectedItems,
				customLabel: renderLabel
			})
		)
	);
};

exports.default = MDSelect;