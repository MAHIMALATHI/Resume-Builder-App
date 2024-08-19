import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDataFetchingComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  // Fetch user data
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/view');
      setUsers(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle user input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Add a new user
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.email) {
      setError('Name and email are required');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/insert', newUser);
      setNewUser({ name: '', email: '' }); // Clear input fields
      await fetchUsers(); // Refresh the user list
      setError(null); // Clear any previous errors
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle errors
  const handleError = (error) => {
    if (error.response) {
      setError(`Response Error: ${error.response.data}`);
    } else if (error.request) {
      setError('Request Error: No response received');
    } else {
      setError(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <h2>Add New User</h2>
      <input
        type="text"
        name="name"
        value={newUser.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button onClick={handleAddUser} disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>
    </div>
  );
};

export default UserDataFetchingComponent;
