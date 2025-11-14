// constraint ==> strict rules maintain types

type Student = { id: number; name: string; class: string; dateOfBirth: string };
// { id: number; name: string } can be use as type Student

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level Web Development",
    ...studentInfo,
  };
};
const student1 = {
  id: 123,
  name: "Jaher",
  class: "ten",
  dateOfBirth: "10 Jan 2008",
  hasLaptop: true,
};
const result1 = addStudentToCourse(student1);
console.log(result1);
