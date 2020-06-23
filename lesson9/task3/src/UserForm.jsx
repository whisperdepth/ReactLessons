import React from 'react';

class UserForm extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this.formRef));
    this.props.onSubmit(formData);

  };

  setRef = (node) => {
    this.formRef = node
  }

  render() {
    return (
      <form ref={this.setRef} className='login-form' onSubmit={this.onSubmit}>
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
            onChange={this.onChange}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            onChange={this.onChange}
            name='occupation'
            className='form-input'
          >
            <option>New York</option>
            <option>London</option>
            <option>Sidney</option>
            <option>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
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
