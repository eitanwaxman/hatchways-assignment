import "./search-bar.styles.css";
const SeachBar = ({ onChangeHandler, placeholderText }) => {
  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder={placeholderText}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      ></input>
    </div>
  );
};

export default SeachBar;
