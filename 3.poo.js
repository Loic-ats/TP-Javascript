function Personne(nom,prenom,pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
return "Le nom du perso est " + this.nom +" son prénom est " + this.prenom + " enfin son pseudo est " + this.pseudo
    }
  }


var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

     console.log(jules.nom);
     console.log(jules.prenom);
     console.log(jules.pseudo);

     console.log(jules.getNomComplet());

     console.log(paul.nom);
     console.log(paul.prenom);
     console.log(paul.pseudo);

     console.log(paul.getNomComplet());

    jules.pseudo = "Jules44";
    console.log(jules.getNomComplet());

   //Ajouter une propriété à Personne
console.log(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + ". " + this.nom.charAt(0) + ".";
}
console.log(jules.getInitiales());

//Objet sans fonction constructeur
var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + " " + this.prenom + ", pseudo : " + this.pseudo
    }
};

afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(numeroClient, nom, prenom, pseudo) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfo = function () {
        return this.prenom + " " + this.nom + " " + this.numeroClient;
    }
}


var steve = new Client('A01', 'Steve', 'LUCAS', 'steve44');

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());


  