/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 55;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log('Jon Snow is an equal match for Jamie Lannister')
}
else {
    console.log('Jamie Lannister has better attack than Jon Snow')
} 

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has ben slain')
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to `, jonSnowHealth)
}

//jon picks up a shield to add to his defense
jonSnowDefense += 25

//Jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowAttack) {
    console.log('Jon Snow has been slain')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log("Jon Snow's Health is down to ", jonSnowHealth)
}

//villager throws jon a health kit, but health can't exceed 100
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log("Jon Snow's health after the health kit is ", jonSnowHealth);

//50% chance of jon running away
let coinLandsHeads = true;

if (coinLandsHeads) {
    console.log('The fight continues')
} else {
    console.log('Jon is allowed to run away')
}

//Jamie attacks Jon 5 times
for (let i = 0; i <5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
}

console.log("Jon's Health is down to ", jonSnowHealth);

//Post-lab assignment 1:
//write logic in the for loop that detects if jon's health is zero or less, and it says he is slain, and will stop loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic you wrote for the first assignment) as a while loop
// it should behave exactly the same