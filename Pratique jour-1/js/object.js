const user = {
    nom:"Junior",
    genre : "Homme",
    age: 22
}

//accéder à la propriété de l'objet

console.log(user.nom)
console.log(user.genre)
console.log(user.age)
console.log(user['age'])

//vérifier si "profession" est dans user
console.log("profession" in user)

//ajouter profession dans user
user.profession ="programmer"

console.log(user.profession)

//parcourir les propriiété dans l'objet

for (let i in user) {
    console.log(i+ ":"+user[i])
}

const user2 = {...user}

console.log(user2)

user2.genre = "Femme"
console.log(user)


//another object

const pays = [
    {nom: "Jamaïque", capital: "Kingston"},
    {nom: "RDC", capital: "Kinshasa"},
    {nom: "RPA", capital: "Brazzaville"},
    {nom: "Cote D'Ivoire", capital: "abidjan"},
    {nom: "Chine", capital: "pekin"},
    {nom: "Gabon", capital: "Libreville"},
    {nom: "Panama", capital: "Panama city"},
    {nom: "Belgique", capital: "Bruxelle"},
    {nom: "Angola", capital: "Luanda"},
]

const filter = pays.filter(data => data.nom.includes("B"))
filter.map(data => console.log("la capital de "+data.nom+"est"+data.capital))

//pays.map(data => console.log("la capital de "+data.nom+ " est "+data.capital))
//const search = pays.find(data => data.nom == "Gabon");
//console.log(search);    

