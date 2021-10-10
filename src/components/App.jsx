import React, { useState } from "react";
import PropTypes from 'prop-types';

import calculateWinner from "./CalculateWinner/calculateWinner";
import Square from "./Square/Square";
import "./styles.css";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (i) => {
    const historyArray = history.slice(0, stepNumber + 1);
    const current = historyArray[history.length - 1];
    const squaresCurrent = current.squares.slice();
    if (calculateWinner(squaresCurrent) || squaresCurrent[i]) {
      return;
    }
    squaresCurrent[i] = xIsNext ? "X" : "O";

    setHistory(
      historyArray.concat([
        {
          squares: squaresCurrent,
        },
      ]),
    );
    setStepNumber(historyArray.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const historyArray = history;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = historyArray.map((step, move) => {
    const desc = move ? "move to #" + move : "clean field";
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner" + winner;
  } else {
    status = "next step: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default App;

Board.propTypes = {
  squares: PropTypes.arrayOf.isRequired,
  onClick: PropTypes.func.isRequired,
};
