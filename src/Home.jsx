import { Dialog } from './Dialog';
import React from 'react';
import { getContext } from './GlobalContext';
export function Home({}) {
  const { showModal } = getContext();
  return (
    <>
      <div className='center'>
        <button className='btn' type='button' onClick={showModal}>
          Show Modal
        </button>
      </div>
      <Dialog />
    </>
  );
}
