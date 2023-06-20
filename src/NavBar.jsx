import React from 'react';
import logo from './logo.svg';
import { getContext } from './GlobalContext';
import useShow from './useShow';
import { FaTimes, FaBars } from 'react-icons/fa';

export function NavBar() {
  const { isDisplayed: isSideDisplayed, toggleDisplay: toggleSideDisplay } =
    useShow(false);
  const { links, social } = getContext();

  return (
    <>
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
    </>
  );
}
