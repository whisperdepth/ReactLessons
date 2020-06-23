import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  search = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form onSubmit={this.search} className='search'>
        <input
          value={this.state.value}
          onChange={this.onChange}
          type='text'
          className='search__input'
        />
        <button className='search__button'>Search</button>
      </form>
    );
  }
}

export default Search;
