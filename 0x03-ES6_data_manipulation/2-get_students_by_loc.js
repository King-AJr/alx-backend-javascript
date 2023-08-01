export default function getStudentsByLocation(student, loc) {
	const newArray = student.filter((element) => {
		return element.location === loc;
	});
	return newArray;
}
