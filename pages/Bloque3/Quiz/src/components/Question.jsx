function Question({ question, number }) {
  return (
    <div>
      <h3>Question {number}</h3>
      <p>{question}</p>
    </div>
  );
}

export default Question;