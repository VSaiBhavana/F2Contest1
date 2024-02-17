let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
  { id: 4, name: "Bob",   age:"20"  , marks: 30 },
  { id: 5, name: "Alice", age:"19", marks: 75 }
];

function PrintStudentswithMap() {
    const studentsWithMarksOver50 = students.filter(student => student.marks > 50);
studentsWithMarksOver50.forEach(student => {
    console.log(`${student.name} has marks over 50 (${student.marks}).`);
});
}

function PrintStudentsbyForEach() {
    students.forEach(student => {
        if (student.marks > 50) {
            console.log(`${student.name} has marks over 50 (${student.marks}).`);
        }
    });
}

function addData() {
    const newStudent = { id: 5, name: 'Susan', age: 20, marks: 45 };
    students.push(newStudent);
    console.log("Updated Array of Students:", students);
}

function removeFailedStudent() {
    const passedStudents = students.filter(student => student.marks >= 50);
console.log("Updated Array of Students (After removing failed students):", passedStudents);
}

function concatenateArray() {
    const additionalStudents = [
        { id: 6, name: 'Tom', age: 24, marks: 55 },
        { id: 7, name: 'Emily', age: 22, marks: 70 },
        { id: 8, name: 'Chris', age: 21, marks: 65 }
    ];
    const allStudents = students.concat(additionalStudents);
    console.log("Combined Array of Students:", allStudents);
}