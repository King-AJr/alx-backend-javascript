export default function getListStudentIds (array) {
	let newArray = [];
	if (Array.isArray(array)) {
		newArray = array.map((element) => {
			return element.id;
		});
	}
	return newArray;
}
