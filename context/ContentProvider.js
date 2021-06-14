import { createContext, useState, useEffect, useContext, useMemo } from "react";

import { importContent } from "../helpers/importContent";

const ContentProviderContext = createContext({});

export const ContentProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    (process.browser && localStorage.getItem("language")) || "en"
  );
  const [content, setContent] = useState({});

  const contentByLanguage = useMemo(
    () => content[language] || {},
    [content, language]
  );

  useEffect(() => {
    importContent().then((data) => setContent(data));
  }, []);

  const getFurnitureById = (id) => {
    const furniture = contentByLanguage?.furniture?.find(
      (item) => item.id === id
    );

    if (!furniture) {
      return null;
    }

    return furniture;
  };

  const handleLanguageChange = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <ContentProviderContext.Provider
      value={{
        content: contentByLanguage,
        language,
        changeLanguage: handleLanguageChange,
        getFurnitureById,
      }}
    >
      {children}
    </ContentProviderContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentProviderContext);
};
