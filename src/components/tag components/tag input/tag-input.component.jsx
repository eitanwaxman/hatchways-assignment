import { useContext, useEffect, useState } from "react";
import { StudentsContext } from "../../../contexts/students.context";

import "./tag-input.styles.css";

const TagInput = ({ studentId }) => {
  const [input, setInput] = useState("");
  const { students, setStudents } = useContext(StudentsContext);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const tagSubmitHandler = (e) => {
    if (e.key === "Enter") {
      addTagToStudent(students);
      setInput("");
    }
  };

  const findStudentIndexById = (studentId) => {
    const index = students.findIndex((student) => student.id === studentId);
    return index;
  };

  const addTagToStudent = (students) => {
    const fullStudentList = [...students];
    const index = findStudentIndexById(studentId);
    let currentStudent = fullStudentList[index];
    currentStudent.tags.push(input);
    setStudents(fullStudentList);
  };

  return (
    <div>
      <input
        className="tag-input"
        placeholder="Add a tag"
        value={input}
        onChange={(e) => {
          inputHandler(e);
        }}
        onKeyDown={(e) => {
          tagSubmitHandler(e);
        }}
      />
    </div>
  );
};

export default TagInput;
