var attaquer=document.getElementById("attaque");
var defendre=document.getElementById("defense");
var magie=document.getElementById("magie");
var item=document.getElementById("item");

var choixItem=document.getElementsByClassName("choix_item");
var choixMagie=document.getElementsByClassName("choix_magie");
var dialogueBoite=document.getElementById("dialogue");

var moine=document.getElementById("hero1");
var nomMoine=document.getElementById("nomMoine");
var defenseMoine=0;
var pvMartin=document.getElementById("pvMartin");
var pmMartin=document.getElementById("pmMartin");
var moineCache=document.getElementById("hero1cache");
var canonMouton=document.getElementById("canonMouton");
var champi=document.getElementById("champi");
var slime=document.getElementById("slime");
var defenseSlime=Math.floor(Math.random() * 100);
var eclair=document.getElementById("eclair");
var boucGlace=document.getElementById("boucGlace");
var khame=document.getElementById("khame");

var pretre=document.getElementById("hero2");
var nomPretre=document.getElementById("nomPretre");
var defensePretre=0;
var pvPretre=document.getElementById("pvPaul");
var pmPretre=document.getElementById("pmPaul");

var guerrier=document.getElementById("hero3");
var nomGuerrier=document.getElementById("nomGuerrier");
var defenseGuerrier=0;
var pvGuerrier=document.getElementById("pvPierre");
var pmGuerrier=document.getElementById("pmPierre");

var mage=document.getElementById("hero4");
var nomMage=document.getElementById("nomMage");
var defenseMage=0;
var pvMage=document.getElementById("pvJacob");
var pmMage=document.getElementById("pmJacob");

var vieSquele1=document.getElementById("pvSquelette1");
var vieSquele2=document.getElementById("pvSquelette2");
var vieSquele3=document.getElementById("pvSquelette3");
var squelette1=document.getElementById("ennemi1");
var squelette2=document.getElementById("ennemi2");
var squelette3=document.getElementById("ennemi3");
var nomSquelette1=document.getElementById("squelette1");
var nomSquelette2=document.getElementById("squelette2");
var nomSquelette3=document.getElementById("squelette3");

var cible=squelette1;
var vieCible=vieSquele1;
var nomCible=nomSquelette1;

var actionMoine="";
var actionGuerrier="";
var actionPretre="";
var actionMage="";

var listJoueur=[moine,pretre,guerrier,mage];
var listNomJoueur=[nomMoine,nomPretre,nomGuerrier,nomMage];
var listJoueurPv=[pvMartin,pvPretre,pvGuerrier,pvMage];
var listJoueurDefense=[defenseMoine,defensePretre,defenseGuerrier,defenseMage];
var listActionPrecedente=[actionMoine,actionPretre,actionGuerrier,actionMage];
var listEnnemi=[squelette1,squelette2,squelette3];
var listEnnemiNom=[nomSquelette1,nomSquelette2,nomSquelette3];
var atqSquel1=0;
var atqSquel2=0;
var atqSquel3=0;
var listEnnemiAttq=[atqSquel1,atqSquel2,atqSquel3];
var listEnnemiPv=[vieSquele1,vieSquele2,vieSquele3];
var victoire=false;
var mort=0;
var j=0;
var heroActif=listJoueur[j];
var nomHeroActif=listNomJoueur[0];
console.log(listNomJoueur);
console.log(heroActif);
console.log(nomHeroActif);

var affichage_en1=document.getElementsByClassName("affichage_ennemis1");
var affichage_en2=document.getElementsByClassName("affichage_ennemis2");
var affichage_en3=document.getElementsByClassName("affichage_ennemis3");


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

function tour() {
    heroActif.style.visibility="visible";
    j=j+1;
    if (j==4){
        j=0;
        TourMonstre();
    }else{
    heroActif=listJoueur[j];
    nomHeroActif=listNomJoueur[j];
    defendre.style.visibility="visible";
    attaquer.style.visibility="visible";
    console.log(nomHeroActif);
    defenseMoine=0;
    moineCache.style.right=500+"px";
    moineCache.style.top=150+"px";
    moineCache.style.visibility="visible";
    heroActif.style.visibility="hidden";
    console.log(listActionPrecedente[j]);
    actionDisponible();
    }
}

function actionDisponible(){
    if (listActionPrecedente[j]=="attaquer"){
        attaquer.style.visibility="hidden";
    }
    if (listActionPrecedente[j]=="defense"){
        defendre.style.visibility="hidden";
    }
}

function clearDefenseJoueur(){
    for(let i = 0; i < listJoueurDefense.length; i++) {
        listJoueurDefense[i]=0;
    }
}

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
        if (mort==3){
            victoire=true;
            console.log(victoire);
        }
}

squelette1.addEventListener('click', event => {
    vieCible=vieSquele1;
    cible=squelette1;
    nomCible=nomSquelette1;
});
squelette2.addEventListener('click', event => {
    vieCible=vieSquele2;
    cible=squelette2;
    nomCible=nomSquelette2;
});
squelette3.addEventListener('click', event => {
    vieCible=vieSquele3;
    cible=squelette3;
    nomCible=nomSquelette3;
});

function TourMonstre(){
    atqSquel1=Math.floor(Math.random() * 20);
    atqSquel2=Math.floor(Math.random() * 10);
    atqSquel3=Math.floor(Math.random() * 10);
    listEnnemiAttq=[atqSquel1,atqSquel2,atqSquel3];
    var counttemp=000;
    var degatAttq=0;
//while(victoire===false || defaite===false){
//}


    var cibleAl=Math.floor(Math.random() * 4);
    var nombreHero=4;

    for(let i = 0; i < listEnnemi.length; i++) {
        setTimeout(() => {
        var cibleAl=Math.floor(Math.random() * 4);
        console.log(cibleAl,"test");
        cibleAl=Math.floor(Math.random() * 4);
        console.log(cibleAl,"test2");
        var cibleJoueur=listJoueur[cibleAl];
        console.log(cibleJoueur);
        var cibleJoueurPv=listJoueurPv[cibleAl];
        var cibleNomJoueur=listNomJoueur[cibleAl];
        var cibleJoueurDefense=listJoueurDefense[cibleAl];
        console.log(cibleJoueurDefense);
        degatAttq=listEnnemiAttq[i]-cibleJoueurDefense;
        if(degatAttq<0){
            degatAttq=0;
            }
        cibleAl=Math.floor(Math.random() * nombreHero);
        cibleJoueur=listJoueur[cibleAl];
        cibleJoueurPv=listJoueurPv[cibleAl];
        cibleNomJoueur=listNomJoueur[cibleAl];
        cibleJoueurDefense=listJoueurDefense[cibleAl];
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
        }, counttemp); 
        counttemp=counttemp+1000;
        if(cibleJoueurPv.innerHTML<=0){
            setTimeout(() => {
            dialogueBoite.innerHTML= cibleNomJoueur.innerHTML+" est mort";
            cibleJoueur.style.visibility="hidden";
            cibleJoueurPv.innerHTML=0;
            nombreHero=nombreHero-1;
            listJoueur.splice(cible,1);
            console.log(nombreHero);
            console.log(listJoueur);
        }, counttemp);
            }
    }
    clearDefenseJoueur();
    actionDisponible();
}
    attaquer.addEventListener('click', event => {
        var degatHeroActif=Math.floor(Math.random() * 20);
        choixMagie[0].style.visibility="hidden";
        choixItem[0].style.visibility="hidden";
        dialogueBoite.innerHTML=nomHeroActif.innerHTML+" attaque " +nomCible.innerHTML+" et inflige: "+degatHeroActif+" dégats.";
        vieCible.innerHTML=vieCible.innerHTML-degatHeroActif;
        if(vieCible.innerHTML<=0){
            eliminationEnnemie();
        }
        listActionPrecedente[j]="attaquer";
        tour()
    });

    defendre.addEventListener('click', event => {
        defenseHeroActif=Math.floor(Math.random() * 11);
        listJoueurDefense[j]=defenseHeroActif;
        console.log(listJoueurDefense[j])
        choixMagie[0].style.visibility="hidden";
        choixItem[0].style.visibility="hidden";
        dialogueBoite.innerHTML=nomHeroActif.innerHTML+" defend et va bloquer: "+defenseHeroActif+" points de dégats.";
        listActionPrecedente[j]="defense";
        tour()
    });

    magie.addEventListener('click', event => {
        choixMagie[0].style.visibility="visible";
        choixItem[0].style.visibility="hidden";
    });

    boucGlace.addEventListener('click', event => {
        if (pmMartin.innerHTML>10){
        dialogueBoite.innerHTML="Martin éternue et un mur de glace apparait";
        choixMagie[0].style.visibility="hidden";
        pmMartin.innerHTML=pmMartin.innerHTML-10;
        }
        else{
            dialogueBoite.innerHTML="Martin n'as pas assez de PM";
        }
        TourMonstre();
    });
    eclair.addEventListener('click', event => {
        if (pmMartin.innerHTML>10){
        dialogueBoite.innerHTML="Martin fais tomber un eclair";
        choixMagie[0].style.visibility="hidden";
        pmMartin.innerHTML=pmMartin.innerHTML-10;
        }
        else{
            dialogueBoite.innerHTML="Martin n'as pas assez de PM";
        }
        TourMonstre();
    });
    khame.addEventListener('click', event => {
        if (pmMartin.innerHTML>10){
        dialogueBoite.innerHTML="Martin lance un khamehameha";
        choixMagie[0].style.visibility="hidden";
        pmMartin.innerHTML=pmMartin.innerHTML-10;
        }
        else{
            dialogueBoite.innerHTML="Martin n'as pas assez de PM";
        }
        TourMonstre();
    });

    item.addEventListener('click', event => {
        choixItem[0].style.visibility="visible";
        choixMagie[0].style.visibility="hidden";
    });

    canonMouton.addEventListener('click', event => {
        var degatCanon=Math.floor(Math.random() * 100);
        dialogueBoite.innerHTML="Martin utilise le canon et envoi qui inflige: "+degatCanon+" dégats";
        canonMouton.style.visibility="hidden";
        choixItem[0].style.visibility="hidden";
        TourMonstre();
    });
    champi.addEventListener('click', event => {
        dialogueBoite.innerHTML="Martin consomme le champignon et devient berserker pendant 3 tours";
        champi.style.visibility="hidden";
        choixItem[0].style.visibility="hidden";
        TourMonstre();
    });
    slime.addEventListener('click', event => {
        dialogueBoite.innerHTML="Slime protège Martin et va bloquer: "+defenseSlime+" dégats";
        slime.style.visibility="hidden";
        choixItem[0].style.visibility="hidden";
        TourMonstre();
    });