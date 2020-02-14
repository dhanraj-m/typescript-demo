import { callbackify } from "util";
import { data, students, teachers } from "./data";


const getStudents = () => {
    return students;
}

const getStudentsByCity = () => {
    const filterStudents = students.filter(student => student.city == "Hyderabad")
    console.log(filterStudents)
    return filterStudents;
}
