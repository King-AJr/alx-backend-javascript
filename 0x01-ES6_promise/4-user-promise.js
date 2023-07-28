export default function SignUpUser(firstName, lastName) {
  return new Promise((resolve) => resolve({
    firstName, lastName
  }));
}
