import React from "react";
import { TGlobalContext } from "./types";

const initContext = {
  contInputValue: '',
  setInputValue: () => {},
  contResults: [],
  setResults: () => {}
};
const GlobalContext = React.createContext<TGlobalContext>(initContext);

export default GlobalContext;
