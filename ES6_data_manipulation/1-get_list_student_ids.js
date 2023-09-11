export default function getListStudentIds(studentInfo) {
  const students = [];

  if (!Array.isArray(studentInfo)) {
    return students;
  }
  return studentInfo.map((student) => student.id);
}
