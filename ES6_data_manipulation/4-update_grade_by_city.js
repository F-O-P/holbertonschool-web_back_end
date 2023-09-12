export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(students => students.location === city);
  return filteredStudents
    .map((students) => {
      const regrade = newGrades.find((newGrades) => newGrades.studentId === students.id);
      const grade = regrade ? regrade.grade : 'N/A';
      return { ...students, grade };
    });
}
