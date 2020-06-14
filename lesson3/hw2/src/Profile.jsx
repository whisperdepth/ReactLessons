import React from 'react';
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

export default Profile;
