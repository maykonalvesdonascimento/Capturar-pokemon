
escapar = 0;

alert('Seja Bem Vindo ao Jogo Captura de Pokemon');

let maximo=10;




listaPokeball = [["Pokeball",5,25] , ["Greatball", 2 ,60] , ["UltraBall",1,70]];

let listaPokemon = [    ["Pikachu" , 1 , "pikachu.png"], ["Rattata",0.5,"rattata.png"],
                        ["Abra",1,"abra.png"] , ["Bulbassaur", 1 , "bulbassaur.png"],
                        ["charmander",1,"charmander.png"], ["mew",3,"mew.png"],
                        ["articuno",3,"articuno.png"] , ["cubone",0.75,"cubone.png"],
                        ["eevee",1,"eevee.png"] , ["flareon", 1.5, "flareon.png"],
                        ["gyaradus",2.5,"gyaradus.png"],["jolteon",1.5,"jolteon.png"],
                        ["larpras",1.75,"larpras.png"] ,["magikarp",0.25,"magikarp.png"],
                        ["vaporeon",1.5,"vaporeon.png"]



];
listaCapturados =[];




let nomePokemon;

let dificuldadePokemon;

let imagem; 
sortearPokemon();









function capturaPokemon(ratingPokeball , dificuldadePokemon){
    let taxaCaptura = Math.floor(Math.random()*100)+1;
    let captura = taxaCaptura * dificuldadePokemon;

   // alert(`taxa de captura ${taxaCaptura} dificuldade Pokemon ${dificuldadePokemon} , captura = ${captura}`);

    //alert (`captura = ${captura} , ratingPokeball = ${ratingPokeball}`)
    if(captura<ratingPokeball){
        return true;
    }else{
        return false;
    }
}
function fugiu(){
    escapar = Math.floor(Math.random()*3)+1;
    if(escapar>=3){
        return true;
    }else{
        return false;
    }
}
function possuiPokeball (id){

    if(listaPokeball[id][1] >0){
        return true;
    }else{
        return false; 
    }
}

function reduzirPokeball(id){
    return listaPokeball[id][1]--;

}

function sortearPokemon(){
     let numeroaleatorio = Math.floor(Math.random()*15);
     nomePokemon = listaPokemon[numeroaleatorio][0];
     dificuldadePokemon= listaPokemon[numeroaleatorio][1];
     imagem = `img/${listaPokemon[numeroaleatorio][2]}`;
     docimagem = document.getElementById('pokemonGerado');
docimagem.setAttribute("src", imagem);
     alert(`O pokemon ${nomePokemon} apareceu`);

}


function arremessoPokeball(){

        imagem ="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg";

        arremesso(0,"pokeball",imagem);
       
}
function arremessoGreatball(){


        imagem ="img/great.ico";

        arremesso(1,"greatball",imagem);

      
}
function arremessoUltraball(){

        imagem ="img/ultra.ico";

        arremesso(2,"ultraball",imagem);


    
}

function arremesso(id, nomePokeball, imagem){
    if (possuiPokeball(id)){
       
        reduzirPokeball(id);
        preencherPokeball(imagem,nomePokeball,id);
        if(capturaPokemon(listaPokeball[id][2], dificuldadePokemon)){
            alert("Meus Parabéns você capturou");
            ganharPokeball();
             listaCapturados.push(nomePokemon);
            preencherTexto("capturados",listaCapturados);
            sortearPokemon();

        }else{

            gerarMensagemAleatoria(nomePokeball,nomePokemon);
            if(fugiu()){
                alert(`O ${nomePokemon} fugiu`);
                sortearPokemon();
            }
        }
    }else{
        if(listaPokeball[0][1]==0 && listaPokeball[1][1]==0 && listaPokeball[2][1]==0){
            alert(`Game Over ao todo você capturou ${listaCapturados.leight}`)
        }else{
        alert(`Sem ${nomePokeball}`);
        }
        
    }

}

function preencherPokeball(imagem,nomePokeball,id){
     button = document.getElementById(nomePokeball);
        let texto = `<img src="${imagem}" alt="${nomePokeball}">
                ${nomePokeball} (${listaPokeball[id][1]})
                `;
        button.innerHTML = texto;

}

function preencherTexto(id, texto){
    document.getElementById(id).innerHTML=texto;
}

function gerarMensagemAleatoria(nomePokeball, nomePokemon){
    listaFrases=[`Você arremessou uma ${nomePokeball} mas passou longe de acertar o ${nomePokemon}\nVocê não capturou`,
        `Você arremessa a ${nomePokeball} você quase captura o ${nomePokemon}\nQUASE`,
        `Você arremessa ${nomePokeball} mas ${nomePokemon} se defende,\nVocê não consegiu capturar`];
    let numeroaleatorio = Math.floor(Math.random()*3);
    alert(listaFrases[numeroaleatorio]);

}

function ganharPokeball(){
    if(nomePokemon=="mew" || nomePokemon=="articuno" || nomePokemon=="gyaradus"){
        listaPokeball[2][1]=listaPokeball[2][1]+3;
        preencherPokeball("img/ultra.ico", "ultraball",2);

    }else{
        let numeroaleatorio = Math.floor(Math.random()*2);
        listaPokeball[1][1] = listaPokeball[1][1] + numeroaleatorio;
        preencherPokeball("img/great.ico", "greatball",1);
        numeroaleatorio = Math.floor(Math.random()*3);
        listaPokeball[0][1] = listaPokeball[0][1] + numeroaleatorio;
        preencherPokeball("https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg", "pokeball",0);

    }
}