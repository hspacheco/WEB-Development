rodada = 1;
matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

	$('#btn-start').click(function(){
		if (($('#entrada-nick1').val() == '') || ($('#entrada-nick2').val() == '') ) {
			alert('Os dois nomes devem ser preenchidos');
			return false;
		} else {
			$('#corpo-jogo').show();
			$('#inicio-jogo').hide();
			$('#nick1').text($('#entrada-nick1').val());
			$('#nick2').text($('#entrada-nick2').val());
		}
	});

	$(".jogada").click(function(){
		var id_da_div;
		id_da_div = (this).id;
		$('#'+id_da_div).off();
		clicou(id_da_div);

	});

	function clicou(id){
		var icon;
		var ponto;

		if((rodada % 2) == 1){
			icon = 'url(imagens/marcacao_1.png)';
			ponto = -1;
		} else {
			icon = 'url(imagens/marcacao_2.png)';
			ponto = 1;
		}

		rodada++;

		$('#'+id).css({'background-image' : icon });

		var linha_coluna = id.split('-');

		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
	
		verifica_combinacao();
	}

	function verifica_combinacao(){

		//verifica na horizontal
		var pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['a'][i];
		}
		ganhador(pontos);

		pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);

		pontos = 0;
		for(var i = 1; i <= 3; i++){
			pontos = pontos + matriz_jogo['c'][i];
		}
		ganhador(pontos);

		//verifica na vertical
		for(var l = 1; l <= 3; l++){
			pontos = 0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];

			ganhador(pontos);
		}

		//verificar na diagonal
		pontos = 0;
		pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		ganhador(pontos);

		pontos = 0;
		pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		ganhador(pontos);

	}

	function ganhador(pontos){
		if(pontos == -3){
			var jogada_1 = $('#entrada-nick1').val();
			alert(jogada_1 + ' é o vencedor');
			$('.jogada').off();
		
		} else if(pontos == 3){
			var jogada_2 = $('#entrada-nick2').val();
			alert(jogada_2 + ' é o vencedor');
			$('.jogada').off();
		}
	}


});