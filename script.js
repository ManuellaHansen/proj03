// Entrada de Dados
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let cadastro = prompt("Possui cadastro? (S/N)").toUpperCase();
let autorizacao = prompt("Possui autorização especial? (S/N)").toUpperCase();
let acompanhado = prompt("Está acompanhado? (S/N)").toUpperCase();

// Validação inicial

if (cadastro === "N") {
    alert("Acesso negado: usuário não cadastrado.");
} else {

    //Maior de idade
    if (idade >= 18) {
        alert("Acesso liberado!");
    } else {
    }
        //Validação adicional (OR)
        if (idade < 18 || autorizacao !== "S") {

        //IF Aninhado
        if (acompanhado === "S") {
            alert("Entrada permitida com responsável.");
        } else {
            alert("Acesso negado: menor desacompanhado.");
        }
    }
}

