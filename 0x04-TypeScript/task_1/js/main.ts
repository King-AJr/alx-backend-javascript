interface Teacher {
    readonly firstName: String,
    readonly lastName: String,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: String,
    [propName: string]: any
}
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string) : string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    const last: string = firstName[0]
    return `${last}. ${lastName}`
}

interface StudentClass {
    constructor(firstName: string, lastName: string);
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor( firstName: string, lastName: string) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }
}