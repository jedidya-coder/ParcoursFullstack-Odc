/**
 * let nom = "Gabriel";
nom = "Daniel";
let text = `Bonjour ${nom} comment 
allez vous? ça fait longtemps`;
console.log("Mon nom est " + nom);

const date_indepedndance = 1960;

let acces = true;

const fruits = ["mangue", "Avocat"];

let data = null;

let user = {
    nom: "Jean",
    age: 34,
};

let nombre = "4.7abcdefghijklmnopqrstuvwxyz";

let age = 23;

let a = "20";
let b = "30";
let c = 3.5;
let d = 4.3;
let e = 5.8678;
const mots = text.split(" ");

console.log(text.charAt);
console.log(user);

if (a > b) console.log("a est supérieur à b");
else if (a = b) console.log("a est équivalent à b")
else console.log("b est supérieur a");

let etat_civil = "célibataire";

switch (etat_civil) {
    case "marié":
        console.log ("vous êtes marié")
        break
    case "célibataire": 
        console.log ("vous êtes célibataire")
        break
    default:
        console.log ("vous êtes un divorcé")
}

for (let i=1; i<7; i++) {
    console.log ("titre de niveau" +i)
}

for (let i=6; i>0; i--) {
    console.log ("titre de niveau" +i)
}

let i=1
while (i<7) {
    console.log ("le titre de niveau" +i)
}

do {
    console.log ("le titre de niveau" +i)
}
while (i<1)

function salutation (nom){
    console.log ("Bonjour les amis")
}

salutation ("Jedidya")

function salutation (text, nom="mon cher"){
    console.log (text +""+ nom)
}

salutation ("bonjour", "Jesus")
salutation ("bonjour")



function salutation (text, nom="mon cher"){
    return text +""+ nom
}

const jesus= salutation ("bonjour", "Jesus")
    console.log (jesus)
salutation ("bonjour")

const salutation = function (text, nom="mon cher"){
    return text+""+nom
}

const salutation = (text, nom="mon cher") => {
    return text+""+nom 
}

const salutation = (text, nom="mon cher") => text+""+nom 

const addition = (a, b) => a + b;

const multiplication = (a, b) => a * b;

const carre = n => n * n;

function calcul (callback) {
    let a = prompt ("premier nombre")
    let b = prompt ("deuxième nombre")

    callback (a, b)
}

calcul (addition)

const fruits = ["orange", "mangue", "avocat"]

console.log (fruits)
 */

const fruits = ["orange", "mangue", "avocat"];

console.log (fruits);
//console.log(fruits.indexOf("orange"));
//console.log(fruits[fruits.length - 1]);
//console.log(fruits.at(-1));

console.log (fruits);

const dernier = fruits.pop();
console.log (dernier);

console.log(fruits);
fruits.push ("Pomme");

console.log(fruits)
const premier = fruits.shift()
console.log(fruits)
fruits.unshift("Baobba")
console.log(fruits)
const fruits2 = fruits.concat(["tomate", "raisin"])

console.log (fruits2);
console.log(String[fruits2])
console.log(fruits.join["*"])

for (let i = 0; i <fruits2.length; i++){
    console.log(fruits2[i])
}

let i=0 

while (i<fruits2.length) {
    console.log(fruits2[i])
    i++;
}

//parcours des indices
for (let i in fruits2){
    console.log(fruits2[i])
}

//afficher directement les données

for (let i of fruits2) {
    console.log(x)
}