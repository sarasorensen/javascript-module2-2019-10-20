//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Dog (){
    this.make = "rottweiler"
}

Dog.prototype.type = function () {
    console.log("The breed is " + this.make + ".");
};

var Dog2 = new Dog();
Dog2.type();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.slice(5);

//3. Delete the last number in the array that you created above.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

let myStr = "strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

function replaceWords() {
    var text = document.body.innerHTML;
    text = text.replace(/strawberry/ig, "banana");
    text = text.replace(/strawberries/ig, "bananas");
    document.body.innerHTML = text;
}

window.onload = function () {
    replaceWords();
};

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballTeams = ["Liverpool", "ManchesterUnited", "Madrid", "Italy"];

 function replace() {

    footballTeams[0] = "volvo";
    footballTeams[1] = "toyota";
    footballTeams[2] = "tesla";
    footballTeams[3] = "bugatti";

    console.log(footballTeams);
} 

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    { name: "montana"},
    { name: "christina" },
    { name: "chris"},
];

var newPeople = people.filter(function (item){
    return item.name === "christina";
});

console.log("Filter results:", newPeople);

//7. Create a simple function that logs the date.
var today = new Date();

console.log("today's date is " + today);