import { createContext, useEffect, useState } from "react";
import { getStudentFinalData } from "../utils/fetch-contacts.utils";

const studentsDefault = {
  students: [],
  setStudents: () => {},
};

export const StudentsContext = createContext(studentsDefault);

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(null);
  const getStudents = async () => {
    const students = await getStudentFinalData();
    setStudents(students);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const value = { students, setStudents };

  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
};
