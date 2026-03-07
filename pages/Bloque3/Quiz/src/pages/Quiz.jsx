import { useEffect, useState } from "react";
import Question from "../components/Question";
import Answers from "../components/Answers";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?limit=10")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  if (questions.length === 0) return <p>Loading...</p>;

  const question = questions[currentQuestion];

  const answers = [
    ...question.incorrectAnswers,
    question.correctAnswer,
  ].sort();

  function handleAnswer(answer) {
    setSelectedAnswer(answer);
  }

  function nextQuestion() {
    const newScore =
      selectedAnswer === question.correctAnswer ? score + 1 : score;

    const isLastQuestion = currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      setScore(newScore);
      setShowResult(true);
      return;
    }

    setScore(newScore);
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
  }

  if (showResult) {
    return (
      <div className="result">
        <h2>Quiz finished!</h2>
        <p>
          Your score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <Question
        question={question.question}
        number={currentQuestion + 1}
      />

      <Answers
        answers={answers}
        selected={selectedAnswer}
        onSelect={handleAnswer}
      />

      <button onClick={nextQuestion} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
}

export default Quiz;