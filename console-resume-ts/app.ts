const myName: string = "Reagan";
const myCareer: string = "Software Dev";
const myDescription: string = "I like to code and problem solve!";

console.log(`Name: ${myName.toUpperCase()}`);
console.log(`Career: ${myCareer}`);
console.log(`Description: ${myDescription}`);

console.log('');

console.log(`My name is ${myName.toUpperCase()} and I'm a ${myCareer} and I'm a ${myDescription}`)

console.log('');

const interestArray: string[] = ['Drumming', 'Reading', 'Touring', 'Eating'];
console.log('My Interests: ');

for (let i: number = 0; i < interestArray.length; i++) {
    console.log(`* ${interestArray[i]}`);
}

interface About {
    jobTitle: string;
    companyTitle: string;
    jobDescription: string;
}

console.log('')

let myPrevExperienceArray: About[] = [
    {
        jobTitle: "Crew Member",
        companyTitle: "Trader Joes",
        jobDescription: "Annoyed Customers"

    },
    {
        jobTitle: "Worker",
        companyTitle: "Work Inc",
        jobDescription: "Worked at a job"

    },
    {
        jobTitle: "Just a Guy",
        companyTitle: "Cool Guy Stuff",
        jobDescription: "Did cool stuff"

    }
]
console.log('My Previous Experience: ')

for (const index of myPrevExperienceArray) {
    console.log(`* ${index.jobTitle} at ${index.companyTitle} - ${index.jobDescription}`);
}

console.log('');

console.log('My Skills: ');

const mySkillsArr: string[] = ['Drumming', 'Driving', 'Reading', 'Cooking'];

for(let i: number = 0; i < mySkillsArr.length; i++) {
    displaySkill(mySkillsArr[i], true);
}
    

function displaySkill(skillName: string, isCool: boolean){
    if(isCool){
        console.log(`* Bam: ${skillName}`);
    } else {
        console.log(skillName);
    }
}









