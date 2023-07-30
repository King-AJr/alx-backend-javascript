export default function guardrail(mathFunction) {
	let queue = []
	let message = 'Guardrail was processed';
	let result = '';
	try {
		result = mathFunction();
	} catch(error) {
		result = `Error: ${error.message}`;
	}
	queue.push(result);
	queue.push(message);
	return queue;
}
