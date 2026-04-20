function formulaire(){
    nom=document.getElementById("nom").value
    prenom=document.getElementById("prenom").value
    age=Number(document.getElementById("age").value)
    if (nom ==="" || prenom ==="" ) {
        document.getElementById("afficheur").innerHTML="<span style='color: red;'>Remplissez tous les champs</span>"
    } 
    else{
        if (age<=15) {
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes inscrit qu'enfant"
        } else if (age>15 && age<=64) {
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes en tant qu'Adulte"
        }
        else if (age>=65 && age<100 ){
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes inscrit en tant que Senior"
        }
        else {
        document.getElementById("afficheur").innerHTML="<span style='color: orange;'>Renseignez un âge digne de ce nom</span>"
    }
}
}
