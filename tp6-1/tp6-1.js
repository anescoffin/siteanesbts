function calcul_moyenne(){
    var n1= prompt("Donner la première note:");
    var n2= prompt("Donner la deuxième note");
    var n3= prompt("Donner la troisière note")

    var somme = Number(n1)+Number(n2)+Number(n3)

    document.write ("Voici la somme: "+somme+"<br>");
    var moyenne= somme/3;

    document.write("Voici la moyenne"+moyenne+"<br>");
    
    if (moyenne<10)
    document.write("Vous êtes redoublant");
    else
    document.write("Vous êtes Admis");
   }
   
function test_age(){
    var a1= prompt("Donner un âge:");

    if (a1<18)
    {document.write("Vous êtes Mineur");
    document.body.style.backgroundColor="red";}  
   else{
      document.write("Vous êtes Majeur");
   }
 
}
function simple_affichage(){
    var n1 = prompt("Donner votre prénom ");
    var n2 = prompt("Donner votre nom ");
  
      document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
      document.write("Bonjour " +n1 +n2+ "<br>");
      document.write('</div>');
  }
function text_couleur(){
    let c = prompt("donner une couleur");
    if (c=="rouge")
     {
        document.body.style.background= "red"
     }  
     else if (c=="bleu")
     {
        document.body.style.background = "blue"
     }
     else if (c == "vert")
     {
        document.body.style.background = "green"
     }
     else{
        document.write("couleur non comprise")
     }
}