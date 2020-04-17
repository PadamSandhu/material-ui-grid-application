import React, { useState } from 'react';

import QueryBuilder, { formatQuery } from 'react-querybuilder';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age' },
];

const rules = {
  id: 'g-535g_rGwUALImuI596NNO',
  rules: [
    {
      id: 'r-OTu1FibS_5B7nVD3z2IZB',
      field: 'firstName',
      value: '',
      operator: 'notNull',
    },
    {
      id: 'r-YcBYRqUwB9V9Lm8e4Uze7',
      field: 'lastName',
      value: '',
      operator: 'notNull',
    },
    {
      id: 'r-DvOxPneXyv7ixBCL6OOK6',
      field: 'age',
      value: '18',
      operator: '>=',
    },
  ],
  combinator: 'and',
  not: false,
};

export const ReactQueryEx = () => {
  const [query, setQuery] = useState({ ...rules });
  return (
    <div
      style={{
        margin: '100px',
      }}
    >
      <h2> Set Query Rules</h2>
      <QueryBuilder
        fields={fields}
        query={rules}
        onQueryChange={(query) => setQuery(query)}
      />

      <div>
        <h2> Create a Query based on Above Criteria </h2>
        <pre>{formatQuery(query, 'json')}</pre>
      </div>
    </div>
  );
};
