import SignUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"
export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([SignUpUser(firstName, lastName), uploadPhoto(fileName)])
	.then((res) => {
		const result = [];
		res.forEach((element) => {
      	if (element.status === 'fulfilled') {
        	result.push({ status: `${element.status}`, value: `${element.value}` });
      	} else {
        	result.push({ status: `${element.status}`, value: `${element.reason}` });
      	}
    	});
    	return result;
		});
}
