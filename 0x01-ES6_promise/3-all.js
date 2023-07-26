/* eslint-disable no-console */
import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignUp() {
	return Promise.all([uploadPhoto(), createUser()])
	.then(message => console.log(message[1].firstName + " " + message[1].lastName))
	.catch(() => new Error ('SignUp system offline'))
}
