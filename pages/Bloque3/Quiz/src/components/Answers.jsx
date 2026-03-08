function Answers({ answers, selected, onSelect }) {
  return (
    <div className="answers">
      {answers.map((answer, index) => (
        <button
          key={index}
          className={selected === answer ? "selected" : ""}
          onClick={() => onSelect(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Answers;