import React from 'react';
function IconLink({ url, icon }) {
  return (
    <li>
      <a className='social-link' href={url}>
        {icon}
      </a>
    </li>
  );
}

export default IconLink;
