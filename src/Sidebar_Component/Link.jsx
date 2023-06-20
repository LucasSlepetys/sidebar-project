import React from 'react';
function Link({ url, text, icon }) {
  return (
    <li className='link'>
      <div className='page-icon'>{icon}</div>
      <a href={url}>{text}</a>
    </li>
  );
}

export default Link;
