import { createContext, useState, useContext } from "react";

const FilterOptionsProviderContext = createContext({});

export const FilterOptionsProvider = ({ children, value }) => {
  const [filterOptions, setFilterOptions] = useState(value || {});

  return (
    <FilterOptionsProviderContext.Provider
      value={{
        filterOptions,
      }}
    >
      {children}
    </FilterOptionsProviderContext.Provider>
  );
};

export const useFilterOptions = () => {
  return useContext(FilterOptionsProviderContext);
};
