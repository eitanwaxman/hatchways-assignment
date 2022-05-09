import { useState, useEffect, useContext } from "react";
import { StudentsContext } from "../../contexts/students.context";
import SeachBar from "../search bar/search-bar.component";
import StudentCard from "../student components/student card/student-card.component";
import "./students-list.styles.css";

const StudentList = () => {
  const { students } = useContext(StudentsContext);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [nameSearchInput, setNameSearchInput] = useState("");
  const [tagSearchInput, setTagSearchInput] = useState("");

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  const nameSearchInputHandler = (e) => {
    setNameSearchInput(e.target.value);
  };

  const tagSearchInputHandler = (e) => {
    setTagSearchInput(e.target.value);
  };

  useEffect(() => {
    if (students) {
      const studentFilter = [];

      students.forEach((student) => {
        const nameIncludes = () => {
          if (nameSearchInput) {
            return (
              student.firstName
                .toLowerCase()
                .includes(nameSearchInput.toLowerCase()) ||
              student.lastName
                .toLowerCase()
                .includes(nameSearchInput.toLowerCase())
            );
          } else {
            return true;
          }
        };

        const tagsInclude = () => {
          let tagIncluded = false;
          if (tagSearchInput) {
            student.tags.forEach((tag) => {
              if (tag.toLowerCase().includes(tagSearchInput.toLowerCase())) {
                tagIncluded = true;
              }
            });
            return tagIncluded;
          } else {
            return true;
          }
        };

        if (tagsInclude() && nameIncludes()) {
          studentFilter.push(student);
        }
      });
      setFilteredStudents(studentFilter);
    }
  }, [nameSearchInput, tagSearchInput]);

  return (
    <div>
      <div className="students-list-container">
        <div className="search-bars-wrapper">
          <SeachBar
            placeholderText="Search by name"
            onChangeHandler={nameSearchInputHandler}
          />
          <SeachBar
            placeholderText="Search by tag"
            onChangeHandler={tagSearchInputHandler}
          />
        </div>
        {filteredStudents &&
          filteredStudents.map(
            ({
              id,
              firstName,
              lastName,
              email,
              company,
              skill,
              average,
              pic,
            }) => (
              <StudentCard
                key={id}
                studentId={id}
                firstName={firstName}
                lastName={lastName}
                email={email}
                company={company}
                skill={skill}
                average={average}
                pic={pic}
              />
            )
          )}
      </div>
    </div>
  );
};

export default StudentList;
