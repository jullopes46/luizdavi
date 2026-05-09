document.addEventListener("DOMContentLoaded", function() {
    // 1. Seleciona os elementos HTML
    const nasc = document.getElementById('nascimento');
    const respota = document.getElementById('resultado');

    // 2. Obtém o texto da data (ex: "21/06/2019")
    const dataTexto = nasc.innerText.trim();
    
    // 3. Converte o formato BR (DD/MM/AAAA) para o formato que o JS entende (AAAA-MM-DD)
    const partes = dataTexto.split('/');
    const dataNascimento = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`);

    const hoje = new Date();
    
    // 4. Cálculo da idade
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    // Ajuste caso ainda não tenha chegado o dia/mês do aniversário no ano atual
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    // 5. Exibe o resultado no HTML
    respota.innerText = `${idade} anos`;
});