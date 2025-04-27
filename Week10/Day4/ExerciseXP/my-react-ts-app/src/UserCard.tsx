import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
  role?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name = "Anonymous", age = 0, role = "Guest" }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserCard;
