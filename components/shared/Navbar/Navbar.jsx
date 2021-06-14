import React from "react";
import { Select } from "@chakra-ui/react";

import { useContent } from "../../../context/ContentProvider";

import CartIcon from "../../../assets/icons/ic-cart.svg";

const languages = ["en", "hr", "de", "ru"];

export const Navbar = () => {
  const { language, changeLanguage } = useContent();

  return (
    <div>
      <h1>TABURET</h1>
      <button>
        <CartIcon />
      </button>
      <Select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </Select>
    </div>
  );
};
