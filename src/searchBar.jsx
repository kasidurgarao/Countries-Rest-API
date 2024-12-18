function SearchBar({
  searchQuery,
  setSearchQuery,
  regionFilter,
  setRegionFilter,
  subregionFilter,
  setSubregionFilter,
  sortFilter,
  setSortFilter,
  countries,
}) {
  const getSubregionsByRegion = (countries) => {
    const regionToSubregions = {};
    countries.forEach(({ region, subregion }) => {
      if (region && subregion) {
        if (!regionToSubregions[region]) regionToSubregions[region] = new Set();
        regionToSubregions[region].add(subregion);
      }
    });
    if (!regionToSubregions["Antarctic"]) {
      regionToSubregions["Antarctic"] = new Set();
    }
    for (const region in regionToSubregions) {
      regionToSubregions[region] = Array.from(regionToSubregions[region]);
    }
    return regionToSubregions;
  };

  const subregionsByRegion = getSubregionsByRegion(countries);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-around md:p-10 w-full">
        {/* Search Input */}
        <div className="relative w-4/4 p-2 md:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute w-6 h-6 text-gray-500 ml-4 top-1/2 transform -translate-y-1/2 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.606-10.606 7.5 7.5 0 0 0 10.606 10.606z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a country..."
            className="w-full px-12 py-4 text-sm text-gray-700 bg-white outline-none rounded-md placeholder-gray-500 dark:text-white dark:bg-gray-800 dark:placeholder-white"
          />
        </div>

        {/* Region Filter */}
        <div className="relative w-3/4 p-2 md:w-1/5">
          <select
            value={regionFilter}
            onChange={(e) => {
              setRegionFilter(e.target.value);
              setSubregionFilter("");
            }}
            className="w-full px-4 py-4 text-sm text-gray-700 bg-white outline-none rounded-md appearance-none dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
          >
            <option value="all" className="dark:bg-gray-800 dark:text-white">
              All Regions
            </option>
            {Object.keys(subregionsByRegion).map((region) => (
              <option
                key={region}
                value={region}
                className="dark:bg-gray-800 dark:text-white"
              >
                {region}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center px-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Subregion Filter */}
        {regionFilter !== "all" &&
          subregionsByRegion[regionFilter]?.length > 0 && (
            <div className="relative w-3/4 p-2 md:w-1/5">
              <select
                value={subregionFilter}
                onChange={(e) => setSubregionFilter(e.target.value)}
                className="w-full px-4 py-4 text-sm text-gray-700 bg-white outline-none rounded-md appearance-none dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
              >
                <option value="" className="dark:bg-gray-800 dark:text-white">
                  All Subregions
                </option>
                {subregionsByRegion[regionFilter].map((subregion) => (
                  <option
                    key={subregion}
                    value={subregion}
                    className="dark:bg-gray-800 dark:text-white"
                  >
                    {subregion}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center px-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          )}

        {/* Sort Filter */}
        <div className="relative w-3/4 p-2 md:w-1/5">
          <select
            value={sortFilter}
            onChange={(e) => setSortFilter(e.target.value)}
            className="w-full px-4 py-4 text-sm text-gray-700 bg-white outline-none rounded-md appearance-none dark:text-white dark:bg-gray-800 dark:placeholder-gray-400"
          >
            <option
              value="sorting"
              className="dark:bg-gray-800 dark:text-white"
            >
              Sorting
            </option>
            <option value="phtol" className="dark:bg-gray-800 dark:text-white">
              Population High to Low
            </option>
            <option value="pltoh" className="dark:bg-gray-800 dark:text-white">
              Population Low to High
            </option>
            <option value="ahtol" className="dark:bg-gray-800 dark:text-white">
              Area High to Low
            </option>
            <option value="altoh" className="dark:bg-gray-800 dark:text-white">
              Area Low to High
            </option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center px-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
