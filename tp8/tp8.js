function affichagetab( ){
    document.write('<table border=2px width=30%>');
    for(var i = 0;i<5; i++){
        document.write('<tr> <td>*</td> <td>*</td> <td>*</td> </tr>');
    }
    document.write('</table>');
}

function affichagetab2(){
    var count = prompt("Entrer le nombre de lignes pour votre tableau")
    document.write('<table border=2px width=30%>');
    for(var i = 0;i<=count; i++){
        document.write("<tr><td> "+i+"</td> <td>*</td> <td>*</td> </tr>");
    }
    document.write('</table>');
}
function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur");
    var mdp = prompt("Donner votre mots de passe");
    if(login == "Anes" && mdp== "anes") {
        document.write("Bienvenue " +login)
    }
    else {
        alert("Accès refusé")
    }
}
function cdc (){
    var chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient " +chaine.length+ " caractères" + "<br>");
    document.write("La première lettre est " + chaine.substr(0,1)+"<br>");
    document.write("Le dernier caractere est " + chaine.substr(-1)+"<br>");
}
function swich(){
    var color =prompt("Entrez une couleur :");
    switch (color){
        case "rouge":
            document.body.style.background = "red";
            break;
        case "ROUGE":
            document.body.style.background ="red";
            break;
        case "bleu":
            document.body.style.background ="blue";
            break;
        case "BLEU":
            document.body.style.background ="bleu";
            break;
            case "pink":
                document.body.style.background = "pink";
                break;
                case "PINK":
                    document.body.style.background = "pink";
                break;
            
        default:
            alert("Couleur non prise en charge, veuillez choisir parmis : Bleu, Rouge, Pink ")

    }
}
function seconnecter3(){
    var i = 0;
    do {
        var id = prompt("Entrer votre nom d'utilisateur");
        var mdp = prompt("Entrer votre mots de passe");
        if (id == "admin" && mdp =="admin")
        {
            document.write("Bienvenue"+id);
            break;
        }
        else
        alert("Accès refusé");
    i=i+1;
    }while (i<3);
    if(i==3)
    alert("Delai dépassé");
}
