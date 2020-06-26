/* eslint-disable no-unused-expressions */
import React from 'react';

class Expand extends React.Component {

  state = {
    showContent: false,
  };

  handleToggle = () => {
    this.state.showContent
      ? this.setState({ showContent: false })
      : this.setState({ showContent: true });
  };

  render(){
    let { title, children } = this.props;
    if(!this.state.showContent){
      children = null;
    }
    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button onClick={this.handleToggle} className='expand__toggle-btn'>
            {
              this.state.showContent
                ?<i className='fas fa-chevron-up'></i>
                :<i className='fas fa-chevron-down'></i>
            }
          </button>
        </div>
        <div className='expand__content'>{children}</div>
      </div>
    );
  }
  
};

export default Expand;