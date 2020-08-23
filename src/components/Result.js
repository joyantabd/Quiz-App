import React from 'react';

const Result = ({score,playAgain}) =>(
    <div className="score-board">
        <div className="score">Your Score {score} / 5 </div>
        <button className="playBtn" onClick={playAgain}>Play Again !! </button>
    </div>
);

export default Result;