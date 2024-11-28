const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key)  //la fonction map permet de prendre chaque élèment du tableau, faire quelque chose avec, et renvoyer le tableau modifié//
const ecran = document.querySelector('.ecran');
document.addEventListener('keydown', (e) => {  //permet d'obtenir le keycode de la touche à chaque fois qu'on appuie dessus
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {   //permet d'obtenir le keycode de la touche lorsqu'on clic dessus
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){   //on verifie si la touche saisie est inclue dans la calculatrice
        switch (valeur){
            case '8':
                ecran.textContent ="";   // permet de supprimer le contenu de l'écran lorsqu'on appuie sur C
                break;
            case '13':
                const calcul =eval(ecran.textContent); //permet d'obtenir le resultat lorsqu'on appuie sur =
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur); // permet d'obtenir l'index du keycode de la touche sur laquelle on vient d'appuyer dans le tableau listekeycode
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }

    }   

}

window.addEventListener('error', (e) => {  //on regarde le cas ou on n'écrit pas un calcul correct et la enclenche une erreur
    alert("Une erreur est survenue lors de votre calcul : "+e.message+".")
})