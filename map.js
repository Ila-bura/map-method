  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
    results.push(num *2);
} 
console.log(results)

// Using map()
const multByTwo = function(num) {
    return num *2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults)

// Simplified w/ map()
const simplified = nums.map(function(num) {
    return num *2});
console.log(simplified)

// Simplfied w/ map() + arrow function
const simplified2 = nums.map(num =>
num *2);
console.log(simplified2)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const simplifiedStudents = students.map(student => {
    return {
      id: student.id,
      name: student.name
    };
  });
  
  console.log(simplifiedStudents);

  const studentsWithAge = students.map(student => ({
    ...student,
    age: student.id === 1 ? 32 : student.id === 2 ? 26 : student.id === 3 ? 28 : 0
  }));
  
  console.log(studentsWithAge);