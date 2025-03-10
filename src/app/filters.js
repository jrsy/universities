'use client'
import DataTable from '@/datatable';
import Dropdown from '@/dropdown';
import SearchBox from '@/searchbox';
import { useState } from 'react';

export default function Filters({ applyFilters }) {
  const [countryfilter, setCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleDropdownChange = (e) => {
    setCountry(e.target.value);
  }
  
  const handleSearchBoxChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  async function applyCurrentFilters() {
	  await applyFilters(countryfilter, searchTerm);
  }
  
  async function clearCurrentFilters() {
	  setCountry("");
	  setSearchTerm("");
	  
	  document.getElementById("searchBox").value = "";
	  document.getElementById("dropDown").value = "";
	  
	  await applyFilters(countryfilter, searchTerm);
  }
  
  return (
	<div>
		<Dropdown handleDropdownChange={handleDropdownChange}/>
		<br />
		<SearchBox value={searchTerm} handleSearchBoxChange={handleSearchBoxChange}/>
		<button style={{ backgroundColor: "LightGray", padding: "5px", margin: "10px" }} onClick={applyCurrentFilters}>Apply Filters</button>
		<button style={{ backgroundColor: "LightGray", padding: "5px", margin: "10px" }} onClick={clearCurrentFilters}>Clear Filters</button>
	</div>
  );
}
