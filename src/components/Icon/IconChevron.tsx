//@ts-ignore
import React from 'react';
import PropTypes from 'prop-types';

export default function IconChevron ({ className }: {className?: string} ) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" className={className} pointerEvents={'none'}>
      <title>icon - chevron - right</title>
      <path fill="#abb0c4" d="M4.5,10l4-4-4-4-1,1,3,3-3,3Z" />
    </svg>
  );
}

IconChevron.propTypes = {
  className: PropTypes.string
};