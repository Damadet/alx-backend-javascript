export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list) || !Array.isArray(newGrades)) {
    return [];
  }
  const newList = list.filter((stud) => stud.location === city).map((stud) => {
    const item2 = newGrades.find((stud2) => stud.id === stud2.studentId);
    return { ...stud, grade: item2 ? item2.grade : 'N/A' };
  });
  return newList;
}
