import { useContext } from "react";
import { StudentsContext } from "../../contexts/students.context";
import "./test-scores.styles.css";

const TestScores = ({ studentId }) => {
  const { students } = useContext(StudentsContext);
  const currentStudent = students.filter((student) => student.id === studentId);
  const { grades } = currentStudent[0];
  return (
    <div className="test-scores">
      {grades &&
        grades.map((grade, index) => (
          <p className="grade-line" key={index}>
            Test {index + 1}: <span className="grade">{grade}%</span>
          </p>
        ))}
    </div>
  );
};

export default TestScores;
