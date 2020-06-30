import React from 'react';

class CreateTaskInput extends React.Component {

    state = { value: ''}

    handleChange = (e) => this.setState({ value: e.target.value})

    handleClick = () => this.props.onCreate(this.state.value)

    // eslint-disable-next-line class-methods-use-this
    render(){
        return (
            <div className='create-task'>
                <input 
                    value={this.state.value} 
                    className='create-task__input' 
                    type="text"
                    onChange={this.handleChange}
                />
                <button className='btn' onClick={this.handleClick}>Create</button>
            </div>        
        )
    }

    
}

export default CreateTaskInput;