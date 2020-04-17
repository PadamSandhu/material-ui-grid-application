import React from 'react';
import QueryBuilder from 'react-querybuilder';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age' },
  { name: 'address', label: 'Address' },
  { name: 'phone', label: 'Phone' },
  { name: 'email', label: 'Email' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'isDev', label: 'Is a Developer?', value: false },
];

export const ReactQueryEx = () => {
  return (
    <>
      <QueryBuilder
        fields={fields}
        onQueryChange={(query) => console.log(query)}
      />
    </>
  );
};
