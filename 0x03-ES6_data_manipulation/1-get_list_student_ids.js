export default function getListStudentIds (array) {
	let newArray = [];
	if (typeof(array) === 'object') {
		newArray = array.map((element) => {
			return element.id;
		});
	}
	return newArray;
}
