
let JogosAlugados = 1; 

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            JogosAlugados--; // Decrementa a quantidade de jogos alugados
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        JogosAlugados++; // Incrementa a quantidade de jogos alugados
    }

    quantidadeDeJogos(); // Chama a função para mostrar a quantidade atual de jogos alugados
}

function quantidadeDeJogos() {
    console.log(`Total de jogos alugados: ${JogosAlugados}`);
}