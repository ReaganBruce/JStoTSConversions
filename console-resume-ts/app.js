"use strict";
var myName = "Reagan";
var myCareer = "Software Dev";
var myDescription = "I like to code and problem solve!";
console.log("Name: " + myName.toUpperCase());
console.log("Career: " + myCareer);
console.log("Description: " + myDescription);
console.log('');
console.log("My name is " + myName.toUpperCase() + " and I'm a " + myCareer + " and I'm a " + myDescription);
console.log('');
var interestArray = ['Drumming', 'Reading', 'Touring', 'Eating'];
console.log('My Interests: ');
for (var i = 0; i < interestArray.length; i++) {
    console.log("* " + interestArray[i]);
}
console.log('');
var myPrevExperienceArray = [
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
];
console.log('My Previous Experience: ');
for (var _i = 0, myPrevExperienceArray_1 = myPrevExperienceArray; _i < myPrevExperienceArray_1.length; _i++) {
    var index = myPrevExperienceArray_1[_i];
    console.log("* " + index.jobTitle + " at " + index.companyTitle + " - " + index.jobDescription);
}
console.log('');
console.log('My Skills: ');
var mySkillsArr = ['Drumming', 'Driving', 'Reading', 'Cooking'];
for (var i = 0; i < mySkillsArr.length; i++) {
    displaySkill(mySkillsArr[i], true);
}
function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log("* Bam: " + skillName);
    }
    else {
        console.log(skillName);
    }
}
