import React, {Component} from 'react';


class Search extends Component {
  render(){
     return (
       <div className='search'>
         <h1 className='search__title'>{`Hello, ${this.props.name}. What to search for you?`}</h1>
         <div className='search__field'>
           <input className='seach__input' type='text' />
           <button className='search__button'>Search</button>
         </div>
       </div>
     );
  }
}

export default Search;
