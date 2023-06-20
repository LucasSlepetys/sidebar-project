import { createContext, useContext, useRef } from 'react';
import { links, social } from '../data';
import useShow from './useShow';

// ! --------- Context + Function to get values --------- !

const GlobalContext = createContext();

export const getContext = () => {
  return useContext(GlobalContext);
};

// !! -------------------------------------------- !!

const Context = ({ children }) => {
  const { isDisplayed: isSideDisplayed, toggleDisplay: toggleSideDisplay } =
    useShow(false);

  // ! -----------Ref + Function for Dialog box ------------ !

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
  };

  const showModal = () => {
    dialogRef.current.showModal();
  };

  // !! -------------------------------------------- !!

  //values to be put into .Provider
  const values = {
    links,
    social,
    dialogRef,
    closeModal,
    showModal,
    isSideDisplayed,
    toggleSideDisplay,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default Context;
