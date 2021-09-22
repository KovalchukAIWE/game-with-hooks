import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';
import './styles.css';

const HookedGame = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    const boardCopy = [...board]

    if(winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  function startNewGame() {
    return (
      <button className='start' onClick={() => setBoard(Array(9).fill(null))}>Clean field</button>
    )
  }

  return (
    <div className='wrapper'>
      <p>Game with hooks</p>
      { startNewGame() }
      <Board squares={board} squareClick={handleClick}/>
      <p>
        { winner ? 'winner is: ' + winner : 'next step: ' + (xIsNext ? 'X' : 'O') }
      </p>
    </div>
  );
}

export default HookedGame;
