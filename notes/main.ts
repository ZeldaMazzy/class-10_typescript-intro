//Return types
const addNumbers = (): number => {
    let firstNumber: number = 2;
    let secondNumber: number = 4;

    return firstNumber + secondNumber;
}

console.log(addNumbers())

//Types as arguments
function multiplyTwoNumbers(firstNumber: number, secondNumber: number, customMessage: string): void {
    const product: number = firstNumber * secondNumber;
    const message: string = 
        `The product of ${firstNumber} and ${secondNumber} is ${product}`;

    console.log(message);
    console.log(customMessage);
}

multiplyTwoNumbers(3, 8, "You're doing great today! Keep at it.");
multiplyTwoNumbers(3, 8, "12")

const myList: number[] = [1, 2, 3, 4, 5, 6]
const myNameList: string[] = ["Poe", "Rey", "Chewie", "3"]
const myBooleans: boolean[] = [true, false, true, false]

//type coersion / inference
let myFavoriteNumber = 17;
//myFavoriteNumber = "seventeen" <- this gives you an error

let myLeastFavoriteNumber: any = 5;
myLeastFavoriteNumber = "five"

let aNumber: number | string = 42;
aNumber = "forty-two"

//Custom Types!!!!!!!!!
type Person = {
    name: string,
    age: number,
    personality: string,
    isReligious: boolean
}

let confucious: Person = {
    name: "Confucious",
    age: 50,
    personality: "chill",
    isReligious: true
}

function tellMeAboutAPerson(person: Person): void {
    const isReligious: string = 
        person.isReligious ? "religious" : "not religious";

    const message: string = `${person.name} is ${person.age} years old. They are very ${person.personality} and ${isReligious}`

    console.log(message);
}

tellMeAboutAPerson(confucious);

//generics
function printToConsole<T>(message: T): T {
    console.log(message);
    return message;
}

printToConsole<string>("Hello")

//classes and interfaces
class Student implements IStudent {
    constructor(public name: string, public year: number, public major: string, public hasGraduated: boolean) {}

    displayHasGraduated(): void {
        let message = "";
        if(this.hasGraduated) message = "This student has graduated."
        else message = "This student has not graduated."

        console.log(message);
    };
}

interface IStudent {
    name: string;
    year: number;
    major: string;
    hasGraduated: boolean;

    displayHasGraduated(): void
}

class Employee implements IEmployee {
    constructor(
        public salary: number, 
        public name: string,
        public employeeId: number
    ){}

    public getPrivileges(): string{
        return "Not an Admin"
    }
}

class Admin extends Employee implements IEmployee {
    public getPrivileges(): string{
        return "Admin";
    }
}

class Manager extends Employee implements IEmployee {
    public getPrivileges(): string{
        return "Manager, but not Admin";
    }
}

interface IEmployee {
    salary: number;
    name: string;
    employeeId: number

    getPrivileges(): string;
}

let employeeOne: IEmployee = new Employee(12345, "Jeff", 1234);
let adminOne: IEmployee = new Admin(12345, "Geoff", 4321);
let managerOne: IEmployee = new Manager(12345, "Djeph", 1324);

console.log(employeeOne.getPrivileges())
console.log(adminOne.getPrivileges())
console.log(managerOne.getPrivileges())