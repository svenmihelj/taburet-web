import { createContext, useState, useContext, useEffect } from "react";

const TranslationProviderContext = createContext({});

export const TranslationProvider = ({ children, value }) => {
  const [translations, setTranslations] = useState(value || {});

  useEffect(() => {
    setTranslations(value);
  }, [value]);

  return (
    <TranslationProviderContext.Provider
      value={{
        translations,
      }}
    >
      {children}
    </TranslationProviderContext.Provider>
  );
};

export const useTranslations = () => {
  return useContext(TranslationProviderContext);
};
