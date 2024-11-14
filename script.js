console.log("hello world")

function getcomputerchoice(){
    const choixmachine = ["pierre","papier","ciseaux"]
    // Math.randdom genere des nbre decimale entre [0,1[
    // Math.floor arrondi au le nombre a virgule de Math.random() a l'entier < le plus proche
    // choixmachine.length nous donne la taille du tableau 
    const randomindex = Math.floor(Math.random()*choixmachine.length)
    return choixmachine[randomindex];


}
console.log(getcomputerchoice());




