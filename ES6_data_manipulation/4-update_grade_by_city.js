export default function updateStudentGradeByCity(students, city, newGrades) {
  //filter students by city
  const filteredStudents = students.filter(students => students.location === city)
  //map through filtered students and update their grades
    .map(students => {
      students.grade = newGrades.grade;
      return students;
    });
  return filteredStudents;
}
