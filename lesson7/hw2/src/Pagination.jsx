import React from 'react';

const Pagination = (props) => {
  const isPrevPageAvailable =
    props.itemsPerPage * props.currentPage != props.itemsPerPage;
  const isNextPageAvailable =
    props.totalItems != props.itemsPerPage * props.currentPage;

  return (
    <div className='pagination'>
      <button
        disabled={!isPrevPageAvailable}
        onClick={props.goPrev}
        className='btn'
      >
        {isPrevPageAvailable ? '←' : null}
      </button>
      <span className='pagination__page'>{props.currentPage}</span>
      <button
        disabled={!isNextPageAvailable}
        onClick={props.goNext}
        className='btn'
      >
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>
  );
};

export default Pagination;
