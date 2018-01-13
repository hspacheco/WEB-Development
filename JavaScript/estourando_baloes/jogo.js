var timerId = null;

function iniciaGame(){
    var link = window.location.search;
    var level = link.replace("?","");
    var time = 0;

    alert('iniciou');

    if(level == 1){
        time = 120;
    } else if(level == 2){
        time = 60;
    } else if(level == 3){
        time = 30;
    }

    document.getElementById('contador').innerHTML = time;

    var qtd_balao = 10;

    document.getElementById('qtd_balao').innerHTML = qtd_balao;
    document.getElementById('qtd_balao_estourados').innerHTML = 0;
    preenche_balao(qtd_balao);
    contagem_regressiva(time);
}

function fim_jogo(){
    alert('Acabou');
}

function estourar(balao){
    document.getElementById(balao.id).setAttribute("onclick","");
    document.getElementById(balao.id).src = 'imagens/balao_azul_pequeno_estourado.png';
    pontos(-1);
}

function pontos(n){
    var inteiros = document.getElementById('qtd_balao').innerHTML;
    var estourados = document.getElementById('qtd_balao_estourados').innerHTML;

    inteiros = parseInt(inteiros);
    estourados = parseInt(estourados);

    inteiros = inteiros + n;
    estourados = estourados - n;

    document.getElementById('qtd_balao').innerHTML = inteiros;
    document.getElementById('qtd_balao_estourados').innerHTML = estourados;
    
    if(inteiros == 0){
        alert('kabo, tu ganho');
        clearTimeout(timerId);
    }

}

function preenche_balao(qtd_balao){
    for(var i = 0; i<qtd_balao; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b'+i;
        balao.onclick = function(){estourar(this)};
        
        document.getElementById('cenario').appendChild(balao);
    }
}

function contagem_regressiva(segundos){
    segundos--;
    if(segundos<0){
        clearTimeout(timerId);
        fim_jogo();
        return false;
    }

    document.getElementById('contador').innerHTML = segundos;
    timerId = setTimeout("contagem_regressiva("+segundos+")", 1000);
}