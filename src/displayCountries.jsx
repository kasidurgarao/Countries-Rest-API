import { Link } from "react-router-dom";

function DisplayCountries({ data }) {
  const countyList = data?.map((country, index) => (
    <div key={index} className="shadow-md flex flex-col dark:bg-gray-800 rounded-md overflow-hidden ">
      <Link to={`/country/${country.name.common}`} className="w-full h-full"> 
        <img className="w-full h-[250px]" src={country.flags.png} alt={`${country.name.common} flag`} />
        <div className="p-4">
          <h3 className="mb-2 text-xl font-bold">{country.name.common}</h3>
          <p className="mb-1">
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p className="mb-1">
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital || "N/A"}
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-4 lg:px-20">
      {countyList}
    </div>
  );
}

export default DisplayCountries;
