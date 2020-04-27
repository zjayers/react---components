import React from 'react';
import useResources from './useResources'

const UserList = () => {

  const users = useResources('users');

  return (
  <ul>
    {users.map(record => (
      <li ley={record.id}>{record.name}</li>
    ))}
  </ul>
    )
}

export default UserList;