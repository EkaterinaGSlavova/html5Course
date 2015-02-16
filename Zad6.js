/* Class Declaration */
function Student(f, l, c, g) {
	this.firstName = f;
	this.lastName = l;
	this.className = c;
	this.grades = g;
}

/* Arrays with student objects and names of classes */
var students = [];
var classesNames = [];

/* Add a student */
function addStudent(fName, lName, clName, gr) {
	students.push(new Student (fName, lName, clName, gr));
	console.log('Added student');
}

/* Delete a student */
function deleteStudent(n) {
	students.splice(n, 1);
	console.log('Deleted student ' + n);
}

/* Calculating the average grades of student */
function averageGrades(object) {
	var sumStudent = 0, gradesNumber = object.grades.length;
	for (i = 0; i < gradesNumber; i++) {
		sumStudent = sumStudent + object.grades[i];
	}
	return parseFloat((sumStudent/gradesNumber).toFixed(2));
}

/* Add a class */
function addClass(className) {
	classesNames.push(className);
	console.log('Added class name ' + className);
}

/* Delete a class */
function deleteClass(className) {
	classesNames.splice(classesNames.indexOf(className), 1);
	console.log('Deleted class name ' + className);
}

/* Calculating the average grades of a class */
function averageClass(className) {
	var sumClass = 0;
	
	var classmates = [];
	for (j = 0; j < students.length; j++) {
		if (students[j].className === className)
			classmates.push(students[j]); 
	}

	for (j = 0; j < classmates.length; j++) {
		sumClass = sumClass + averageGrades(classmates[j]);
	}
	return parseFloat((sumClass/classmates.length).toFixed(2));
}

/* Create objects */
addStudent('Adrian', 'Batakliev', '1a', [6, 5, 5]);
addStudent('Boiko', 'Borisov', '2a', [2, 3, 4]);
addStudent('Vezhdi', 'Rashidov', '1a', [4, 5, 6]);
addStudent('Georgi', 'Parvanov', '2a', [4, 6, 6]);
addStudent('Dimitar', 'Dreharov', '1a', [6, 4, 6]);
addStudent('Ekaterina', 'Slavova', '1a', [6, 3, 6]);

console.log('Average grade for student 1: '+averageGrades(students[1]));
console.log('Average grade for student 4: '+averageGrades(students[3]));

addClass('1a');
addClass('2a');

console.log('Average Class grades for 1a: ' + averageClass('1a'));
console.log('Average Class grades for 2a: ' + averageClass('2a'));

deleteClass('1a');