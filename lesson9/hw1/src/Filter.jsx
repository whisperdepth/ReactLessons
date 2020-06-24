import  React from 'react';

const Filter = ({ filterText, count, onChange }) => {

    return (
        <div className="filter">
            <span className='filter__count'>{count}</span>
            <input value={filterText} onChange={onChange} className='filter__text'/>
        </div>
    )
}

export default Filter;