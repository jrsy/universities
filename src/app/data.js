const testDB = [
  {
	web_pages: "https://www.eit.edu.au/",
    name: "Engineering Institute of Technology",
	alpha_two_code: "AU",
    state_province: null,
    domains: "student.eit.edu.au",
    country: "Australia"
  },
  {
	"web_pages": "https://karazin.ua, http://www.univer.kharkov.ua/",
    "name": "Kharkiv National University",
	"alpha_two_code": "UA",
	"state_province": null,
    "domains": "student.karazin.ua, karazin.ua, univer.kharkov.ua",
    "country": "Ukraine"
  },
  {
	web_pages: "https://kyrenia.edu.tr",
    name: "University of Kyrenia",
	alpha_two_code: "TR",
    state_province: null,
    domains: "std.kyrenia.edu.tr, kyrenia.edu.tr",
    country: "Turkey"
  },
  {
	web_pages: "https://regent.edu.gh",
    name: "Regent University College of Science and Technology",
	alpha_two_code: "GH",
    state_province: null,
    domains: "regent.edu.gh",
    country: "Ghana"
  },
  {
	web_pages: "https://wab.edu.pl",
    name: "Wroclaw Akademia Biznesu",
	alpha_two_code: "PL",
    state_province: null,
    domains: "student.wab.edu.pl, wab.edu.pl",
    country: "Poland"
  },
  {
    web_pages: "http://www.acadiau.ca/",
    name: "Acadia University",
    alpha_two_code: "CA",
    state_province: "Nova Scotia",
    domains: "acadiau.ca",
    country: "Canada"
  }
]

var testFavourites = [];

export function fetchCountries() {
	var results = testDB.map(result => {
		return result.country;
	});
	
	return results;
}

export function fetchFavourites() {
  return testFavourites;
}

export async function fetchUniversities(countryfilter="", namefilter="") {
  var results = testDB;
  results.forEach((result, i) => { result.id = i; });
  if (countryfilter.length > 0) {
	results = results.filter(result => result.country === countryfilter);
  }
  
  if (namefilter.length > 0) {
	results = results.filter(result => result.name.toLowerCase().startsWith(namefilter.toLowerCase()));
  }
  
  return results;
}

/*export async function fetchUniversities(countryfilter=null, namefilter=null) {
 console.log(process.env.POSTGRES_URL);
  try {
    const universities = await sql`
      SELECT
        id,
        name,
		web_pages,
		alpha_two_code,
		state_province,
		domains,
		country
      FROM dbo.universities
      ORDER BY id ASC
    `;

    return universities;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all universities.');
  }
}*/