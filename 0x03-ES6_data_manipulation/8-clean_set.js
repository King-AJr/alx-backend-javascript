import hasValuesFromArray from "./7-has_array_values.js";

export default function cleanSet(set, startString) {
	if (startString === undefined || startString === "") {
		return "";
	}
	let return_string = "";
	let new_string = "";
	const array = Array.from(set);
	const newArray = array.filter((element) => {
		return element.startsWith(startString);
	});
	newArray.forEach((element) => {
			new_string = element.slice(startString.length)
		if (return_string == "") {
			return_string = new_string;
			new_string = "";
		} else {
			return_string = `${return_string}-${new_string}`
			new_string = "";
		}
	});
	return return_string;
}
