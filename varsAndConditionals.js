/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

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