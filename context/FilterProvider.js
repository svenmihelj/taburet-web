import { createContext, useState, useContext, useEffect } from "react";

const FilterProviderContext = createContext({});

export const FilterProvider = ({ children, value }) => {
  const [filter, setFilters] = useState(value || {});

  useEffect(() => {
    setFilters(value);
  }, [value]);

  return (
    <FilterProviderContext.Provider
      value={{
        filter,
      }}
    >
      {children}
    </FilterProviderContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FilterProviderContext);
};
