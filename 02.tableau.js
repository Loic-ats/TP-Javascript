var villes = ['nantes', 'paris','saint-nazaire', 'angers', 'le mans' ];

villes.forEach(function(element, index) {
    [console.log("Ville" + index + ':' + element)];
});

var lettreADansToutesLesVille= function(element,index,villes)
{return element = element.includes('a');}

console.log ("Toutes les villes du tableau contienne un 'a'" + villes.every(lettreADansToutesLesVille));

var auMoinsUneVilleAvecUnTire= function(element,index,villes)
{return element = element.includes('-');}

console.log ("Le tableau contient au moins une ville avec un '-' " + villes.some(auMoinsUneVilleAvecUnTire));

var villesSansTiretSansEsp= function(element,index,villes)
{return element = !element.includes('-');}

console.log ("Les villes qui ne contiennent pas de tiret ou d'espace sont : " + villes.filter(villesSansTiretSansEsp));

console.table(
    
villes.filter(function(ville){
return ville.endsWith ('s');

}).map (function (ville) {
    return ville.toUpperCase();
    
}));