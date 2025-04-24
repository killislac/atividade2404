function calcularFatorial() {
  const numero = document.getElementById("numero").value;
  let resultado = 1;

  if (numero < 0) {
      document.getElementById("resultado").innerHTML = "Por favor, insira um número positivo.";
  } else {
      for (let i = 1; i <= numero; i++) {
          resultado *= i;
      }
      document.getElementById("resultado").innerHTML = `O fatorial de ${numero} é ${resultado}.`;
  }
}
