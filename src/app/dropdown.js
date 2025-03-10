'use client'

import { fetchCountries } from '@/data';

export default function Dropdown({ handleDropdownChange }) {
  const countries = fetchCountries();
	
  return (
    <select id="dropDown" className="divide-y divide-gray-200 text-gray-900" defaultValue="" onChange={handleDropdownChange}>
		<option value="">All</option>
		{countries.map((country, i) => {
			return <option key={i} value={country}>{country}</option>
		  })}
	</select>
  );
}
