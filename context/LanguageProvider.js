import { createContext, useState, useContext } from "react";
import { useRouter } from "next/router";

const LanguageProviderContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [language, setLanguage] = useState(
    (process.browser && localStorage.getItem("language")) || "en"
  );

  const handleLanguageChange = async (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);

    await router.replace({
      pathname: router.route,
      query: {
        ...router.query,
        lng,
      },
    });
  };

  return (
    <LanguageProviderContext.Provider
      value={{
        language,
        changeLanguage: handleLanguageChange,
      }}
    >
      {children}
    </LanguageProviderContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageProviderContext);
};
