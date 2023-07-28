import SignUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"
export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([SignUpUser(firstName, lastName), uploadPhoto(fileName)])
	.then((res) => console.log(res));
}
