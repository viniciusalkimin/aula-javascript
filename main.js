/*
funciton redirecionar(){ 

window.location.href = https://www.linkedin.com/in/viniciusalkimin/;

}*/
    function funcaochance(elemento){
    console.log(elemento.value)

    }

    function load(){
        alert("Página carregada");
    }

    function clicou(){ 
        document.getElementById("agradecimento").innerHTML = "<em>Obrigado por clicar</em> "; 
    }
    function redirecionar(){
        window.open("http://intranet.goldendistribuidora.com.br/");
         window.location.href = "http://intranet.goldendistribuidora.com.br/";
    }    
    function trocar(){
        document.getElementById("mousemove").innerHTML = "Obrigado!";
        //alert("trocar texto");
    }
    function voltar(){
        document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
  
    }
//*** Inserindo no corpo html

//console.log(document.getElementById("agradecimento")); *** Inserindo no log 



/*
function clicou(){
    alert("Obrigado por clicar");    
}




        *** Validar idade 

function validaidade(idade){
    var validar;
    if(idade>=18){
    var validar = true
}
else
{
    validar=false
}
return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaidade(idade));

 
    *** Função REPLACE
function setReplace(frase, nome,novo_nome){
    
    return frase.replace(nome,novo_nome)
}
   
   
    alert(setReplace("Vai Japão","Japão","Brasil"));

            *** Funções matemáticas no JS
function soma (n1,n2){
return n1 + n2;
}
alert(soma(5,10));


                ***pegando apenas um elemento da data
var d = new Date();
alert(d.getDate());


            *** USANDO DATA NO JAVASCRIPT
var d = new Date();
alert(d.getMonth()+1);

        *** FOR NO JAVASCRIPT
var cont;  
for(cont=0;cont<=5;cont++){
    alert(cont);
}


         *** WHILE NO JAVASCRIPT
var count = 0;
while(count<=5){
    console.log(count);
    alert(count);
    count++;
}




          *** IF NO JAVASCRIPT 
var idade = prompt("Qual sua idade?");

if(idade>=18){
   alert("Maior de idade"); 
}
else{
  alert("Menor de idade");  
}


var frutas =[{nome:"Maçã", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome); 


var fruta = {nome:"maçã", cor:"Vermelha"}  *** Inserir (DICIONATIO) JSON 
console.log(fruta.nome);
alert(fruta.cor);
  

var lista = ["Maçã", "Pêra", "Laranja"];
console.log(lista[0]);
 MOSTRAR A LISTA NO LOG
lista.push("uva"); *** ADICIONAR UM ELEMENTO
lista.pop();  *** TIRAR UM ELEMENTO
console.log(lista.reverse());  *** REVERTER ORDEM
console.log(lista.length); *** MOSTRAR TAMANHO DO ARRAY 
console.log(lista.toString()[0]);    *** COnverter para String
console.log(lista.join("|"));   ***Converte para Strin e muda o simbolo de separação
alert(lista[2]);
 

var nome = "Vinicius Alkimin";
var idade = 25;
var idade2 = 10;
var frase = "Santos é o melhor time do mundo";

alert("Usuário: "+ nome + " que tem " + idade + " anos");
alert(idade + idade2);

console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("Santos","Brasil")); 

alert(frase.replace("Santos","Brasil")); 
 
console.log(frase.toUpperCase()); 
console.log(frase.toLowerCase());  */