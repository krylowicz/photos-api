import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
    mutation User($name: String!, $password: String!) {
        createUser(name: $name, password: $password) {
            _id
        }
    }
`;

const CreateUser = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [createUser] = useMutation(CREATE_USER);

  const handleNameChange = e => setName(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    createUser({ variables: {name, password} })
      .catch(e => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" type="text" onChange={handleNameChange} />
        <input placeholder="password" type="password" onChange={handlePasswordChange} />
        <button type="submit">create user</button>
      </form>
    </div>
  );
};

export default CreateUser;
