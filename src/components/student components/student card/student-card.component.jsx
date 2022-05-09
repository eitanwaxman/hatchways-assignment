import { useContext, useState } from "react";
import { StudentsContext } from "../../../contexts/students.context";
import ExpandButton from "../../expand button/expand-button.component";
import Tag from "../../tag components/tag/tag.component";
import TagInput from "../../tag components/tag input/tag-input.component";
import TestScores from "../test scores/test-scores.component";
import "./student-card.styles.css";

const StudentCard = ({ studentId }) => {
  const { students } = useContext(StudentsContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentStudent = students.filter((student) => student.id === studentId);
  const { firstName, lastName, email, company, skill, average, pic, tags } =
    currentStudent[0];

  const expandTestScores = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="student-card-wrapper">
      <div className="student-card-container">
        <img className="student-card-profile-pic" src={pic} />
        <div>
          <div className="student-card-header">
            <h3 className="student-card-name">
              {firstName} {lastName}
            </h3>
          </div>
          <div className="student-card-other-details">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average}%</p>
            {isExpanded && <TestScores studentId={studentId} />}
            <div className="tags-wrapper">
              {tags &&
                tags.map((tag, index) => <Tag key={index} tagText={tag} />)}
            </div>
            <TagInput studentId={studentId} />
          </div>
        </div>
        <ExpandButton onClickHandler={expandTestScores} />
      </div>
      <hr />
    </div>
  );
};

export default StudentCard;
