import React from "react";
import './fretboardQuiz.css';

export default function CummulativeFretboardQuiz({
  questions,
  returnToMainMenu,
  currentQuestion,
  setCurrentQuestion,
  showScore,
  setShowScore,
  response,
  setResponse,
  play,
  isAnswered,
  setIsAnswered,
  setScore,
  setQuestionCount,
  percentageScore,
  setPercentageScore,
  getNextQuestion,
  handleAnswerOptionClick,
  restartQuiz,
  score,
  questionCount,
  startFretboardQuiz,
  startCummulativeStaffQuiz,
  startCummulativeFretboardQuiz,
  startStaffQuiz,
  handleViewScoreHover,
  handleViewScoreLeave,
  viewScoreText
}) {
  const question = questions[currentQuestion];

  function getScore() {
    setShowScore(true);
  }

  return (
    <div className="parent-container">
        <div
          style={{
            width: "105%",
            maxWidth: "1920px",
            minWidth: "480px",
            overflow: "hidden",
          }}
        >
          <div className="fretboardquiz">
            <button onClick={startCummulativeStaffQuiz}>Staff</button>
            <button onClick={startCummulativeFretboardQuiz}>Fretboard</button>
            <button onClick={startFretboardQuiz}>Level 2 Only</button>
            <div>
              <img
                className="fretboard"
                src={questions[currentQuestion].answerHint}
                alt="Fretboard"
              />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="answer key"
                onClick={() => {
                  handleAnswerOptionClick(answerOption.isCorrect);
                }}
                style={{
                  cursor: isAnswered ? "not-allowed" : "pointer", // Disable cursor if answered
                }}
                disabled={isAnswered} // Disable the button if answered
                key={answerOption.answerText}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="answer-section">
            <div>

            <button class="viewscore" onMouseEnter={handleViewScoreHover}
            onMouseLeave={handleViewScoreLeave}>{viewScoreText}</button>

              <button onClick={restartQuiz}>Reset Score</button>
              <div className="response-container">
                <h2 id="response"> {response} </h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
