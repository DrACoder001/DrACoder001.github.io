var stemclass = "Technology";
let myName = "Dr. A";

console.log(`This code was written in the STEM PREP ${stemclass} class`);

alert(`This code was written in the STEM PREP ${stemclass} class by ${myName}`);

var name = prompt("Hello, what is your name?");
var school = prompt("What school do you attend? ");
var grade = prompt("What grade are you in? ");

document.getElementById("name").innerHTML = "Name: <b>" + name + "</b>";
document.getElementById("school").innerHTML = "School: <b>" + school + "</b>";
document.getElementById("grade").innerHTML = "Grade: <b>" + grade + "</b>";
