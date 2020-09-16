var villes = ['nantes', 'paris','saint-nazaire', 'angers', 'le mans' ];

villes.forEach(function(element) {
    [console.log(element)];
});

var lettreADansToutesLesVille= function(element,index,villes)
{return element = element.includes('a');}

console.log ("Toutes les villes du tableau contienne un 'a'" + villes.every(lettreADansToutesLesVille));

var auMoinsUneVilleAvecUnTire= function(element,index,villes)
{return element = element.includes('-');}

console.log ("Le tableau contient au moins une ville avec un '-' " + villes.some(auMoinsUneVilleAvecUnTire));