let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionar = "sim";  
while(adicionar != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionar = prompt("Você deseja adicionar algo a mais? Diga 'sim' ou 'não'.");
    } else {
        adicionar = prompt("Você deseja adicionar algo a mais? RDiga 'sim', 'não' ou 'apagar'.");
    }
	
    while (adicionar != "sim" && adicionar != "não" && adicionar != "apagar") {  
	alert(`Operação não reconhecida!`);
        adicionar = prompt("Você deseja adicionar algo a mais? Diga 'sim' ou 'não'.");
    }
	
    if (adicionar === "não"){  
	break;
    }
	
    if(adicionar === "sim"){
        comida = prompt("O que você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'laticínios'){
            laticinios.push(comida);
        } else if (categoria === 'doces'){
            doces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Categoria não definida.")
        }
    } else if(adicionar === "apagar"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  
		alert(`A lista está vazia!`);
	} else {  
		apagar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você quer apagar?`);
		if(frutas.indexOf(apagar) != -1){
			frutas.splice(frutas.indexOf(apagar), 1);
			alert(`O item ${apagar} foi apagado!`)
		} else if(laticinios.indexOf(apagar) != -1){
			laticinios.splice(laticinios.indexOf(apagar), 1);
			alert(`O item ${apagar} foi apagado!`)
		} else if (doces.indexOf(apagar) != -1){
			doces.splice(doces.indexOf(apagar), 1);
			alert(`O item ${apagar} foi apagado!`)
		} else if (congelados.indexOf(apagar) != -1){
			congelados.splice(congelados.indexOf(apagar), 1);
			alert(`O item ${apagar} foi apagado!`)
		} else {
			alert(`Não achamos esse item solicitado!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);

        