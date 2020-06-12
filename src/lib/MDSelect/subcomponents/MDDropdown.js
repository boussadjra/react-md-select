import React from 'react';
import { Icon } from './icons';

const MDDropdown = ({ items, onSelectItem, selectedItem, selectedItems, multiple,customLabel }) => {
	const renderLabel = item => {
		if(customLabel){
			return customLabel(item)
		}
		return (
			
			<React.Fragment>
				{[...item.label].map((char, i) => {
					return selectedItem.label.charAt(i).toUpperCase() === char.toUpperCase() ? (
						<span className="md-select__dropdown-item--highlighted" key={'l' + i}>
							{char}
						</span>
					) : (
						<span key={'l' + i}>{char}</span>
					);
				})}
			</React.Fragment>
		);
	};
	const isSelected = item => {
		return selectedItems.find(_item => _item.key === item.key);
	};
	return (
		<div className="md-select__dropdown">
			{items.map((item, i) => {
				return (
					<div
						className={`md-select__dropdown-item ${isSelected(item) &&
							'md-select__dropdown-item--selected'}`}
						key={'item' + i}
						onClick={e => onSelectItem(e, item)}
					>
						<span>{renderLabel(item)}</span>
						{/* {isSelected(item) ? <Icon name="check" /> : <span />} */}
					</div>
				);
			})}
		</div>
	);
};

export default MDDropdown;
