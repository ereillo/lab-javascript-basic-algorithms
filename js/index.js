// Iteration 1: Names and Input

let hacker1 = "Evelio"
let hacker2 = "Daniel"
console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

let characters1 = hacker1.length
let characters2 = hacker2.length

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let result = " ";
let result2= " "

for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result)

for (let i = hacker2.length -1; i >= 0; i--) {
    result2 += hacker2[i] + " "
}

console.log(result2)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }