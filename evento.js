
const data_evento = 25;

var data_atual = 25;
var quant_partic = 50;
var idade_part = 15;

var cancela_cadastro_idade = "cadastro cancelado por ser menor de 18 anos";
var cancela_cadastro_data_inv = "cadastro cancelado por data inválida";
var cancela_cadastro_quantidade = "cadastro cancelado por exceder limite de participantes";

console.log("Data do evento: " + data_evento);
console.log("Data atual: "+data_atual);

if (data_atual != data_evento){
    if (quant_partic < 100) {
        console.log("Quantidade de participantes cadastrados: "+quant_partic+" prosseguir cadastro.");
        console.log("Sua idade é "+idade_part);
        if (idade_part > 18) {
            console.log("SUcesso! FIM")
        } else {
            console.log(cancela_cadastro_idade);
        }
    } else 
    console.log (cancela_cadastro_quantidade);
} else
console.log(cancela_cadastro_data_inv);


