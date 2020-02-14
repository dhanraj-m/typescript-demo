import { data, students, teachers } from "./data";
import { callbackify } from "util";

const allstudents = () => {
    return students;
}

// get students by city
const getStudents = () => {
    const filterStudents = students.filter(student => student.city == "Hyderabad")
    console.log(filterStudents)
    return filterStudents;
}


let getTeachers  = data.map(person => {
    if(person.type === "teacher"){
        return true;
    }
    else {
        return false;
    }
})

const notifications = () => {
    if(data.length > 0){
        //callbackfunction()
    }
    return;
}

const openNotification = (id) => {
    if(id){
        /** 
         * 
         * your logic is here
        * */ 
    }
}




