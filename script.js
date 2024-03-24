

//objet hero 
const hero = {
      s_nom : "Link",
      n_pv : 5,
      n_attaque : 3,


      saluer(personnage){
           console.log("Salutation "+personnage.s_nom+" je suis "+this.s_nom+" !");},

      ficheDePersonnage(){
           return "Nom : "+this.s_nom+" | PdV : "+this.n_pv; },

      soin(n_soin){
           this.n_pv = this.n_pv + n_soin;},

      attaquer(ennemie){
           ennemie.n_pv -= this.n_attaque;}

          }; // FIN let hero 



  const ennemie = { 
      s_nom : "Zombie",
      n_pv : 1,
      n_attaque : 1,

      saluer(personnage){
           console.log("Salutation "+personnage.s_nom+" je suis "+this.s_nom+" !");},

      ficheDePersonnage(){
           return "Nom : "+this.s_nom+" | PdV : "+this.n_pv;},

      soin(n_soin){
           this.n_pv = this.n_pv + n_soin;},

      attaquer(ennemie){
           ennemie.n_pv-=this.n_attaque;}

  }; // FIN let ennemie 


  
//fond jaunne et rouge la bannier 
const balise= document.querySelector("h1");
balise.style.background = 'yellow';
balise.style.color='red'


//////////////////////////// PARTI  HERO // ENEMIE ////////////////////////////////////////////


function updateDisplay(){
  // le nom du  hero 
const element_hero_name = document.querySelector("#hero .name"); // va chercher html
element_hero_name .innerText = hero.s_nom;                      // on change 
  // FIN NOM HERO 

//  PV DU HERO 
const element_hero_pv = document.querySelector("#hero .pv");   // va chercher html
element_hero_pv .innerText = "PV : "+hero.n_pv;               // on change 
// FIN PV HERO

// les ATK du hero
const element_heron_attack = document.querySelector("#hero .attack");  // va chercher html
element_heron_attack .innerText = "ATK : "+hero.n_attaque;            // on change 
// FIN ATK HERO



  // le nom de l'ennemie 
const element_ennemy_name = document.querySelector("#ennemy .name"); // va chercher  html
element_ennemy_name.innerText = ennemie.s_nom;                      // on change 
// FIN DU NOM 

//  les pv de l'ennemie
const element_ennemy_pv = document.querySelector("#ennemy .pv"); // va chercher html
element_ennemy_pv.innerText = "PV : "+ennemie.n_pv;             // on change 
// FIN DES PV ENNEMIE 

// les ATK de l"ennemie 
const element_ennemy_attack = document.querySelector("#ennemy .attack"); // va chercher  html
element_ennemy_attack.innerText = "ATK : "+ennemie.n_attaque;           // on change 
// FIN DE ATK ENNEMIE

} // FIN DISPLAY





/////////////////BUTTON  PROGRAMMATION  ÉVENEMENTIELLE BUTTON   //////////////////////////////////////




// BUTTON ATK HERO 

document.querySelector("#hero .btn_attack").addEventListener("click", function () {
  hero.attaquer(ennemie);
  updateDisplay();

  const image = document.querySelector("#hero img"); // Je récupére la balise img 
  image.classList.add("attaquer"); // J'ajoute la classe attaquer à la balise img
                   
  setTimeout(() => {
    image.classList.remove("attaquer"); // Supprime l'attaque après 200 millisecondes
  }, 200);
});
// FIN BUTTON ATK HERO // 


// BOUTTON SOIN HERO // 

document.querySelector("#hero .btn_soin").addEventListener("click", function () {
  hero.soin(1);

   // Créer un élément pour le cercle de soin
   const circle = document.createElement("div");
   circle.classList.add("heal-circle");
 
   // Ajouter le cercle au DOM, juste derrière l'image de Link
   const linkImage = document.querySelector("#hero img");
   linkImage.parentNode.insertBefore(circle, linkImage.nextSibling);
 
   // Supprimer le cercle après un certain délai
   setTimeout(() => {
     circle.remove();
   }, 1000); // Durée de l'animation en millisecondes (1s dans cet exemple)
 
   updateDisplay(); // Mettre à jour l'affichage
});
// FIN DU BOUTTON SOIN HERO 




// BOUTTON ATTACK ENNEMIE // 

const ennemy_btn_attack = document.querySelector("#ennemy .btn_attack");

ennemy_btn_attack.addEventListener("click", function(){
    ennemie.attaquer(hero);
    updateDisplay();
    
    const image = document.querySelector("#ennemy img");
    image.classList.add("attaquer"); // Ajoute la classe "attaquer" à l'image du zombie

    setTimeout(() => {
        image.classList.remove("attaquer"); // Supprime la classe "attaquer" après un certain délai
    }, 200);
});
 
// FIN DU BOUTTON ATTACK ENNEMIE 




// BOUTTON SOIN ENNEMIE  // 

const ennemy_btn_soin = document.querySelector("#ennemy .btn_soin");

ennemy_btn_soin.addEventListener("click",function(){
    ennemie.soin(1);                // Le joueur va se soigner de 1 point de vie par clique.

  // Ajouter la classe pour déclencher l'animation
  const element_ennemy = document.querySelector("#ennemy");
  element_ennemy.classList.add("heal");

  // Supprimer la classe après un certain délai
  setTimeout(() => {
    element_ennemy.classList.remove("heal");
  }, 1000); // Durée de l'animation en millisecondes 

  updateDisplay(); // Mettre à jour l'affichage

  });

// FIN BOUTTON SOIN ENNEMIE // 

  updateDisplay(); // POUR METTRE À JOUR L'AFFICHAGE YYOYOYOYOY









  



