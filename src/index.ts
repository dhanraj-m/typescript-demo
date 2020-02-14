interface Student {
    id: string;
    age: number;
}

interface Employee {
    companyId: string;
}

// Optional Chaining
const students1: Student[] = [
    { id: "ENL01", age: 20 },
    { id: "ENL02", age: 25 },
    { id: "ENL03", age: 27 },
    { id: "ENL04", age: 10 }
];



function add(a, b) {
    return a + b;
}
console.log(add("1", 2));
