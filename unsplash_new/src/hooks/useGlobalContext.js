import { useContext } from "react";
import { MainContext } from "../context/globalContext";

export const useGlobalContext = () => {
  const context = useContext(MainContext);
  return context;
};
