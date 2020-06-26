import React from 'react';
import Dialog from './Dialog.jsx'

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => this.setState({ isOpen: false });

  showDialog = () => this.setState({ isOpen: true });

  render() {
    return (
      <div className='app'>
        <button className='btn' onClick={this.showDialog}>
          Show
        </button>
        <Dialog
          onClose={this.hideDialog}
          isOpen={this.state.isOpen}
          title='Recommendation'
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}

export default App;