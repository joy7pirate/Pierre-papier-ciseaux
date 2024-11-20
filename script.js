let humainscore=0
let machinescore=0

// le choix de l'utilisateur
function gethumainchoice(){
    const choixhumain = ["pierre","papier","ciseaux"]

let popup = prompt("donnez votre choix entre pierre, papier et ciseaux").toLowerCase()
if(choixhumain.includes(popup) ){
return popup
 } else{
       console.log("faite un choix entre pierre papier ciseaux")
       return gethumainchoice();
  }
}
//console.log(gethumainchoice())



function getcomputerchoice(){
    const choixmachine = ["pierre","papier","ciseaux"]
    // Math.randdom genere des nbre decimale entre [0,1[
    // Math.floor arrondi au le nombre a virgule de Math.random() a l'entier < le plus proche
    // choixmachine.length nous donne la taille du tableau 
    const randomindex = Math.floor(Math.random()*choixmachine.length)
    return choixmachine[randomindex];


}
//console.log(getcomputerchoice());


// logique pour jouer au jeu

function playround(humainchoice,computerchoice){

if(humainchoice === computerchoice){
    console.log("its a tie") 
}
else if ((humainchoice === "pierre" && computerchoice === "papier") ||
             (humainchoice === "papier" && computerchoice === "ciseaux") ||
             (humainchoice === "ciseaux" && computerchoice === "pierre")) {
        console.log("Vous avez perdu !");
        machinescore++;  // L'ordinateur marque un point
    }
    // Sinon, l'humain gagne
    else {
        console.log("Vous avez gagné !");
        humainscore++;  // L'humain marque un point
    } 
    
   // Afficher les scores
   console.log("Score humain: " + humainscore);
   console.log("Score machine: " + machinescore);   
     
      
}
// console.log(playround())
function playgame(){
humainscore= 0;
machinescore=0;

    for(let i=1; i<=5; i++){
        console.log(`manche${i}`);
        const humainselection= gethumainchoice()
        const computerselection = getcomputerchoice()
         playround(humainselection,computerselection)
    
    }
    console.log("score final");
     // Afficher les scores
     console.log("Score humain: " + humainscore);
     console.log("Score machine: " + machinescore);


    // Déclarer le gagnant
    if (humainscore > machinescore) {
        console.log("Félicitations ! Vous avez gagné le jeu !");
    } else if (humainscore < machinescore) {
        console.log("Désolé, l'ordinateur a gagné le jeu !");
    } else {
        console.log("C'est un match nul !");
    }
}
playgame()


