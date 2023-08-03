export default function updateUniqueItems(oldMap) {
	function increment(value, key, map) {
		if (value === 1) {
			map.set(key, 100);
		}
	}
	if (oldMap instanceof Map) {
		oldMap.forEach(increment);
		return oldMap;
	}
	throw new Error('Cannot process');
}
