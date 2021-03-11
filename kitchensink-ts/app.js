"use strict";
var aString = "Reagan"; //assigning a variable with type "string"
var aNumber = 50; //assigning a variable with type "number"
var addNums = 5 + 4; //assigning a variable with type "number"
var arrString = [
    "Broccoli",
    "Cauliflower",
    "Asparagus",
    "Brussel Sprouts",
    "Cucumbers"
];
for (var i = 0; i < arrString.length; i++) { //Looping through arrString
    // console.log(i)
}
function sayHello(arg) {
    alert(arg);
    return arg;
}
sayHello('Hello!');
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page");
    }
}
checkAge('Reagan', 15);
checkAge('Rebecca', 19);
checkAge('Jaje', 22);
checkAge('Dan', 25);
var people = [
    {
        name: "nice guy",
        age: 10
    },
    {
        name: "really nice guy",
        age: 12
    },
    {
        name: "extremely nice guy",
        age: 123
    },
    {
        name: "lovely guy",
        age: 37
    }
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(word) {
    console.log(word.length);
    if (word.length == 12) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
getLength("Hello World");
