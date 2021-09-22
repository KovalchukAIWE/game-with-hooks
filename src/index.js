import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/classGame/ClassGame';
import HookedGame from './components/hookGame/HookedGame';

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <HookedGame />
  </React.StrictMode>,
  document.getElementById('root')
);
