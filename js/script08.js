function validarCPF() {
    const cpf = document.getElementById("cpf").value.replace(/[^\d]+/g, ''); 

    if (cpf.length !== 11) {
        document.getElementById("resultado").innerHTML = "CPF inválido! O CPF deve ter 11 dígitos.";
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        document.getElementById("resultado").innerHTML = "CPF inválido! O CPF não pode ter todos os números iguais.";
        return;
    }

    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    let digito1 = 11 - (soma % 11);
    if (digito1 >= 10) digito1 = 0;

    soma = 0;
    peso = 11;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    soma += digito1 * 2;
    let digito2 = 11 - (soma % 11);
    if (digito2 >= 10) digito2 = 0;

    if (cpf[9] == digito1 && cpf[10] == digito2) {
        document.getElementById("resultado").innerHTML = "CPF válido!";
    } else {
        document.getElementById("resultado").innerHTML = "CPF inválido! Os dígitos verificadores estão errados.";
    }
}
