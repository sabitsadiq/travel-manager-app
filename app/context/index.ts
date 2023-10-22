import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface contextProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const appDefaultValue: contextProps = {
  handleSearch: () => {},
};
export const GlobalContext = createContext<contextProps>(appDefaultValue);

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const value = {
    handleSearch,
  };

  return;
  // <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>)
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
