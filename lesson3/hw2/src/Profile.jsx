import React from 'react';
import getBirthDate from './getBirthDate.js';

const Profile = (props) => {
  return (
    <>
      <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className='profile__birth'>{`Was born ${getBirthDate(props.userData.birthDate)} in ${
        props.userData.birthPlace
      }`}</div>
    </>
  );
};

export default Profile;
