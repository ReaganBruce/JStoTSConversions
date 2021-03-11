let aString: string = "Reagan"; //assigning a variable with type "string"


const aNumber: number = 50; //assigning a variable with type "number"


let addNums: number = 5 + 4; //assigning a variable with type "number"


let arrString: string[] = [ //assigning an array with the type "string[]"
"Broccoli", 
"Cauliflower", 
"Asparagus", 
"Brussel Sprouts", 
"Cucumbers"
];

for(let i: number = 0; i < arrString.length; i++){ //Looping through arrString
    // console.log(i)
}



function sayHello<T>(arg: T): T { //Using Generics <T>
    alert(arg);
    return arg;
}
sayHello<string>('Hello!')


function checkAge(name: string, age: number){
    if (age < 21){
        alert(`Sorry ${name}, you aren't old enough to view this page`)
    }
}

checkAge('Reagan', 15);
checkAge('Rebecca', 19);
checkAge('Jaje', 22);
checkAge('Dan', 25);

let people: {name: string, age: number}[] = [
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
]

for(let i: number = 0; i < people.length; i++){
    checkAge(people[i].name, people[i].age);
}

function getLength(word: string) {
    console.log(word.length);
    if(word.length == 12){
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

getLength("Hello World")






