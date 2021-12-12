//recuperation de l'interface HTML
var attaquer=document.getElementById("attaque");
var defendre=document.getElementById("defense");
var magie=document.getElementById("magie");
var choixMagie=document.getElementsByClassName("choix_magie");
var magie1=document.getElementById("magie1");
var magie2=document.getElementById("magie2");
var dialogueBoite=document.getElementById("dialogue");
var affichage_en1=document.getElementsByClassName("affichage_ennemis1");
var affichage_en2=document.getElementsByClassName("affichage_ennemis2");
var affichage_en3=document.getElementsByClassName("affichage_ennemis3");

//recuperation des données de martin
var moine=document.getElementById("hero1");
var nomMoine=document.getElementById("nomMoine");
var defenseMoine=0;
var pvMartin=document.getElementById("pvMartin");
var pmMartin=document.getElementById("pmMartin");

//recuperation des données de paul
var pretre=document.getElementById("hero2");
var nomPretre=document.getElementById("nomPretre");
var defensePretre=0;
var pvPretre=document.getElementById("pvPaul");
var pmPretre=document.getElementById("pmPaul");

//recuperation des données de pierre
var guerrier=document.getElementById("hero3");
var nomGuerrier=document.getElementById("nomGuerrier");
var defenseGuerrier=0;
var pvGuerrier=document.getElementById("pvPierre");
var pmGuerrier=document.getElementById("pmPierre");

//recuperation des données de jacob
var mage=document.getElementById("hero4");
var nomMage=document.getElementById("nomMage");
var defenseMage=0;
var pvMage=document.getElementById("pvJacob");
var pmMage=document.getElementById("pmJacob");

//recuperation des données des ennemis
var vieSquele1=document.getElementById("pvSquelette1");
var vieSquele2=document.getElementById("pvSquelette2");
var vieSquele3=document.getElementById("pvSquelette3");
var squelette1=document.getElementById("ennemi1");
var squelette2=document.getElementById("ennemi2");
var squelette3=document.getElementById("ennemi3");
var nomSquelette1=document.getElementById("squelette1");
var nomSquelette2=document.getElementById("squelette2");
var nomSquelette3=document.getElementById("squelette3");
var etatGel=[gel1,gel2,gel3];

//recuperation des données de la cible de nos attaques
var cible=squelette1;
var vieCible=vieSquele1;
var nomCible=nomSquelette1;

//initialisation des actions des toures précédents
var actionMoine="";
var actionGuerrier="";
var actionPretre="";
var actionMage="";

//initialisation des listes de données des personages qui serviront pour les différentes actions
var listJoueur=[moine,pretre,guerrier,mage];
var listNomJoueur=[nomMoine,nomPretre,nomGuerrier,nomMage];
var listJoueurPv=[pvMartin,pvPretre,pvGuerrier,pvMage];
var listJoueurPm=[pmMartin,pmPretre,pmGuerrier,pmMage];
var heroActif=listJoueur[0];
var nomHeroActif=listNomJoueur[0];
var pmHeroActif=pmMartin;
var listJoueurDefense=[defenseMoine,defensePretre,defenseGuerrier,defenseMage];
var listActionPrecedente=[actionMoine,actionPretre,actionGuerrier,actionMage];

//initialisation des listes de données des monstres qui serviront pour les différentes actions
var listEnnemi=[squelette1,squelette2,squelette3];
var listEnnemiNom=[nomSquelette1,nomSquelette2,nomSquelette3];
var atqSquel1=0;
var atqSquel2=0;
var atqSquel3=0;
var listEnnemiAttq=[atqSquel1,atqSquel2,atqSquel3];
var listEnnemiPv=[vieSquele1,vieSquele2,vieSquele3];

//initialisation de différentes variables
var victoire=false;
var defaite=false;
var compteurPoing=0;
var provocation=false;
var gel1=false;
var gel2=false;
var gel3=false;
var nombreHero=4;
var mort=0;
var j=-1;


//debut declaration animation

//declaration animation de l'attaque de Pierre
var animationIntervalChevalier;
var spriteSheetChevalier = document.getElementById("sprite-chevalier");
var widthOfSpriteSheetChevalier = 379;
var widthOfEachSpriteChevalier = 63;
function stopAnimationChevalier() {
  clearInterval(animationIntervalChevalier);
}
  
function startAnimationChevalier() {
  var positionChevalier = widthOfEachSpriteChevalier; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteChevalier; //difference between two sprites
  
  animationInterval = setInterval(() => {
    spriteSheetChevalier.style.backgroundPosition = `-${positionChevalier}px 0px`;
    if (positionChevalier < widthOfSpriteSheetChevalier) {
      positionChevalier = positionChevalier + diff;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//declaration animation de l'attaque de Jacob
var animationIntervalMage;
var spriteSheetMage = document.getElementById("sprite-squel-spell");
var widthOfSpriteSheetMage = 448;
var widthOfEachSpriteMage = 64;
function stopAnimationMage() {
  clearInterval(animationIntervalMage);
  }
  
function startAnimationMage() {
  var positionMage = widthOfEachSpriteMage; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteMage; //difference between two sprites
  
  animationInterval = setInterval(() => {
    spriteSheetMage.style.backgroundPosition = `-${positionMage}px 0px`;
  
    if (positionMage < widthOfSpriteSheetMage) {
      positionMage = positionMage + diff;
    }
      //reset the position to show first sprite after the last one
  }, speed);
}

//declaration animation de l'attaque de Paul
var animationIntervalArcher;
var spriteSheetArcher = document.getElementById("sprite-archer-attack");
var widthOfSpriteSheetArcher = 768;
var widthOfEachSpriteArcher = 64;
function stopAnimationArcher() {
  clearInterval(animationIntervalArcher);
  }
  
function startAnimationArcher() {
  var positionArcher = widthOfEachSpriteArcher; //start position for the image
  const speed = 80; //in millisecond(ms)
  const diff = widthOfEachSpriteArcher; //difference between two sprites
  
  animationInterval = setInterval(() => {
    spriteSheetArcher.style.backgroundPosition = `-${positionArcher}px 0px`;
  
    if (positionArcher < widthOfSpriteSheetArcher) {
      positionArcher = positionArcher + diff;
    } 
      //reset the position to show first sprite after the last one
  }, speed);
}

//declaration animation de l'attaque de Martin
var animationIntervalMoine;
var spriteSheetMoine = document.getElementById("sprite-moine-attack");
var widthOfSpriteSheetMoine = 497;
var widthOfEachSpriteMoine = 62;
function stopAnimationMoine() {
  clearInterval(animationIntervalMoine);
  }
  
function startAnimationMoine() {
  var positionMoine = widthOfEachSpriteMoine; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteMoine; //difference between two sprites
  
  animationInterval = setInterval(() => {
    spriteSheetMoine.style.backgroundPosition = `-${positionMoine}px 0px`;
  
    if (positionMoine < widthOfSpriteSheetMoine) {
      positionMoine = positionMoine + diff;
    }
      //reset the position to show first sprite after the last one
  }, speed);
}

//declaration animation de l'effet du sort de soin
var animationIntervalSoin;
var spriteSheetSoin = document.getElementById("sprite-soin");
var widthOfSpriteSheetSoin = 256;
var widthOfEachSpriteSoin = 64;

function stopAnimationSoin() {
  clearInterval(animationIntervalSoin);
}
    
function startAnimationSoin() {
  var positionSoin = widthOfEachSpriteSoin; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteSoin; //difference between two sprites
    
  animationIntervalSoin = setInterval(() => {
    spriteSheetSoin.style.backgroundPosition = `-${positionSoin}px 0px`;
      
    if (positionSoin < widthOfSpriteSheetSoin) {
      positionSoin = positionSoin + diff;
    } else {
      positionSoin = widthOfEachSpriteSoin;
    }
  }, speed);
}

//declaration de l'animation du sort de boule de feu
var animationIntervalFireball;
var spriteSheetFireball = document.getElementById("sprite-fireball");
spriteSheetFireball.style.visibility="hidden";
var widthOfSpriteSheetFireball = 256;
var widthOfEachSpriteFireball = 64;
    
function stopAnimationFireball() {
  clearInterval(animationIntervalFireball);
}
    
function startAnimationFireball() {
  var positionFireball = widthOfEachSpriteFireball; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteFireball; //difference between two sprites
    
  animationIntervalFireball = setInterval(() => {
  spriteSheetFireball.style.backgroundPosition = `-${positionFireball}px 0px`;
    
  if (positionFireball < widthOfSpriteSheetFireball) {
    positionFireball = positionFireball + diff;
    } else {
      //increment the position by the width of each sprite each time
      positionFireball = widthOfEachSpriteFireball;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}

//declaration de l'animation du shield quand il a de la defense de Martin 
var animationIntervalShieldMoine;
var spriteSheetShieldMoine = document.getElementById("sprite-moine-shield");
var widthOfSpriteSheetShieldMoine = 331;
var widthOfEachSpriteShieldMoine = 66;
function stopAnimationShieldMoine() {
  clearInterval(animationIntervalShieldMoine);
  }
  
function startAnimationShieldMoine() {
  var positionShieldMoine = widthOfEachSpriteShieldMoine; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteShieldMoine; //difference between two sprites
  
  animationIntervalShieldMoine = setInterval(() => {
  spriteSheetShieldMoine.style.backgroundPosition = `-${positionShieldMoine}px 0px`;
  
    if (positionShieldMoine < widthOfSpriteSheetShieldMoine) {
      positionShieldMoine = positionShieldMoine + diff;
    } else {
      //increment the position by the width of each sprite each time
      positionShieldMoine = widthOfEachSpriteShieldMoine;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}
//declaration de l'animation du shield quand il a de la defense de Paul
var animationIntervalShieldArcher;
var spriteSheetShieldArcher = document.getElementById("sprite-archer-shield");
var widthOfSpriteSheetShieldArcher = 331;
var widthOfEachSpriteShieldArcher = 66;
function stopAnimationShieldArcher() {
  clearInterval(animationIntervalShieldArcher);
  }
  
  function startAnimationShieldArcher() {
  var positionShieldArcher = widthOfEachSpriteShieldArcher; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteShieldArcher; //difference between two sprites
  
  animationIntervalShieldArcher = setInterval(() => {
    spriteSheetShieldArcher.style.backgroundPosition = `-${positionShieldArcher}px 0px`;
  
    if (positionShieldArcher < widthOfSpriteSheetShieldArcher) {
      positionShieldArcher = positionShieldArcher + diff;
    } else {
      //increment the position by the width of each sprite each time
      positionShieldArcher = widthOfEachSpriteShieldArcher;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}
//declaration de l'animation du shield quand il a de la defense de Pierre
var animationIntervalShieldGuerrier;
var spriteSheetShieldGuerrier = document.getElementById("sprite-guerrier-shield");
var widthOfSpriteSheetShieldGuerrier = 331;
var widthOfEachSpriteShieldGuerrier = 66;
function stopAnimationShieldGuerrier() {
  clearInterval(animationIntervalShieldGuerrier);
}
  
function startAnimationShieldGuerrier() {
  var positionShieldGuerrier = widthOfEachSpriteShieldGuerrier; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteShieldGuerrier; //difference between two sprites
  
  animationIntervalShieldMoine = setInterval(() => {
    spriteSheetShieldGuerrier.style.backgroundPosition = `-${positionShieldGuerrier}px 0px`;
  
    if (positionShieldGuerrier < widthOfSpriteSheetShieldGuerrier) {
      positionShieldGuerrier = positionShieldGuerrier + diff;
     } else {
      //increment the position by the width of each sprite each time
      positionShieldGuerrier = widthOfEachSpriteShieldGuerrier;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}
//declaration de l'animation du shield quand il a de la defense de Jacob
var animationIntervalShieldMage;
var spriteSheetShieldMage = document.getElementById("sprite-mage-shield");
var widthOfSpriteSheetShieldMage = 331;
var widthOfEachSpriteShieldMage = 66;
function stopAnimationShieldMage() {
  clearInterval(animationIntervalShieldMage);
  }
  
  function startAnimationShieldMage() {
  var positionShieldMage = widthOfEachSpriteShieldMage; //start position for the image
  const speed = 100; //in millisecond(ms)
  const diff = widthOfEachSpriteShieldMage; //difference between two sprites
  
  animationIntervalShieldMage = setInterval(() => {
    spriteSheetShieldMage.style.backgroundPosition = `-${positionShieldMage}px 0px`;
  
    if (positionShieldMage < widthOfSpriteSheetShieldMage) {
      positionShieldMage = positionShieldMage + diff;
    } else {
      //increment the position by the width of each sprite each time
      positionShieldMage = widthOfEachSpriteShieldMage;
    }
    //reset the position to show first sprite after the last one
  }, speed);
}
var spriteSheetAttackJoueur= [spriteSheetMoine,spriteSheetArcher,spriteSheetChevalier,spriteSheetMage];
var spriteActif=spriteSheetAttackJoueur[0];

//fonction qui gere les lancements d'animation d'attaque en fonction du personnage actif
function startAnimationJoueur(){
  if (nomHeroActif.innerHTML=="Martin"){
    startAnimationMoine();
  }
  if (nomHeroActif.innerHTML=="Paul"){
    startAnimationArcher();
  }
  if (nomHeroActif.innerHTML=="Pierre"){
    startAnimationChevalier();
  }
  if (nomHeroActif.innerHTML=="Jacob"){
    startAnimationMage();
  }
}

//fonction qui gere les arrets d'animation d'attaque en fonction du personnage actif
function stopAnimationJoueur(){
  if (nomHeroActif=="Martin"){
    stopAnimationMoine();
  }
  if (nomHeroActif=="Paul"){
    stopAnimationArcher();
  }
  if (nomHeroActif=="Pierre"){
    stopAnimationChevalier();
  }
  if (nomHeroActif=="Jacob"){
    stopAnimationMage();
  }
}

//fonction qui gere les lancements d'animation des boucliers en fonction du personnage actif
function startAnimationShieldJoueur(para){
  console.log(para)
  console.log(listNomJoueur[para])
  if (listNomJoueur[para].innerHTML=="Martin"){
    spriteSheetShieldMoine.style.visibility="visible";
    startAnimationShieldMoine();
  }
  if (listNomJoueur[para].innerHTML=="Paul"){
    spriteSheetShieldArcher.style.visibility="visible";
    startAnimationShieldArcher();
  }
  if (listNomJoueur[para].innerHTML=="Pierre"){
    spriteSheetShieldGuerrier.style.visibility="visible";
    startAnimationShieldGuerrier();
  }
  if (listNomJoueur[para].innerHTML=="Jacob"){
    spriteSheetShieldMage.style.visibility="visible";
    startAnimationShieldMage();
  }
}

//fonction qui gere les gels sur les ennemis
function gel(){
  if (nomCible.innerHTML==nomSquelette1.innerHTML){
    gel1=true;
  }
  if (nomCible.innerHTML==nomSquelette2.innerHTML){
    gel2=true;
  }
  if (nomCible.innerHTML==nomSquelette3.innerHTML){
    gel3=true;
  }
}

//fonction qui augmente les defenses de tous les joueurs du nombre passe en parametre
function augmenteDefenseJoueur(nbDefense){
  for(let i = 0; i < listJoueurDefense.length; i++) {
    if(listJoueurDefense[i]==0){
      startAnimationShieldJoueur(i);
    }
    listJoueurDefense[i]=parseInt(listJoueurDefense[i])+parseInt(nbDefense);
  }
}
function clearDefenseJoueur(){
  for(let i = 0; i < listJoueurDefense.length; i++) {
      listJoueurDefense[i]=0;
  }
}

//fonction qui permet d'afficher les stats des monstres en passant la souris
squelette1.addEventListener("mouseenter", function( event ) {
  affichage_en1[0].style.visibility="visible";
});

squelette1.addEventListener("mouseleave", function( event ) {
  affichage_en1[0].style.visibility="hidden";
});

squelette2.addEventListener("mouseenter", function( event ) {
  affichage_en2[0].style.visibility="visible";
});

squelette2.addEventListener("mouseleave", function( event ) {
  affichage_en2[0].style.visibility="hidden";
});

squelette3.addEventListener("mouseenter", function( event ) {
  affichage_en3[0].style.visibility="visible";
});

squelette3.addEventListener("mouseleave", function( event ) {
  affichage_en3[0].style.visibility="hidden";
});

//fonction permettant de designer la nouvelle cible de nos attaque en cliquant sur l'image du monstre
squelette1.addEventListener('click', event => {
  vieCible=vieSquele1;
  cible=squelette1;
  nomCible=nomSquelette1;
  dialogueBoite.innerHTML=nomCible.innerHTML+" est la nouvelle cible";
  startAnimationAura();
});
squelette2.addEventListener('click', event => {
  vieCible=vieSquele2;
  cible=squelette2;
  nomCible=nomSquelette2;
  dialogueBoite.innerHTML=nomCible.innerHTML+" est la nouvelle cible";
});
squelette3.addEventListener('click', event => {
  vieCible=vieSquele3;
  cible=squelette3;
  nomCible=nomSquelette3;
  dialogueBoite.innerHTML=nomCible.innerHTML+" est la nouvelle cible";
});

//fonction qui enleva les actions deja realiser par le personnage au tour d'avant
function actionDisponible(){
  if (listActionPrecedente[j]=="attaquer"){
    attaquer.style.visibility="hidden";
    defendre.style.visibility="visible";
    magie.style.visibility="visible";
  }
  if (listActionPrecedente[j]=="defense"){
    defendre.style.visibility="hidden";
    attaquer.style.visibility="visible";
    magie.style.visibility="visible";
  }
  if (listActionPrecedente[j]=="magie"){
    defendre.style.visibility="visible";
    attaquer.style.visibility="visible";
    magie.style.visibility="hidden";
  }
}

//fonction qui gere la mort d'un ennemi et toutes ses conséquences
function eliminationEnnemie(){
  dialogueBoite.innerHTML=nomCible.innerHTML+" est mort";
  cible.style.visibility="hidden";
  vieCible.innerHTML=0
  listEnnemiAttq.splice(listEnnemi.indexOf(cible),1);
  listEnnemiPv.splice(listEnnemi.indexOf(cible),1);
  listEnnemiNom.splice(listEnnemi.indexOf(cible),1);
  listEnnemi.splice(listEnnemi.indexOf(cible),1);
  var nouvelleCible=Math.floor(Math.random() * listEnnemiNom.length);
  vieCible=listEnnemiPv[nouvelleCible];
  cible=listEnnemi[nouvelleCible];
  nomCible=listEnnemiNom[nouvelleCible];
  mort=mort+1;
  var audio = new Audio('soundpack/combat/hit.wav');
  audio.play();
  if (mort==3){
    victoire=true;
    console.log(victoire);
  }
}

//fonction de tour qui gere l'ordre de jeu des personnages et des monstres
tour();
function tour() {
  heroActif.style.visibility="visible";
  spriteActif.style.visibility="hidden";
  stopAnimationJoueur();
  j=j+1;
  if (j==4-(4-nombreHero)){
    j=-1;
    TourMonstre();
  }else{
    heroActif=listJoueur[j];
    nomHeroActif=listNomJoueur[j];
    pmHeroActif=listJoueurPm[j];
    spriteActif=spriteSheetAttackJoueur[j];
    defendre.style.visibility="visible";
    attaquer.style.visibility="visible";
    spriteActif.style.visibility="visible";
    heroActif.style.visibility="hidden";
    dialogueBoite.innerHTML="C'est à "+nomHeroActif.innerHTML+" d'agir.";
    actionDisponible();
    }
}

//fonction qui gere de manière automatique le déroulement d'un tour des monstres
function TourMonstre(){
  atqSquel1=Math.floor(Math.random() * 20);
  atqSquel2=Math.floor(Math.random() * 10);
  atqSquel3=Math.floor(Math.random() * 10);
  listEnnemiAttq=[atqSquel1,atqSquel2,atqSquel3];
  var counttemp=000;
  var degatAttq=0;
  var cibleAl=Math.floor(Math.random() * nombreHero);
  for(let i = 0; i < listEnnemi.length; i++) {
    etatGel=[gel1,gel2,gel3]
    console.log(etatGel)
    cibleAl=Math.floor(Math.random() * nombreHero);
    if (etatGel[i]==false){
      var cibleJoueur=listJoueur[cibleAl];
      var cibleJoueurPv=listJoueurPv[cibleAl];
      var cibleNomJoueur=listNomJoueur[cibleAl];
      var cibleJoueurDefense=listJoueurDefense[cibleAl];
      console.log(cibleJoueurDefense);
      setTimeout(() => {
        degatAttq=listEnnemiAttq[i]-cibleJoueurDefense;
        if(degatAttq<0){
          degatAttq=0;
        }
        cibleAl=Math.floor(Math.random() * nombreHero);
        if (provocation==true){
          cibleJoueur=guerrier;
          cibleJoueurPv=pvGuerrier;
          cibleNomJoueur=nomGuerrier;
          cibleJoueurDefense=defenseGuerrier;
        }else{
          cibleJoueur=listJoueur[cibleAl];
          cibleJoueurPv=listJoueurPv[cibleAl];
          cibleNomJoueur=listNomJoueur[cibleAl];
          cibleJoueurDefense=listJoueurDefense[cibleAl];
        }
      }, counttemp);
      counttemp=counttemp+1000;
      setTimeout(() => {
        dialogueBoite.innerHTML="Squelette"+(i+1)+" attaque !";
      }, counttemp);
      counttemp=counttemp+1000;
      setTimeout(() => {
        console.log(cibleNomJoueur,"test3");
        dialogueBoite.innerHTML=cibleNomJoueur.innerHTML+" a subis "+degatAttq+" dégats.";
        cibleJoueurPv.innerHTML=cibleJoueurPv.innerHTML-degatAttq;
        cibleJoueur.style.visibility="hidden";
        setTimeout(() => {
          cibleJoueur.style.visibility="visible";
          }, 200);
        }, counttemp); 
        console.log(cibleJoueurPv);
        console.log(cibleJoueurPv.innerHTML);
        counttemp=counttemp+1000;
        }else{
          dialogueBoite.innerHTML="Squelette"+(i+1)+" est gelé! Il ne peux pas attaquer!";
        }
        setTimeout(() => {
        if(cibleJoueurPv.innerHTML<=0){
          cibleJoueur.style.visibility="hidden";
          cibleJoueurPv.innerHTML=0;
          nombreHero=nombreHero-1;
          listJoueur.splice(cibleAl,1);
          listJoueurPv.splice(cibleAl,1);
          listNomJoueur.splice(cibleAl,1);
          listJoueurDefense.splice(cibleAl,1);
          spriteSheetAttackJoueur.splice(cibleAl,1);
          dialogueBoite.innerHTML= cibleNomJoueur.innerHTML+" est mort";
        }
      }, counttemp);
    }
  counttemp=counttemp+1000;
  setTimeout(() => {
  provocation=false;
  gel1=false;
  gel2=false;
  gel3=false;
  clearDefenseJoueur();
  stopAnimationShieldArcher();
  spriteSheetShieldArcher.style.visibility="hidden";
  stopAnimationShieldMoine();
  spriteSheetShieldMoine.style.visibility="hidden";
  stopAnimationShieldMage();
  spriteSheetShieldMage.style.visibility="hidden";
  stopAnimationShieldGuerrier();
  spriteSheetShieldGuerrier.style.visibility="hidden";
  actionDisponible();
  if (nombreHero==0){
    defaite=True;
  }
  tour();
  }, counttemp);
}

//fonction qui gere l'action d'attaque
attaquer.addEventListener('click', event => {
  if (nomHeroActif.innerHTML=="Martin" && compteurPoing!=0){
    var degatHeroActif=Math.floor(Math.random() * 20)*2;
    compteurPoing=compteurPoing-1;
  }else{
    var degatHeroActif=Math.floor(Math.random() * 20);
  }
  choixMagie[0].style.visibility="hidden";
  dialogueBoite.innerHTML=nomHeroActif.innerHTML+" attaque " +nomCible.innerHTML+" et inflige: "+degatHeroActif+" dégats.";
  vieCible.innerHTML=vieCible.innerHTML-degatHeroActif;
  var audio = new Audio('soundpack/combat/swing.wav');
  audio.play();
  var audio = new Audio('soundpack/combat/hit.wav');
  audio.play();
  cible.style.backgroundColor="red";
  cible.style.visibility="hidden";
  startAnimationJoueur();
  setTimeout(() => {
    cible.style.visibility="visible";
  }, 200);
  setTimeout(() => {
    if(vieCible.innerHTML<=0){
      eliminationEnnemie();
    }
  }, 3000);
  listActionPrecedente[j]="attaquer";
  setTimeout(() => {
    tour();
  }, 3000);
});

//fonction qui gere l'action de defense
defendre.addEventListener('click', event => {
  defenseHeroActif=Math.floor(Math.random() * 11);
  if(listJoueurDefense[j]==0){
    startAnimationShieldJoueur(j);
  }
  listJoueurDefense[j]=listJoueurDefense[j]+defenseHeroActif;
  console.log(listJoueurDefense[j])
  choixMagie[0].style.visibility="hidden";
  dialogueBoite.innerHTML=nomHeroActif.innerHTML+" defend et va bloquer: "+defenseHeroActif+" points de dégats.";
  listActionPrecedente[j]="defense";
  var audio = new Audio('spells/magicshield.ogg');
  audio.play();
  setTimeout(() => {
    tour();
  }, 3000);
});

//fonction qui gere l'action de magie en fonction du personnage actif
magie.addEventListener('click', event => {
  if (nomHeroActif.innerHTML=="Martin"){
    magie1.innerHTML="Soin";
    magie2.innerHTML="Poing radieux";
  }
  if (nomHeroActif.innerHTML=="Paul"){
    magie1.innerHTML="Tir de barrage";
    magie2.innerHTML="Tir précis";
  }
  if (nomHeroActif.innerHTML=="Pierre"){
    magie1.innerHTML="Protection";
    magie2.innerHTML="Provocation";
  }
  if (nomHeroActif.innerHTML=="Jacob"){
  magie1.innerHTML="Boule de feu";
  magie2.innerHTML="Gel";
  }
  choixMagie[0].style.visibility="visible";
});

//lance la magie a l'emplacement une en fonction du personnage actif
magie1.addEventListener('click', event => {
  if (pmHeroActif.innerHTML>=5){
    dialogueBoite.innerHTML=nomHeroActif.innerHTML+" lance "+magie1.innerHTML+"." ;
    choixMagie[0].style.visibility="visible";
    pmHeroActif.innerHTML=pmHeroActif.innerHTML-5;
    if(magie1.innerHTML=="Soin"){
      spriteSheetSoin.style.visibility="visible";
      pvMartin.innerHTML=parseInt(10)+parseInt(pvMartin.innerHTML);
      if (pvMartin.innerHTML>20){
        pvMartin.innerHTML=20;
      }
      dialogueBoite.innerHTML="martin récupère 10 PV." ;
      startAnimationSoin();
      setTimeout(() => {
        var audio = new Audio('spells/heal.ogg');
        audio.play();
        stopAnimationSoin();
        spriteSheetSoin.style.visibility="hidden";
      }, 1000);
    }
    if(magie1.innerHTML=="Tir de barrage"){
      vieSquele1.innerHTML=vieSquele1.innerHTML-15;
      vieSquele2.innerHTML=vieSquele2.innerHTML-15;
      vieSquele3.innerHTML=vieSquele3.innerHTML-15;
      dialogueBoite.innerHTML="Paul inflige 15 dégats à tous les ennemis." ;
      if(vieSquele1.innerHTML<=0){
        eliminationEnnemie();
      }
      if(vieSquele2.innerHTML<=0){
        eliminationEnnemie();
      }
      if(vieSquele3.innerHTML<=0){
        eliminationEnnemie();
      }
    }
    if(magie1.innerHTML=="Protection"){
      dialogueBoite.innerHTML="Pierre Augmente la defense de tous le monde de 10 points.";
      augmenteDefenseJoueur(10);
    }
    if(magie1.innerHTML=="Boule de feu"){
      var audio = new Audio('spells/explode.ogg');
      audio.play();
      spriteSheetFireball.style.visibility="visible";
      startAnimationFireball();
      spriteSheetFireball.animate([
      // keyframes
      { transform: 'translateY(0px)' },
      { transform: 'translateX(-200px)' }
      ], {
        // timing options
        duration: 1000,
        iterations: 1
      });
      setTimeout(() => {
        stopAnimationFireball();
        spriteSheetFireball.style.visibility="hidden";
      }, 1000);
      dialogueBoite.innerHTML="Jacob inflige 20 points de dégats à "+nomCible.innerHTML;
      vieCible.innerHTML=vieCible.innerHTML-20;
      if(vieCible.innerHTML<=0){
        eliminationEnnemie();
      }
    }
    listActionPrecedente[j]="magie";
    choixMagie[0].style.visibility="hidden";
    setTimeout(() => {
      tour();
    }, 3000);
  }else{
    dialogueBoite.innerHTML=nomHeroActif.innerHTML+" n'as pas assez de PM pour lancer le sort.";
  }
});

//lance la magie a l'emplacement une en fonction du personnage actif
magie2.addEventListener('click', event => {
  if (pmHeroActif.innerHTML>=5){
    dialogueBoite.innerHTML=nomHeroActif.innerHTML+" lance "+magie1.innerHTML+"." ;
    choixMagie[0].style.visibility="visible";
    pmHeroActif.innerHTML=pmHeroActif.innerHTML-5;
    if(magie2.innerHTML=="Poing radieux"){
      dialogueBoite.innerHTML="Martin buff ses 2 prochaines attaques! ";
      compteurPoing=2;
    }
    if(magie2.innerHTML=="Provocation"){
      dialogueBoite.innerHTML="Pierre provoque les ennemis et devient la cible a abattre.";
      provocation=true;
      listJoueurDefense[j]=listJoueurDefense[j]+5;
    }
    if(magie2.innerHTML=="Tir Mortel"){
      dialogueBoite.innerHTML="Paul inflige 20 points de dégats à "+nomCible.innerHTML;
      vieCible.innerHTML=vieCible.innerHTML-20;
      if(vieCible.innerHTML<=0){
        eliminationEnnemie();
      }
    }
    if(magie2.innerHTML=="Gel"){
      dialogueBoite.innerHTML="Jacob gel "+nomCible.innerHTML;
      gel();
      var audio = new Audio('spells/freeze2.ogg');
        audio.play();
    }
    listActionPrecedente[j]="magie";
    choixMagie[0].style.visibility="hidden";
    setTimeout(() => {
      tour();
    }, 3000);
  }else{
    dialogueBoite.innerHTML=nomHeroActif.innerHTML+" n'as pas assez de PM pour lancer le sort.";
  }
});