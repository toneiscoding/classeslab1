
// make a call to db looking for "James King"


let personFromDatabase = null || "NO NAME"




let myObj ={
    name: "sar",
    age: 55,
    sayHello: () => {
        console.log("Hello!");
    }
}
myObj.sayHello();

const makePerson = (nameFromCall, ageFromCall, skillsFromCall = []) => {
    let calulatedAge = ageFromCall-5
    console.log(skillsFromCall)
    let temporaryObject = {
        firstname: nameFromCall,
        age: calulatedAge,
        skills: skillsFromCall,
        sayHello: () => {
            console.log("hello");
        }
    }
    return temporaryObject;
}
let person1 = makePerson("Geroge", 55);
let person2 = makePerson("Katy", 65, ["teaching", "cleaning", "tech"]);
let person3 = makePerson("Tom", 65, ["climbing", "cleaning", "tech"]);

// console.log(person1);
// console.log(person2);
// console.log(person3);
const changeFriend = (personToChange, newFriendName) => {
    personToChange.bestFriend = newFriendName;
}

class Person {
    constructor(nameFromCall, ageFromCall, skillsFromCall, friendFromCall = "Chase") {
        this.name = typeof nameFromCall == "string" ? nameFromCall : "No Name"
         this.age = ageFromCall;
        this.skills = skillsFromCall || [];
        this.bestFriend = friendFromCall;
    }
    static totalPeople = 12

    greet(){
        console.log("greetings!")
    }
    changeBestFriend(newFriendName) {
        this.bestFriend = newFriendName;
    }
    static listPeople(){
        console.log("we have made ", this.totalPeople, " people");
    }
}

let myPerson1 = new Person("Sarah", 27, ["js", "react", "express"], "Zarema");
let myPerson2 = new Person("Tim", 27, ["js", "react", "express"])
let myPerson3 = new Person("maria", 27)

changeFriend(myPerson1, "Aldrich")

myPerson1.changeBestFriend("Parul")
// myPerson2.changeBestFriend("JSON")





console.log(myPerson3);



class Cohort {
    constructor(instructorFromCall, locationFromCall, subjectFromCall, learnersFromCall){
        this.instructor = instructorFromCall;
        this.location = locationFromCall;
        this.subject = subjectFromCall;
        this.learners = learnersFromCall;

    }
    addLearner(newLearner) {
        this.learners.push(newLearner)
    }
    removeLearner(){

    }
    changeGrade(){

    }
}

let startingLearners48 = [
    {
        name: "will",
        grade: 76,
    },
    {
        name: "sasha",
        grade: 77,
    },
    {
        name: "Richard",
        grade: 100,
    }
]
let cohort48 = new Cohort('Chase', "Houston", "SE", startingLearners48);
cohort48.addLearner({name: "Jess", grade: 90});
console.log(cohort48);

let cohort01 = new Cohort("Chase", "Seattle", "SE", [{name: "Mariia", grade: 200}, {name: "Json", grade: 2}, {name: "toni", grade: 700}]);
cohort01.addLearner({name: "Sataport", grade: undefined})
console.log(cohort01);





class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log("vroom");
    }
}

const car1 = new Car("Ford", "F150", 1995)
const car2 = new Car("Hyundai", "Sonata", 2009)


