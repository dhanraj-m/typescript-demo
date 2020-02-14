interface Student {
    id: string;
    age: number;
}

interface Employee {
    companyId: string;
}

// Optional Chaining
const students: Student[] = [
    { id: "ENL01", age: 20 },
    { id: "ENL02", age: 25 },
    { id: "ENL03", age: 27 },
    { id: "ENL04", age: 10 }
];
const studentFound: Student | undefined = students.find(
    student => student.id === "ENL01"
);

console.log(studentFound?.age);

// Nullish Coalescing

const newStudentFound: Student | undefined = students.find(
    student => student.id === "ENL02"
);
const newStudent: Student | undefined = studentFound ?? newStudentFound;

// const newStudent = (studentFound !== null && studnetFound !== undefined) ? studentFound : newStudentFound;

console.log(newStudent);

// Intersection Types

type Person = Student & Employee;

const person: Person = {
    id: "ENL01",
    age: 25,
    companyId: "ENL"
};

console.log(person.age);

// Union types
type CarCompany =
    | "VolksWagon"
    | "Mercedes"
    | "Tata"
    | "Mahindra"
    | "Maruti"
    | "Toyota";

type TruckCompany = "AshokLeyland" | "BharatBenz" | "Tata";

type VehicleCompany = CarCompany | TruckCompany;

const getVehicleCompany = (): VehicleCompany => "VolksWagon";
console.log(getVehicleCompany());

// Type assertion
// Using as keyword

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const asExample: any = 111;
// const asExampleToNumber = asExample as number;
// console.log(asExampleToNumber);

type VehicleCompanyExcludes = Exclude<VehicleCompany, TruckCompany>;

const getCarCompanies = (carCompanies: CarCompany): VehicleCompanyExcludes =>
    carCompanies as VehicleCompanyExcludes;
console.log(getCarCompanies("Mahindra"));

// Type Predicates

const getCarCompany = (
    carCompany: CarCompany | TruckCompany
): carCompany is CarCompany => carCompany === "AshokLeyland";
console.log(getCarCompany("Mahindra"));
