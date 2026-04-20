function formulaire(){
    prenom=document.getElementById("prenom").value
    age=Number(document.getElementById("age").value)
    choix=document.getElementById("choix").value
    if (prenom ==="" ) {
        document.getElementById("afficheur").innerHTML="<span style='color: red;'>Remplissez tous les champs</span>"
    } 
    else{
        if (age<=15 && choix==="enfant") {
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes inscrit qu'enfant"
        } else if (age>15 && age<=64 && choix==="adulte") {
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes en tant qu'Adulte"
        }
        else if (age>=65 && age<100 && choix==="senior"){
            document.getElementById("afficheur").innerHTML="Bienvenue "+prenom+" Vous êtes inscrit en tant que Senior"
        }
        else {
        document.getElementById("afficheur").innerHTML="<span style='color: orange;'>Veuillez choisir une catégorie correspondante à l'âge</span>"
    }
}
}
