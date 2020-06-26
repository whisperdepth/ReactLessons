import React from 'react';
import Dialog from './Dialog.jsx'

class App extends React.Component {
  state = {
    isOpened: false,
  };

  hideDialog = () => this.setState({ isOpened: false });

  showDialog = () => this.setState({ isOpened: true });

  render() {
    return (
      <div className='app'>
        <button className='btn' onClick={this.showDialog}>
          Show
        </button>
        <Dialog
          hideDialog={this.hideDialog}
          isOpened={this.state.isOpened}
          title='Recommendation'
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid bugs
          </p>
        </Dialog>
      </div>
    );
  }
}

export default App;