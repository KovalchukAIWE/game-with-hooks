import React from 'react';
import Square from './Square';
import './styles.css';

const Board = ({squares, squareClick}) => {
  return (
    <div className='board'>
      {
        squares.map((square, i) => (
          <Square 
            key={i} 
            value={square} 
            onClick={() => squareClick(i)} />
        ))
      }
    </div>
  );
}

export default Board;
