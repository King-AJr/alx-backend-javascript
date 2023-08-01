import getStudentsByLocation from "./2-get_students_by_loc.js";

export default function updateStudentGradeByCity(students, loc, newGrades) {
	const loc_students = getStudentsByLocation(students, loc);
	let grad = "";
	const graded_students = loc_students.map((student) => {
		const student_grade = newGrades.filter((grade) => {
			return grade.studentId === student.id;
		});
		if (student_grade.length === 0) {
			grad = "N/A";
		} else {
			grad = student_grade[0].grade;
		}
		student.grade = grad;
		return student;
	});
	return graded_students;
}
