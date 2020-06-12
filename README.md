## React MD select

It's a React ⚛️ based component that allows you to select item(s) from a set of items which could be custom rendered or loaded asynchronously

### Installation

     npm install react-md-select --save

### Usage

```js
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

const config = {
	itemLabel: 'name',
	itemKey: 'name',
};

const App = () => {
	const [country, setCountry] = useState(null);
	const handleChange = val => {
		setCountry(val);
	};

	return (
		<div className="app-demo">
			<div className="app-demo__item">
				<MDSelect
					options={countries}
					label="Standard"
					value={country}
					onChange={handleChange}
					config={config}
				/>
			</div>
		</div>
	);
};
export default App;
```

### Props

| name         | description                                                                         |
| ------------ | ----------------------------------------------------------------------------------- |
| options      | the set of options provided to the dropdown menu                                    |
| label        | the select title                                                                    |
| value        | the selected value                                                                  |
| onChange     | the onChange event allows us to update the value                                    |
| config       | it's an object that maps the key used to control the options and the label rendered |
| asyncOptions | it's used to load options asynchronously based on the typed value                   |
| renderLabel  | that allows you to custom the label rendering                                       |
| multiple     | that allows you to select multiple options                                          |
| isSimple     | Indicates the options are an array of primitive values                              |

## Demo

[MD Select](http://boussadjra.github.io/react-md-select)
