"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const allstudents = () => {
    return data_1.students;
};
const getStudents = () => {
    const filterStudents = data_1.students.filter(student => student.city == "Hyderabad");
    console.log(filterStudents);
    return filterStudents;
};
getStudents();
//# sourceMappingURL=PRExample.js.map