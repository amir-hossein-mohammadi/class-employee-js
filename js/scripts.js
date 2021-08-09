class Employee{
    constructor(
        fullName ,
        age , 
        nationalId ,
        employmentId ,
        grade ,
        workExperience , 
        salary ,
        retirement   
    ){
        this.fullName = fullName;
        this.age = age;
        this.nationalId = nationalId;
        this.employmentId = employmentId;
        this.grade = grade;
        this.workExperience = workExperience;
        this.salary = salary;
        this.retirement = retirement
    }

    get getFullName(){
        return this.fullName;
    }
    set setFullName(fullName){
        this.fullName = fullName;
    }

    details(){
        return this.fullName + " " + this.age + " " + this.nationalId + " " + this.employmentId + " " + this.grade + " " + this.workExperience + " " + this.salary + " " + this.retirement; 
    }
}

let employee = new Employee (
    "Amirhossein Mohammadi",
    new Date("April 18, 1995"),
    "0480669481",
    "123456789",
    "mid grade",
    new Date("july 15, 2016"),
    "$5000",
    new Date("july 15, 2046")
);

console.log(employee.details());