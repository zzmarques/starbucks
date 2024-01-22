const imgCopo = document.querySelector(".starbucks");
const copoVerde = document.querySelector(".verde");
const copoAmarelo = document.querySelector(".amarelo");
const copoRosa = document.querySelector('.rosa');
const circulo = document.querySelector('#circulo');


copoVerde.addEventListener('click', () => {
    imgCopo.src = 'img/img1.png';
    circulo.style.background = '#017143';
})

copoAmarelo.addEventListener('click', () => {
    imgCopo.src = "img/img2.png";
    circulo.style.background = '#eb7495'

})

copoRosa.addEventListener('click', () => {
    imgCopo.src = 'img/img3.png';
    circulo.style.background = "#d752b1"
})
