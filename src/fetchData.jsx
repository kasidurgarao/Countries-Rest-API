// import { useEffect, useState } from "react";
// import DisplayCountries from "./displayCountries";
// import SearchBar from "./searchBar";

// function GetDataAndApplyFIlter() {
//   const [countries, setCountries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortFilter, setSortFilter] = useState("");
//   const [regionFilter, setRegionFilter] = useState("all");
//   const [filteredCountries, setFilteredCountries] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     const dataFunction = async () => {
//       try {
//         const data = await fetch("https://restcountries.com/v3.1/all");
//         const jsonData = await data.json();
//         setCountries(jsonData);
//         setFilteredCountries(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     dataFunction();
//   }, []);

//   // Filter data whenever `searchQuery` or `regionFilter` changes
//   useEffect(() => {
//     const filterData = () => {
//       const filtered = countries.filter((country) => {
//         const matchesSearch = country.name.common
//           .toLowerCase()
//           .includes(searchQuery.toLowerCase());
//         const matchesRegion =
//           regionFilter === "all" ||
//           country.region.toLowerCase() === regionFilter.toLowerCase();
//         return matchesSearch && matchesRegion;
//       }).sort((a, b) => {
//         if (sortFilter === "phtol") {
//           return b.population - a.population;
//         } else if (sortFilter === "pltoh") {
//           return a.population - b.population;
//         } else if (sortFilter === "ahtol") {
//           return b.area - a.area;
//         } else if (sortFilter === "altoh") {
//           return a.area - b.area;
//         }
//         return 0;
//       });
//       setFilteredCountries(filtered);
//     };

//     filterData();
//   }, [searchQuery, regionFilter, sortFilter,countries]);

//   return (
//     <>
//       <SearchBar
//         searchQuery={searchQuery}
//         setSearchQuery={setSearchQuery}
//         regionFilter={regionFilter}
//         setRegionFilter={setRegionFilter}
//         sortFilter={sortFilter}
//         setSortFilter={setSortFilter}
//         countries={countries}
//       />
//       <DisplayCountries data={filteredCountries} />
//     </>
//   );
// }

// export default GetDataAndApplyFIlter;

import { useEffect, useState } from "react";
import DisplayCountries from "./displayCountries";
import SearchBar from "./searchBar";

function GetDataAndApplyFilter() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [subregionFilter, setSubregionFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
        setFilteredCountries(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      // console.log("Applying Filters:", {
      //   searchQuery,
      //   regionFilter,
      //   subregionFilter,
      //   sortFilter,
      // });

      const filtered = countries
        .filter((country) => {
          const matchesSearch = country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          const matchesRegion =
            regionFilter === "all" || country.region === regionFilter;
          const matchesSubregion =
            subregionFilter === "" || country.subregion === subregionFilter;

          return matchesSearch && matchesRegion && matchesSubregion;
        })
        .sort((a, b) => {
          if (sortFilter === "phtol") {
            return b.population - a.population;
          } else if (sortFilter === "pltoh") {
            return a.population - b.population;
          } else if (sortFilter === "ahtol") {
            return b.area - a.area;
          } else if (sortFilter === "altoh") {
            return a.area - b.area;
          }
          return 0; 
        });

      // console.log("Filtered Countries:", filtered);

      setFilteredCountries(filtered);
    };

    filterData();
  }, [searchQuery, regionFilter, subregionFilter, sortFilter, countries]);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        subregionFilter={subregionFilter}
        setSubregionFilter={setSubregionFilter}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
        countries={countries}
      />
      <DisplayCountries data={filteredCountries} />
    </>
  );
}

export default GetDataAndApplyFilter;
