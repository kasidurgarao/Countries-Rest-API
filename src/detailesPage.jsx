import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  // Fetch country details
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();

      const selectedCountry = data.find(
        (country) => country.name.common.toLowerCase() === name.toLowerCase()
      );

      if (selectedCountry) {
        setCountry(selectedCountry);
        console.log(
          "Borders for",
          selectedCountry.name.common,
          ":",
          selectedCountry.borders
        );
      } else {
        setCountry(data[0]);
      }

      // Fetch border countries
      if (selectedCountry && selectedCountry.borders?.length) {
        const borders = selectedCountry.borders.join(",");
        const borderResponse = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${borders}`
        );
        const borderData = await borderResponse.json();
        console.log("Border countries data:", borderData);
        setBorderCountries(borderData);
      }
    };

    fetchCountryData();
  }, [name]);

  if (!country) {
    return (
      <div className="md:p-4 p-8">
        {/* <button onClick={() => navigate("/")} className="mb-4 border shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#5f6368"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>{" "}
          Back
        </button> */}
      </div>
    );
  }

  return (
    <div className="md:m-20">
      <button
        onClick={() => navigate("/")}
        className="md:mb-12 m-4 shadow-custom bg-white px-12 py-2 mx-4 rounded-md dark:bg-gray-800 flex gap-2 text-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#5f6368"
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>{" "}
        Back
      </button>
      <div className="flex md:justify-center ">
        <div className="flex flex-col md:flex-row gap-6 p-4 md:gap-20 w-full max-w-7xl">
          <div>
            <img
              className="md:w-[310px] h-[300px]"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{country.name.common}</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-24">
              <div className="flex flex-col gap-2">
                <p>
                  <b>Native Name:</b>{" "}
                  {Object.values(country.name.nativeName)[0]?.common || "N/A"}
                </p>
                <p>
                  <b>Population:</b> {country.population.toLocaleString()}
                </p>
                <p>
                  <b>Region:</b> {country.region}
                </p>
                <p>
                  <b>Sub Region:</b> {country.subregion || "N/A"}
                </p>
                <p>
                  <b>Capital:</b> {country.capital || "N/A"}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  <b>Top Level Domain:</b> {country.tld}
                </p>
                <p>
                  <b>Currencies:</b> {Object.keys(country.currencies) || "N/A"}
                </p>
                <p>
                  <b>Languages:</b>{" "}
                  {Object.values(country.languages || {}).join(", ")}
                </p>
              </div>
            </div>

            {/* Border Countries Section */}
            {borderCountries.length > 0 ? (
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:gap-4 ">
                <h3 className="text-lg font-bold">Border Countries:</h3>
                <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
                  {borderCountries.map((border) => (
                    <button
                      key={border.cca3}
                      onClick={() =>
                        navigate(`/country/${border.name.common.toLowerCase()}`)
                      }
                      className="shadow-custom bg-white  h-10 md:w-32 text-sm hover:bg-gray-100 dark:bg-gray-800 dark:shadow-none"
                    >
                      {border.name.common}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6 flex gap-4">
                <h3 className="text-md font-bold">Border Countries:</h3>
                <p className="text-md">No Borders</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
