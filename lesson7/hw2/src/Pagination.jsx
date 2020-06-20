import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = itemsPerPage * (currentPage + 1) != itemsPerPage;
  const isNextPageAvailable = totalItems >= itemsPerPage * (currentPage + 1);

  return (
    <div className='pagination'>
      <button disabled={!isPrevPageAvailable} onClick={goPrev} className='btn'>
        {isPrevPageAvailable ? '←' : null}
      </button>
      <span className='pagination__page'>{currentPage + 1}</span>
      <button disabled={!isNextPageAvailable} onClick={goNext} className='btn'>
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>
  );
};

export default Pagination;
