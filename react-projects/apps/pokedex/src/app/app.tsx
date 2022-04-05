// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import NxWelcome from './nx-welcome';

const DUMMY_DATA = [
  {
    id: 'FEST45',
    name: 'Apurba Ghosh',
    Role: 'Frontend Dev/ FullStack Developer',
  },
];

export const App: React.FC = () => {
  return (
    <>
      <NxWelcome title="pokedex" />
      {DUMMY_DATA.map(data => JSON.stringify(data))}
      {DUMMY_DATA.map((data) => {
        return (
          <div>
            <h3>Name: {data.name}</h3>
            <h2>ID: {data.id}</h2>
            <h1>Role: {data.Role}</h1>
          </div>
        );
      })}
      <div />
    </>
  );
};

export default App;
