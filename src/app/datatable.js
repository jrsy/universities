'use client'

export default function DataTable({ universities, existingFavourites, toggleFavourite }) {
	
  function FavouriteButton({ university, existingFavourites }) {
	  var found = existingFavourites.find(u => u.id === university.id);
	  if (found) {
		return (
			<div>
				<button style={{ backgroundColor: "LightGray", padding: "5px", margin: "10px" }} onClick={(e) => toggleFavourite(e, university)} value={university}>Remove</button>
			</div>
		)
	  } else {
		 return (
			<div>
				<button style={{ backgroundColor: "LightGray", padding: "5px", margin: "10px" }} onClick={(e) => toggleFavourite(e, university)} value={university}>Add</button>
			</div>
		)
	  }
  }
  
  return (
    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
		<thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
		  <tr>
			<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
			  Name
			</th>
			<th scope="col" className="px-3 py-5 font-medium">
			  Websites
			</th>
			<th scope="col" className="px-3 py-5 font-medium">
			  State/Province
			</th>
		   </tr>
		</thead>

		<tbody className="divide-y divide-gray-200 text-gray-900">
		  {universities.map((university, i) => {
			return <tr key={university.id} className="group">
			  <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
				<div className="flex items-center gap-3">
				  <p>{university.name}</p>
				</div>
			  </td>
			  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
				{university.web_pages}
			  </td>
			  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
				{university.state_province}
			  </td>
			  <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
				<FavouriteButton university={university} existingFavourites={existingFavourites} />
			  </td>
			</tr>
		  })}
		</tbody>
	  </table>
  );
}
