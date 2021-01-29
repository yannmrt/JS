// Fonction pour le calcul d'un périmètre et l'air d'un rectangle
function surfaceRectangle() {
    var largeur;
    var longueur;
    largeur = prompt("Quelle est la largeur du rectangle ?");
    longueur = prompt("Quelle est la longueur du rectangle ?");
    alert("L'aire vaut " + longueur * largeur);
    alert("Le périmètre vaut " + 2 * (Number(longueur) + Number(largeur)));
}

// Fonction pour le calcul du rayon d'un cercle
function surfaceCercle() {
    var longueur = parseFloat(prompt("Entrez la longueur du cercle : "));
    var rayon = parseFloat(prompt("Entrez le rayon du cercle : "));
    alert("L'aire du cercle vaut " + 3.14 * (Number(longueur) * Number(longueur)) + " cm²");
    alert("Le périmètre du cercle vaut " + Number(rayon) * 2 * 3.14 + " cm");
}


// Fonction pour le calcul d'une fonction multiple
var a = 3;
var b = 2;

function multiplie(x = 8) {
    return 3 * x;
}

function affiche() {
    alert(multiplie(a));
    alert(multiplie(b));
    alert(multiplie());
}


// Fonction utilisée afin de faire une addition
var tab = [-2, 1, 4];

function addtionner(x) {
    return (x + 2);
}

function affiche2() {
    alert(addtionner(tab[tab.length - 3]));
    alert(addtionner(tab[tab.length - 1]));
}

// Fonction pour généré un tableau à 5 entrée
function boucle() {
    var tab = new Array(5);
    for (var i = 0; i < tab.length; i++) {
        tab[i] = i * i;
    }
    alert(tab);
}

// Fonction pour généré un tableau avec un nombre d'entrée défini par l'utilisateur
function boucle2() {
    var longueur = parseInt(prompt('Quelle est la longueur souhaitée du tableau?'));
    var tab = new Array();
    for (var i = 0; i < longueur; i++) {
        tab[i] = i * i;
    }
    alert(tab);
}

// Fonction pour soustraire un tableau
var tab = [-2, 1, 4];

function soustrait(x) {
    if (x >= 0) return (x - 2);
    else return "Nombre négatif";
}

function affiche3() {
    alert(soustrait(tab[tab.length - 3]));
    alert(soustrait(tab[tab.length - 1]));
}

//Jour de la semaine
function jourDeLaSemaine() {
    var aujourdhui = new Date;
    jour = aujourdhui.getDay();
    var jourFrancais;
    switch (jour) {
        case 0:
            jourFrancais = "Dimanche";
            break;
        case 1:
            jourFrancais = "Lundi";
            break;
        case 2:
            jourFrancais = "Mardi";
            break;
        case 3:
            jourFrancais = "Mercredi";
            break;
        case 4:
            jourFrancais = "Jeudi";
            break;
        case 5:
            jourFrancais = "Vendredi";
            break;
        case 6:
            jourFrancais = "Samedi";
            break;
        default:
            jourFrancais = "Jour inexistant";
            break;
    }
    alert("Nous sommes " + jourFrancais + ".");
}

//changement de couleurs 
function couleurs1() {
    document.getElementById("demo").style.color = "lime";
}

function couleurs2() {
    document.getElementById("demo").style.color = "navy";
}

function couleurs3() {
    document.getElementById("demo").style.color = "black";
}

function couleurs4() {
    document.getElementById("demo").style.color = "red";
}

//modification de texte 
const Modif = document.getElementById ("texte");
 Modif.addEventListener('click', function()
{
    Modif.style.width = "1px";
    Modif.style.marginLeft = "50%";
    Modif.style.textAlign = "center";
});

Modif.addEventListener("dblclick", function(){
    Modif.style.textAlign = "left";
    Modif.style.width = "500px";
    Modif.style.marginLeft = "0%";

});

//Echange d'image/texte
function image1() {
    document.getElementById("image").src = "Dragon_Ball.png";
  }
  function image2(){
    document.getElementById("image").src = "GTO.png";
  }
     