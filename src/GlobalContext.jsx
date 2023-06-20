import { createContext, useContext, useRef } from 'react';
import { links, social } from './data';

// ! -------------------------------------------- !

const GlobalContext = createContext();

export const getContext = () => {
  return useContext(GlobalContext);
};

// ! -------------------------------------------- !

const Context = ({ children }) => {
  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const showModal = () => {
    dialogRef.current.showModal();
  };

  const values = { links, social, dialogRef, closeModal, showModal };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default Context;
