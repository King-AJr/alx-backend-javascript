export default function groceriesList() {
	const grocerie = {
		Apples: 10,
    		Tomatoes: 10,
    		Pasta: 1,
    		Rice: 1,
    		Banana: 5,
	}
	const newMap = new Map();
	const key = Array.from(Object.keys(grocerie));
	key.forEach((element) => {
		newMap.set(element, grocerie[element]);
	});
	return newMap;
}
