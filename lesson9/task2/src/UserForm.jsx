import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    };
  }

  onChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      return this.setState({
        [name]: checked,
      });
    }

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
  };

  render() {
    return (
      <form className='login-form' onSubmit={this.onSubmit}>
        <h1 className='form-title'>Profile</h1>
        <div className='form-control'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            className='form-input'
            type='text'
            id='name'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor='student'>
            Student
          </label>
          <input
            className='form-input'
            type='checkbox'
            id='student'
            name='student'
            value={this.state.student}
            onChange={this.onChange}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            value={this.state.occupation}
            onChange={this.onChange}
            name='occupation'
            className='form-input'
          >
            <option value='new-york'>New York</option>
            <option value='london'>London</option>
            <option value='coconut'>Sidney</option>
            <option value='mango'>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
            value={this.state.about}
            onChange={this.onChange}
            name='about'
            className='form-input'
          />
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
