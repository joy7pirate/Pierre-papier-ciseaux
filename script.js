let humainscore=0
let machinescore=0

// le choix de l'utilisateur
function gethumainchoice(){
    const choixhumain = ["pierre","papier","ciseaux"]

let popup = prompt("donnez votre choix entre pierre, papier et ciseaux")
if(choixhumain.includes(popup) ){
 console.log("on commence")
return popup
 } else{
       console.log("faite un choix entre pierre papier ciseaux")
  }
}
console.log(gethumainchoice())



function getcomputerchoice(){
    const choixmachine = ["pierre","papier","ciseaux"]
    // Math.randdom genere des nbre decimale entre [0,1[
    // Math.floor arrondi au le nombre a virgule de Math.random() a l'entier < le plus proche
    // choixmachine.length nous donne la taille du tableau 
    const randomindex = Math.floor(Math.random()*choixmachine.length)
    return choixmachine[randomindex];


}
console.log(getcomputerchoice());
// console.log(popup)




