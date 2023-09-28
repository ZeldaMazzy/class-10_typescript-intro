var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Return types
var addNumbers = function () {
    var firstNumber = 2;
    var secondNumber = 4;
    return firstNumber + secondNumber;
};
console.log(addNumbers());
//Types as arguments
function multiplyTwoNumbers(firstNumber, secondNumber, customMessage) {
    var product = firstNumber * secondNumber;
    var message = "The product of ".concat(firstNumber, " and ").concat(secondNumber, " is ").concat(product);
    console.log(message);
    console.log(customMessage);
}
multiplyTwoNumbers(3, 8, "You're doing great today! Keep at it.");
multiplyTwoNumbers(3, 8, "12");
var myList = [1, 2, 3, 4, 5, 6];
var myNameList = ["Poe", "Rey", "Chewie", "3"];
var myBooleans = [true, false, true, false];
//type coersion / inference
var myFavoriteNumber = 17;
//myFavoriteNumber = "seventeen" <- this gives you an error
var myLeastFavoriteNumber = 5;
myLeastFavoriteNumber = "five";
var aNumber = 42;
aNumber = "forty-two";
var confucious = {
    name: "Confucious",
    age: 50,
    personality: "chill",
    isReligious: true
};
function tellMeAboutAPerson(person) {
    var isReligious = person.isReligious ? "religious" : "not religious";
    var message = "".concat(person.name, " is ").concat(person.age, " years old. They are very ").concat(person.personality, " and ").concat(isReligious);
    console.log(message);
}
tellMeAboutAPerson(confucious);
//generics
function printToConsole(message) {
    console.log(message);
    return message;
}
printToConsole("Hello");
//classes and interfaces
var Student = /** @class */ (function () {
    function Student(name, year, major, hasGraduated) {
        this.name = name;
        this.year = year;
        this.major = major;
        this.hasGraduated = hasGraduated;
    }
    Student.prototype.displayHasGraduated = function () {
        var message = "";
        if (this.hasGraduated)
            message = "This student has graduated.";
        else
            message = "This student has not graduated.";
        console.log(message);
    };
    ;
    return Student;
}());
var Employee = /** @class */ (function () {
    function Employee(salary, name, employeeId) {
        this.salary = salary;
        this.name = name;
        this.employeeId = employeeId;
    }
    Employee.prototype.getPrivileges = function () {
        return "Not an Admin";
    };
    return Employee;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getPrivileges = function () {
        return "Admin";
    };
    return Admin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getPrivileges = function () {
        return "Manager, but not Admin";
    };
    return Manager;
}(Employee));
var employeeOne = new Employee(12345, "Jeff", 1234);
var adminOne = new Admin(12345, "Geoff", 4321);
var managerOne = new Manager(12345, "Djeph", 1324);
console.log(employeeOne.getPrivileges());
console.log(adminOne.getPrivileges());
console.log(managerOne.getPrivileges());
