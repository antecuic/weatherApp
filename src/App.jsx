import React from 'react';
import Weather from './components/Weather/Weather';
import styles from './App.module.css';

const App = () => {


  return (
    <div className={styles.App}>
      <Weather/>
    </div>
  );
}

export default App;