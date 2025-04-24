function isPrimo(num) {
    if (num < 2) return false; // Números menores que 2 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarPrimos() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const final = parseInt(document.getElementById("final").value);
    let primos = [];

    if (inicio > final) {
        document.getElementById("resultado").innerHTML = "O valor inicial deve ser menor ou igual ao valor final.";
        return;
    }

    for (let i = inicio; i <= final; i++) {
        if (isPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length > 0) {
        document.getElementById("resultado").innerHTML = `Os números primos entre ${inicio} e ${final} são: ${primos.join(", ")}.`;
    } else {
        document.getElementById("resultado").innerHTML = `Não há números primos entre ${inicio} e ${final}.`;
    }
}
