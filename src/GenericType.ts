import { Helpers } from "./Helpers";

export interface Student {
    name: string;
    age: number;
    city: string;
    yearOfJoining: number;
}

interface Teacher {
    name: string;
    city: string;
    experience: number;
    yearOfJoining: number;
}

const students: Student[] = [
    { name: "raj", age: 22, city: "Hyderabad", yearOfJoining: 1995 },
    { name: "mike", age: 32, city: "CA", yearOfJoining: 1990 },
    { name: "heller", age: 26, city: "Romania", yearOfJoining: 2008 },
    { name: "sarah", age: 19, city: "LA", yearOfJoining: 2015 }
];

const teachers: Teacher[] = [
    { name: "danial", experience: 12, city: "Vegas", yearOfJoining: 1995 },
    { name: "eva", experience: 6, city: "CA", yearOfJoining: 1990 },
    { name: "hanna", experience: 8, city: "Romania", yearOfJoining: 2008 },
    { name: "sarah", experience: 2, city: "LA", yearOfJoining: 2015 }
];

const getStudentsByJoinedDate = students.sort(Helpers.sort);
console.log(getStudentsByJoinedDate);
