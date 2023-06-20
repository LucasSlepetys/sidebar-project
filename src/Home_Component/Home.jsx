import { Dialog } from './Dialog';
import React from 'react';
import { getContext } from '../Context/globalContext';
import { FaBars } from 'react-icons/fa';

function Home({}) {
  const { showModal, isSideDisplayed, toggleSideDisplay } = getContext();
  return (
    <>
      {!isSideDisplayed && (
        <div onClick={toggleSideDisplay}>
          <FaBars className='side-toggle' />
        </div>
      )}
      <div className='center'>
        <button className='btn' type='button' onClick={showModal}>
          Show Modal
        </button>
      </div>
      <Dialog />
    </>
  );
}
export default Home;
