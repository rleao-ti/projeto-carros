// Seleção de elementos
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

// Variáveis de controle
let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função para atualizar o slider
function setSlider() {
    // Remover a classe active do item atual
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    // Atualizar os indicadores
    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }
    if (dots[active]) {
        dots[active].classList.add('active');
    }

    const numberElement = indicator.querySelector('.numbers');
    if (numberElement) {
        numberElement.textContent = String(active + 1).padStart(2, '0');
    }

    // Adicionar a classe active ao item atual
    items[active].classList.add('active');
}

// Botão "Próximo"
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1);  // Para animação à direita
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
}

// Botão "Anterior"
prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1); // Para animação à esquerda
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
}

// Inicializa o slider, aplicando a classe 'active' ao primeiro item
document.addEventListener("DOMContentLoaded", () => {
    setSlider(); // Aplica a classe 'active' no primeiro item assim que o DOM carregar
});
