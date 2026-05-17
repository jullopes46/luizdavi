const textoNasc = document.getElementById('nasc').innerText;
const dataMath = textoNasc.match(/(\d{2})\/(\d{2})\/(\d{4})/);

if (dataMath) {
    const diaNasc = parseInt(dataMath[1]);
    const mesNasc = parseInt(dataMath[2]) - 1;
    const anoNasc = parseInt(dataMath[3]);

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();

    let idade = anoAtual - anoNasc;

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--;
    }

    const campoResposta = document.getElementById('resposta');
    campoResposta.innerText = `Idade: ${idade} anos`;
}
