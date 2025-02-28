function atualizarContador() {
    const dataInicial = new Date("2024-03-10T00:00:00"); // Data ajustada para que 10/03/2025 marque 1 ano
    const agora = new Date();
    
    let diferenca = agora - dataInicial;
    
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    diferenca %= 1000 * 60 * 60 * 24 * 365;
    
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
    diferenca %= 1000 * 60 * 60 * 24 * 30;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    diferenca %= 1000 * 60 * 60 * 24;
    
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    diferenca %= 1000 * 60 * 60;
    
    const minutos = Math.floor(diferenca / (1000 * 60));
    diferenca %= 1000 * 60;
    
    const segundos = Math.floor(diferenca / 1000);
    
    document.getElementById("contador").innerText = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

