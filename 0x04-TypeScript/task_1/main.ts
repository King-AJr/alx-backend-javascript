interface Student {
    firstName: String,
    lastName: String,
    age: Number,
    location: String
}

const Student1 : Student = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    location: "Port Harcourt"
}

const Student2 : Student = {
    firstName: "James",
    lastName: "Doe",
    age: 26,
    location: "Port Harcourt"
}

const studentList: Array<Student> = [Student1, Student2]

console.log(Student1)