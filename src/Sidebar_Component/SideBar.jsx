import IconLink from './IconLink';
import Link from './Link';
import React from 'react';
import logo from '../assets/logo.svg';
import { getContext } from '../Context/globalContext';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

function SideBar() {
  const { isSideDisplayed, toggleSideDisplay } = getContext();

  return (
    <>
      <aside className={isSideDisplayed ? 'sidebar show-container' : 'sidebar'}>
        <div className='sidebar-top'>
          <div className='sidebar-header'>
            <img className='logo' src={logo} alt='Coding Addict' />
            <FaTimes className='close-icon' onClick={toggleSideDisplay} />
          </div>
          <ul className='links'>
            {links.map((link) => {
              return <Link key={link.id} {...link} />;
            })}
          </ul>
        </div>
        <ul className='social-links'>
          {social.map((socialLink) => {
            return <IconLink key={socialLink.id} {...socialLink} />;
          })}
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
