import getListStudentIds from "./1-get_list_student_ids.js";

export default function getStudentIdsSum(students) {
	const ids = getListStudentIds(students);
	const sum = ids.reduce((acc, current) => {
		return acc + current;
	});
	return sum;
}
