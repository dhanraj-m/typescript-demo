import { Student } from "./GenericType";

export const Helpers = {
    sort: (personA: Student, personB: Student): number =>
        personB.yearOfJoining - personA.yearOfJoining
};
