import React from 'react';
import UserDataFetchingComponent from './UserDataFetchingComponent';

const UserProfile = () => {
  const endpoint = 'http://localhost:5000/api/user';

  return (
    <div>
      <h1>User Profile</h1>
      <UserDataFetchingComponent endpoint={endpoint} />
    </div>
  );
};

export default UserProfile;
