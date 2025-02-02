import React from 'react';
import sublinks from './data';
import { useGlobalContext } from './Context';

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            className='nav-link'
            key={pageId}
            onMouseEnter={() => setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
