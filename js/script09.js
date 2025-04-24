function converterTempo() {
    const horas = parseFloat(document.getElementById("horas").value);
    
    if (isNaN(horas) || horas < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um valor válido para as horas.";
        return;
    }
    const minutos = horas * 60;
    const segundos = minutos * 60;

    document.getElementById("resultado").innerHTML = `${horas} horas equivalem a ${minutos} minutos ou ${segundos} segundos.`;
}
