var botao = document.querySelector("#adicionar-pessoa");

botao.addEventListener("click", function(event){
	event.preventDefault();

	var nomePaciente = document.querySelector("#nome-usr");
	var pesoPaciente = document.querySelector("#peso-usr");
	var alturaPaciente = document.querySelector("#altura-usr");
	
	var novoPaciente = "<tr class='pessoa'>"+
							"<td class='info-nome'>"+nomePaciente.value+"</td>"+
							"<td class='info-peso'>"+pesoPaciente.value+"</td>"+
							"<td class='info-altura'>"+alturaPaciente.value+"</td>"+
							"<td class='info-imc'></td>"+
						"</tr>";


	var tabela = document.querySelector("table");

	tabela.innerHTML = tabela.innerHTML + novoPaciente; 
});