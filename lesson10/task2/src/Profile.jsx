/* eslint-disable camelcase */
import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, onChange }) => {
 
  return (
    <div className='column'>
        <UserForm userData={userData} onChange={onChange} />
    </div>
  );
};

export default Profile;