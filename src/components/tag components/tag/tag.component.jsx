import "./tag.styles.css";

const Tag = ({ tagText }) => {
  return (
    <div>
      <div className="tag">{tagText}</div>
    </div>
  );
};

export default Tag;
