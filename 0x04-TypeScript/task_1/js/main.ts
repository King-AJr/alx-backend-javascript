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