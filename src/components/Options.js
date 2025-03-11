export default function Options({ question }) {
  <div className="options">
    {question.options.map((option) => (
      <button className="btn btn-option" key={option}>
        {option}
      </button>
    ))}
  </div>;
}
