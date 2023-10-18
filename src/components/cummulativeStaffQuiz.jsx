import React from "react";
import './staffQuiz.css';

export default function CummulativeStaffQuiz({
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
  startStaffQuiz,
  startFretboardQuiz,
  viewScoreText,
  setViewScoreText,
  startCummulativeStaffQuiz,
  startCummulativeFretboardQuiz,
  handleViewScoreHover,
  handleViewScoreLeave
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
          <div className="staffquiz">
          <button onClick={startCummulativeStaffQuiz}>Staff</button>
  <button onClick={startCummulativeFretboardQuiz}>Fretboard</button>
  <button onClick={startStaffQuiz}>Level 2 Only</button>
  <div class="relative-container">
    <div class="dropdown dropdown1">
      <p>Hint?</p>
      <div class="dropdown-content">
        <img className="hint" src={questions[currentQuestion].answerHint} />
        <div class="desc"></div>
      </div>
    </div>
    <div>
      <img className="staff" src={questions[currentQuestion].questionImage} alt="Question" />
    </div>
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
