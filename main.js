var sele=document.querySelector("#app ul");
var input=document.querySelector("#app input");
var button=document.querySelector("#app button");
var lista=document.createElement("li")
sele.appendChild(lista);
function carregar(){
    lista.innerHTML="";
    var texto=document.createTextNode("carregar.....");
    lista.appendChild(texto);
}
function falha(){
        lista.innerHTML="";
        var texto=document.createTextNode("error 404 usuario nao existe ");
        lista.appendChild(texto);
}

function verificar(){
    var valor= input.value;
    verifica1(valor);
}

function verifica1(valor){
    if(!valor) return;
    carregar();
    
    axios.get("https://api.github.com/users/" + valor)
        .then(function(response){
            console.log(response.data);
            lista.innerHTML="";
        })
        .catch(function(error){
            console.warn(error);
            falha();
        });
}



