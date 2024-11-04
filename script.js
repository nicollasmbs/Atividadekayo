function adicionarAoCarrinho(produto) {
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push(produto);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produto} adicionado ao carrinho!`);
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');

    if (document.documentElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
});

function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach((produto, index) => {
        let item = document.createElement('li');
        item.textContent = produto;

        let removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.classList.add('remover-item');
        removerButton.onclick = function() {
            removerItem(index);
        };

        item.appendChild(removerButton);
        listaCarrinho.appendChild(item);
    });
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1); 
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); 
    exibirCarrinho(); 
}

exibirCarrinho();