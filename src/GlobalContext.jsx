import { createContext, useContext } from 'react';
import { links, social } from './data';

const GlobalContext = createContext();

export const getContext = () => {
  return useContext(GlobalContext);
};

const Context = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ links, social }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
