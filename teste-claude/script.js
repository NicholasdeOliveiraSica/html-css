// Seleciona os elementos necessários do DOM
const carousel = document.querySelector('.course-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Calcula algumas métricas importantes
let scrollPosition = 0;
const cardWidth = 320; // Largura de cada card, incluindo margem
const carouselWidth = carousel.offsetWidth;
const maxScroll = carousel.scrollWidth - carouselWidth;

// Adiciona os event listeners aos botões de navegação
prevBtn.addEventListener('click', () => {
  // Calcula a nova posição de rolagem para a esquerda
  scrollPosition = Math.max(scrollPosition - cardWidth, 0);
  carousel.scrollLeft = scrollPosition;
});

nextBtn.addEventListener('click', () => {
  // Calcula a nova posição de rolagem para a direita
  scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
  carousel.scrollLeft = scrollPosition;
});

// Função para atualizar a posição de rolagem do carrossel
function updateCarouselPosition() {
  // Atualiza a posição de rolagem do carrossel
  carousel.scrollLeft = scrollPosition;
}

// Configura a posição inicial do carrossel
updateCarouselPosition();

// Adiciona um event listener para detectar mudanças no tamanho da janela
window.addEventListener('resize', () => {
  // Recalcula as métricas do carrossel após a mudança de tamanho
  carouselWidth = carousel.offsetWidth;
  maxScroll = carousel.scrollWidth - carouselWidth;
  updateCarouselPosition();
});


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //


const carousel2 = document.querySelector('.course-carousel2');
const prevBtn2 = document.querySelector('.prev-btn2');
const nextBtn2 = document.querySelector('.next-btn2');

// Calcula algumas métricas importantes
let scrollPosition2 = 0;
const cardWidth2 = 320; // Largura de cada card, incluindo margem
const carouselWidth2 = carousel2.offsetWidth;
const maxScroll2 = carousel2.scrollWidth - carouselWidth2;

// Adiciona os event listeners aos botões de navegação
prevBtn.addEventListener('click', () => {
  // Calcula a nova posição de rolagem para a esquerda
  scrollPosition2 = Math.max(scrollPosition2 - cardWidth2, 0);
  carousel2.scrollLeft = scrollPosition2;
});

nextBtn.addEventListener('click', () => {
  // Calcula a nova posição de rolagem para a direita
  scrollPosition2 = Math.min(scrollPosition2 + cardWidth2, maxScroll);
  carousel2.scrollLeft = scrollPosition2;
});

// Função para atualizar a posição de rolagem do carrossel
function updateCarouselPosition2() {
  // Atualiza a posição de rolagem do carrossel
  carousel2.scrollLeft = scrollPosition2;
}

// Configura a posição inicial do carrossel
updateCarouselPosition2();

// Adiciona um event listener para detectar mudanças no tamanho da janela
window.addEventListener('resize', () => {
  // Recalcula as métricas do carrossel após a mudança de tamanho
  carouselWidth2 = carousel2.offsetWidth;
  maxScroll2 = carousel2.scrollWidth - carouselWidth2;
  updateCarouselPosition2();
});