import React from 'react';
import { getContext } from '../Context/globalContext';
import { FaTimes } from 'react-icons/fa';

export function Dialog() {
  const { closeModal, dialogRef } = getContext();
  return (
    <dialog ref={dialogRef}>
      <div className='modal'>
        <h3>Modal Content</h3>
        <FaTimes className='close-icon' onClick={closeModal} />
      </div>
    </dialog>
  );
}
