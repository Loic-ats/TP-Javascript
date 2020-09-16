console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

 function additionner(nb1,nb2) {
    return nb1 + nb2;
}

resultat1 = additionner(nombre1,nombre2);

console.log("resultat1 = " + resultat1);

var somme = function additionnner(nb1, nb2){return nb1 + nb2};

var resultat2 = somme (nombre1,nombre2);
console.log("resultat2 = " + resultat2);

function multiple(nb1,nb2) { 
    return nb1 * nb2;
}

var multiplication = multiple (nombre1, nombre2);
resultat3 = multiplication;
console.log ("resultat3 = " + multiplication);

function afficherOperation(nomOperation, operation, nb1, nb2) {
    return nomOperation + '(' + nb1  +',' + nb2 + ')' + '=' + operation; 
}

var resultat4 = afficherOperation("somme", somme(20, 40),20,40);
console.log (resultat4);

var resultat5 = afficherOperation("multiplication", multiple(10, 20),10,20);
console.log (resultat5);

var soustraction = function soustraction(nb1, nb2) {return nb1-nb2}; 

var resultat6 = afficherOperation("soustraction", soustraction(15,5),15,5);
console.log (resultat6);