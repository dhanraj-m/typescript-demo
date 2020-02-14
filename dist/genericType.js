"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Helpers_1 = require("./Helpers");
const students = [
    { name: "raj", age: 22, city: "Hyderabad", yearOfJoining: 1995 },
    { name: "mike", age: 32, city: "CA", yearOfJoining: 1990 },
    { name: "heller", age: 26, city: "Romania", yearOfJoining: 2008 },
    { name: "sarah", age: 19, city: "LA", yearOfJoining: 2015 }
];
const teachers = [
    { name: "danial", experience: 12, city: "Vegas", yearOfJoining: 1995 },
    { name: "eva", experience: 6, city: "CA", yearOfJoining: 1990 },
    { name: "hanna", experience: 8, city: "Romania", yearOfJoining: 2008 },
    { name: "sarah", experience: 2, city: "LA", yearOfJoining: 2015 }
];
const getStudentsByJoinedDate = students.sort(Helpers_1.Helpers.sort);
console.log(getStudentsByJoinedDate);
//# sourceMappingURL=GenericType.js.map