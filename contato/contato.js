//js para confirmação do envio do formulário

const submitEnviar = document.getElementById("submitEnviar");
const nomeEmpresa = document.getElementById("nomeEmpresa");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

submitEnviar.addEventListener("click", confirmarEnvio)

function confirmarEnvio() {
    if (nomeEmpresa.value == "" | email.value == "" | telefone.value == ""){
        alert("Preencha os campos obrigatórios!");
    }else{
        alert("Formulário enviado com sucesso!");
    }
}

  

  