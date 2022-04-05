// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from 'react';
import NxWelcome from './nx-welcome';

export const App:React.FC = () => {
  return (
    <>
      <NxWelcome title="pokedex" />
      <div />
    </>
  );
}

export default App;
