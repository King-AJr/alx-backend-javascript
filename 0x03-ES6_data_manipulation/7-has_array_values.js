export default function hasValuesFromArray(set, array) {
	let Status = true;
	array.forEach((element) => {
		if (!set.has(element)) {
			Status = false;
		}
	});
	return Status;
}
