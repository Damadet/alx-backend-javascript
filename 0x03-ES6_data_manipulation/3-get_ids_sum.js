export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  const ids = list.map((stud) => stud.id);
  return ids.reduce((previousValue, currentValue) => previousValue + currentValue);
}
