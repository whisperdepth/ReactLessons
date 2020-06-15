import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  setTitle = (colorText) => {
    if (!colorText) {
      return this.setState({
        title: (this.state.title = null),
      });
    }
    this.setState({
      title: (this.state.title = colorText),
    });
  };

  render() {
    return (
      <>
        <div className='picker__title'>{this.state.title}</div>
        <div>
          <button
            onMouseOver={() => this.setTitle('Coral')}
            onMouseOut={() => this.setTitle()}
            className='picker__button picker__button_coral'
          ></button>
          <button
            onMouseOver={() => this.setTitle('Aqua')}
            onMouseOut={() => this.setTitle()}
            className='picker__button picker__button_aqua'
          ></button>
          <button
            onMouseOver={() => this.setTitle('Bisque')}
            onMouseOut={() => this.setTitle()}
            className='picker__button picker__button_bisque'
          ></button>
        </div>
      </>
    );
  }
}

export default ColorPicker;
