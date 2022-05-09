const fetchStudents = async () => {
  try {
    const studentsData = await fetch(
      "https://api.hatchways.io/assessment/students"
    );
    const { students } = await studentsData.json();
    return students;
  } catch (error) {
    console.log("error", error);
  }
};

const calculateAveragePerStudent = async (students) => {
  await students.forEach((student) => {
    const averageOfGrades = averageOfArray(student.grades);
    student.average = averageOfGrades;
    student.tags = [];
  });

  return students;
};

const averageOfArray = (array) => {
  const average = array.reduce((a, b) => Number(a) + Number(b)) / array.length;
  return average;
};

//

export const getStudentFinalData = async () => {
  const studentData = await fetchStudents();
  const studentsWithAverages = await calculateAveragePerStudent(studentData);
  return studentsWithAverages;
};
