'use client'
import { useState } from 'react';

export default function SearchBox({ value, handleSearchBoxChange }) {
  const placeholder = "Search by name"
	
  return (
    <input id="searchBox" type="text" placeholder={placeholder} onChange={handleSearchBoxChange} className="divide-y divide-gray-200 text-gray-900">
	</input>
  );
}
