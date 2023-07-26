export default function SignupUser(firstName, lastName) {
  return new Promise((resolve) => resolve({
    firstName, lastName
  }));
}
