import React from 'react';
import MDSelect from '../lib';
import { useState } from 'react';
import './app.scss';
const countries = [
	{
		name: 'Afghanistan',
		capital: 'Kabul',
		population: 27657145,
		flag: 'https://restcountries.eu/data/afg.svg',
	},
	{
		name: 'Åland Islands',
		capital: 'Mariehamn',
		population: 28875,
		flag: 'https://restcountries.eu/data/ala.svg',
	},
	{
		name: 'Albania',
		capital: 'Tirana',
		population: 2886026,
		flag: 'https://restcountries.eu/data/alb.svg',
	},
	{
		name: 'Algeria',
		capital: 'Algiers',
		population: 40400000,
		flag: 'https://restcountries.eu/data/dza.svg',
	},
];

const cities = ['Aflou', 'Tlemcen', 'Annaba', 'Rabat', 'Cairo', 'Madrid', 'Zurich', 'Moskow', 'Beijin'];

const config = {
	itemLabel: 'name',
	itemKey: 'name',
};

const App = () => {
	const [country, setCountry] = useState(null);
	const [city, setCity] = useState('');
	const [selectedCities, setSelectedCities] = useState([]);
	const [selectedCountries, setSelectedCountries] = useState(null);
	const handleChange = val => {
		setCountry(val);
	};

	const handleChangeCity = val => {
	
		setCity(val);
	};
	const handleChangeMultiCities = val => {
		console.log('--------cities------------')
		console.log(val)
		console.log('--------------------')
		setSelectedCities(val);
	};
	const handleChangeMulti = val => {
		setSelectedCountries(val);
	};

	const fetchCountries = (filterValue, callback) => {
		setTimeout(() => {
			callback(countries.filter(c => c.name.toLowerCase().includes(filterValue.toLowerCase())));
		}, 4000);
	};

	return (
		<div className="app-demo">
			<div className="app-demo__item">
				<MDSelect
					asyncOptions={fetchCountries}
					label="Async"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					label="Custom rendering"
					onChange={handleChange}
					value={country}
					renderLabel={item => (
						<div className="app-demo_custom-label">
							<img src={item.flag} alt="flag" height="24px" width="32px" />
							<span>{item.label}</span>
						</div>
					)}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					label="Multiple"
					value={selectedCountries}
					onChange={handleChangeMulti}
					config={config}
					multiple
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					type="solo"
					label="Solo"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					type="outlined"
					label="Outlined"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					type="filled"
					label="Filled"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					label="Standard"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
			<div className="app-demo__item">
				<MDSelect options={cities} label="Simple select" value={city} onChange={handleChangeCity} isSimple />
			</div>
			<div className="app-demo__item">
				<MDSelect multiple options={cities} label="Simple multi select" value={selectedCities} onChange={handleChangeMultiCities} isSimple />
			</div>
		</div>
	);
};
export default App;
