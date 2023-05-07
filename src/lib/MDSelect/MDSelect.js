import React, { useState, useEffect } from 'react';
import { Icon } from './subcomponents/icons';
import MDDropdown from './subcomponents/MDDropdown';
import MDSpinner from './subcomponents/MDSpinner';
import './style.scss';
import { useRef } from 'react';
const MDSelect = ({
	options,
	label,
	type = 'standard',
	value,
	onChange,
	config,
	multiple,
	renderLabel,
	asyncOptions,
	isSimple,
}) => {
	const [selectedItem, setSelectedItem] = useState({ label: '', key: '' });
	const [selectedItems, setSelectedItems] = useState([]);

	const [active, setActive] = useState(false);
	const [typing, setTyping] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [items, setItems] = useState([]);
	const [paddingLeft, setPaddingLeft] = useState(0);
	const RANDOM_ID = `mds${(Math.random() * 10000).toFixed()}`;
	let ref = {
		['dropdown' + RANDOM_ID]: null,
	};
	ref['dropdown' + RANDOM_ID] = useRef(null);

	const chipRefs = useRef([]);
	useEffect(() => {
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
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, RANDOM_ID]);
	/**
	 *
	 */
	useEffect(() => {
		let _value = { label: '', key: '' };

		_value = mapConfig(Array.isArray(value) ? '' : value);

		setSelectedItem(_value);
	}, []);
	useEffect(() => {
		setActive(selectedItem.label ? true : false);
	}, [selectedItem]);

	useEffect(() => {
	
		let pl = chipRefs.current.reduce((curr,acc)=>{

			return curr+=acc.offsetWidth+4;
		},0);

		setPaddingLeft(pl);
	}, [selectedItems]);
	useEffect(() => {
		setItems(
			!asyncOptions
				? options.map(option => {
						option = { ...option, ...mapConfig(option) };
						return option;
				  })
				: []
		);
	}, [config, options]);

	/****
	 *
	 */

	const mapConfig = _value => {
		return isSimple
			? {
					key: _value,
					label: _value,
			  }
			: {
					key: _value ? _value[config.itemKey ? config.itemKey : 'value'] : '',
					label: _value ? _value[config.itemLabel ? config.itemLabel : 'label'] : '',
			  };
	};
	const onfocus = () => {
		setActive(true);
		setShowDropdown(true);
	};

	const handleChange = e => {
		const {value} = e.target;
		if (asyncOptions) {
			setTyping(prevTyping => value.length > 0);

			asyncOptions(value, _options => {
				setTyping(false);
				setItems(
					_options.map(option => {
						option = { ...option, ...mapConfig(option) };
						return option;
					})
				);
			});
		} else {
			setItems(
				options
					.filter(_option => {
						let _searchValue = value.toUpperCase();

						return _option.label.toUpperCase().includes(_searchValue);
					})
					.map(option => {
						option = { ...option, ...mapConfig(option) };
						return option;
					})
			);
		}
		setSelectedItem({ key: '', label: value });
	};
	const selectItem = (e, item) => {
		//e.stopPropagation();
		if (multiple) {
			let _items = [...selectedItems];
			let alreadExists = _items.find(_item => _item.key === item.key);

			if (alreadExists) {
				removeItem(item);
			} else {
				_items.push(item);
				setSelectedItems(_items);
				onChange(isSimple ? _items.map(__item => __item.label) : _items);
			}
		} else {
			setSelectedItem(item);
			setShowDropdown(false);
			onChange(isSimple ? item.label : item);
		}
	};
	const remove = () => {
		setSelectedItem({ label: '', key: '' });
	};

	const removeItem = item => {
		let _items = [...selectedItems];
		let filteredItems = _items.filter(_item => {
			return _item.key !== item.key;
		});
		setSelectedItems(filteredItems);

		onChange(filteredItems);
	};

	/**
	 *
	 *
	 */
	return (
		<div className={`md-select ${'md-select-' + type}`}>
			<label htmlFor={RANDOM_ID} className={`md-select__label ${active ? 'md-select__label--active' : ''}`}>
				{label}
			</label>
			<input
				value={selectedItem.label}
				type="text"
				style={{ paddingLeft: paddingLeft + 'px' }}
				className="md-select__input"
				onFocus={() => onfocus()}
				onChange={e => handleChange(e)}
				id={RANDOM_ID}
			/>
			{asyncOptions && active && typing && (
				<span className="md-select__spinner">
					<MDSpinner />
				</span>
			)}
			{multiple && (
				<div className="md-select__chips">
					{selectedItems.map((item, k) => {
						return (
							k < 2 && (
								<div className="md-chip" key={'si' + k} ref={el => (chipRefs.current[k] = el)}>
									<span className="md-chip__text">{item.label}</span>
									<span className="md-chip__close" onClick={() => removeItem(item)}>
										<Icon name="remove" fill="#aaa" />
									</span>
								</div>
							)
						);
					})}
					{selectedItems.length > 2 && (
						<div className="md-chip md-chip--small" onClick={() => setShowDropdown(true)} ref={el => (chipRefs.current[2] = el)}>
							<div className="md-chip__text">+{selectedItems.length - 2}</div>
						</div>
					)}
				</div>
			)}

			{active && !multiple && !asyncOptions && (
				<span
					onClick={() => remove()}
					className={`md-select__remove ${active ? 'md-select__remove--active' : ''}`}
				>
					<Icon name="remove" />
				</span>
			)}
			<span className={`md-select__arrow ${active ? 'md-select__arrow--active' : ''}`}>
				<Icon name="arrow-up" />
			</span>

			<div
				ref={ref['dropdown' + RANDOM_ID]}
				id={'dropdown' + RANDOM_ID}
				className={`md-select__dropdown-wrp ${showDropdown ? 'md-select__dropdown-wrp--active' : ''}`}
			>
				<MDDropdown
					items={items}
					onSelectItem={selectItem}
					multiple={multiple}
					selectedItem={selectedItem}
					selectedItems={selectedItems}
					customLabel={renderLabel}
				/>
			</div>
		</div>
	);
};

export default MDSelect;
