'use client'
import DataTable from '@/datatable';
import Filters from '@/filters';
import { fetchUniversities, fetchFavourites } from '@/data';
import { useState } from 'react';

const fullResults = await fetchUniversities();
let favourites = await fetchFavourites();

const Pages = Object.freeze({
    SEARCH:   0,
    FAVOURITES:  1
});

function Page({ currentPage, applyFilters, universities, favouriteUniversities, toggleFavourite }) {
	if (currentPage === Pages.SEARCH) {
		return (
			<div>
				<Filters applyFilters={applyFilters}/>
				<DataTable universities={universities} existingFavourites={favouriteUniversities} toggleFavourite={toggleFavourite} />
			</div>
		)
	} else {
		return (
			<div>
				<DataTable universities={favouriteUniversities} existingFavourites={favouriteUniversities} toggleFavourite={toggleFavourite} />
			</div>
		)
	}
}

export default function Home() {
	const [universities, setUniversities] = useState(fullResults);
	const [favouriteUniversities, setFavouriteUniversities] = useState(favourites);
	const [currentPage, setCurrentPage] = useState(Pages.SEARCH);
	const [buttonText, setButtonText] = useState("Favourites");
	
	async function applyFilters(countryfilter, namefilter) {
		setUniversities(await fetchUniversities(countryfilter, namefilter));
	}
	
	function changePage() {
		if (currentPage === Pages.SEARCH) {
			setCurrentPage(Pages.FAVOURITES);
			setButtonText("Search");
		} else {
			setCurrentPage(Pages.SEARCH);
			setButtonText("Favourites");
		}
	}
	
	const toggleFavourite = (event, university) => {
	   event.preventDefault();
	   updateFavourites(university);
	}
	
	function updateFavourites(university) {
		var found = favouriteUniversities.find(u => u.id === university.id);
		if (found) {
			const newFavourites = favouriteUniversities.filter(u => u.id !== university.id);
			setFavouriteUniversities(newFavourites);
		} else {
			const newFavourites = favouriteUniversities.slice();
			newFavourites.push(university);
			setFavouriteUniversities(newFavourites);
		}
	}

  return (
    <div style={{ width: "100%" }} className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
		<Page
			style={{ width: "100%" }}
			currentPage={currentPage}
			applyFilters={applyFilters}
			universities={universities}
			favouriteUniversities={favouriteUniversities}
			toggleFavourite={toggleFavourite}
		/>
		<button style={{ backgroundColor: "LightGray", padding: "5px", margin: "10px" }} onClick={changePage}>{buttonText}</button>
      </main>
    </div>
  );
}
