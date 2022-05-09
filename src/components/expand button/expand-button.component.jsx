import { useState } from "react";
import { ReactComponent as PlusIcon } from "../../assests/plus-sign.svg";
import { ReactComponent as MinusIcon } from "../../assests/minus-sign.svg";
import "./expand-button.styles.css";

const ExpandButton = ({ onClickHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
    onClickHandler();
  };

  return (
    <div className="expand-button-wrapper">
      <button className="expand-button" onClick={toggleButton}>
        {isExpanded ? (
          <MinusIcon className="expand-button-icon" />
        ) : (
          <PlusIcon className="expand-button-icon" />
        )}
      </button>
    </div>
  );
};

export default ExpandButton;
