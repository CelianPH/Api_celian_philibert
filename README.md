# Api_celian_philibert

spread operator est un opérateur de syntaxe qui permet de "décomposer" des expressions en éléments individuels. Cela permet de simplifier le code et d'améliorer la lisibilité.

il utilise trois points (...) pour décomposer les éléments d'une expression. Voici la syntaxe générale utilisée: ...expression

Exemple: Avec des tableaux

const array1 = [1,2,3]; const array2 = [4,5,6];

const spreadoperatorArray = [...array1,...array2]; //spreadoperatorArray est maintenant [1,2,3,4,5,6] const spreadoperatorArray2 = [...array1,4]; //spreadoperatorArray2 est maintenant [1,2,3,4]

Exemple: Avec des objets

const object1 = {a:1,b:2}; const object2 = {c:3,d:4};

const spreadoperatorObject = {...object1,...object2}; // spreadoperatorObject est maintenant {a:1,b:2,c:3,d:4}

Exemple: Avec les fonctions

function myFunction(x, y, z) { console.log(x, y, z); }

const args = [0, 1, 2];

myFunction(...args); // affiche "0 1 2" dans la console

rest operator:

rest operator est une syntaxe qui permet de regrouper un nombre variable d'arguments dans une fonction sous la forme d'un tableau. Cela permet de simplifier le code et d'améliorer la lisibilité.

il utilise trois points (...) suivi d'un nom de variable pour regrouper les arguments d'une fonction. Voici la syntaxe générale utilisée: function myFunction(param1,param2,...restParams) {

}

Exemple: Avec des fonctions function maFonction(param1, param2, ...restParams) { console.log(param1); console.log(param2); console.log(restParams); // affiche un tableau contenant les arguments restants }

maFonction(1, 2, 3, 4, 5);

// restParams affiche "[3, 4, 5]" dans la console