import { useState } from "react";
import SearchBar from "./searchBar";
import DisplayCountries from "./displayCountries";

function FilterData({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredCountries = data?.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion =
      regionFilter === "All" || country.region.toLowerCase() === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
      />
      <DisplayCountries data={filteredCountries} />
    </>
  );
}

export default FilterData;
