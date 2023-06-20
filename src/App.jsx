import { getContext } from './context';
import useShow from './useShow';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import { useRef } from 'react';

const App = () => {
  const { isDisplayed: isModalDisplayed, toggleDisplay: toggleModalDisplay } =
    useShow(true);
  const { isDisplayed: isSideDisplayed, toggleDisplay: toggleSideDisplay } =
    useShow(false);
  const { links, social } = getContext();

  const dialogRef = useRef(null);

  const showModal = () => {
    // toggleModalDisplay();
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };
  return (
    <main>
      <dialog ref={dialogRef}>
        <div className='modal'>
          <h3>Modal Content</h3>
          <FaTimes className='close-icon' onClick={closeModal} />
        </div>
      </dialog>
      {!isSideDisplayed && (
        <div onClick={toggleSideDisplay}>
          <FaBars className='side-toggle' />
        </div>
      )}

      <div className={isSideDisplayed ? 'sidebar show-container' : 'sidebar'}>
        <div className='sidebar-top'>
          <div className='sidebar-header'>
            <img className='logo' src={logo} alt='Coding Addict' />
            <FaTimes className='close-icon' onClick={toggleSideDisplay} />
          </div>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <li key={id} className='link'>
                  <div className='page-icon'>{icon}</div>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-links'>
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id}>
                <a className='social-link' href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='center'>
        <button
          className='btn'
          type='button'
          onClick={() => {
            showModal();
          }}
        >
          Show Modal
        </button>
      </div>
    </main>
  );
};
export default App;
