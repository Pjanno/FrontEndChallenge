import React from 'react';
import './App.css';
import { PlanetaInfo } from './painel-planetas';

function App() {
  return (
    //Ah sim, então é aqui que a magia do react ocorre...
    <div className="App">
      <header className="App-header">
        <p>Star Wars: Pseudosith Game.</p>
          <PlanetaInfo/>
        <h6>I know you have read "pseudoshit" instead of the right sentence...</h6>
      </header>
    </div>
  );
}

export default App;
