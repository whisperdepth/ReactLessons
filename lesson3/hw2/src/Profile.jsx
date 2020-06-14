import React from 'react';
import ReactDOM from 'react-dom';
import getBirthDate from './getBirthDate.js';

const Profile = (props) => {
  return (
    <>
      <div className='profile__name'>{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className='profile__birth'>{`Was born ${new Date(
        props.user.birthDate
      ).getDate()} ${getBirthDate(props.user.birthDate)} in ${
        props.user.birthPlace
      }`}</div>
    </>
  );
};

const rootElement = document.querySelector('#root');

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

ReactDOM.render(<Profile user={userData} />, rootElement);

export default Profile;
