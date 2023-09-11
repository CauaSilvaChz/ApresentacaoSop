const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.navmenu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})


const img = document.querySelector('.imgPecas')
const placaMae = document.querySelector('#placaMae');
const processador = document.querySelector('#processador')
const placaDeVideo = document.querySelector('#placaDeVideo')
const ram = document.querySelector('#ram')
const hd = document.querySelector('#hd')
const per = document.querySelector('#perifericos')


placaMae.addEventListener('click', () => {
    img.setAttribute('src', 'img/placaMae.png')
})

processador.addEventListener('click', () => {
    img.setAttribute('src', 'img/processador.png')
})

placaDeVideo.addEventListener('click', () => {
    img.setAttribute('src', 'img/placaDeVideo.png')
})

ram.addEventListener('click', () => {
    img.setAttribute('src', 'img/RAM.png')
})

hd.addEventListener('click', () => {
    img.setAttribute('src', 'img/HD.png')
})

per.addEventListener('click', () => {
    img.setAttribute('src', 'img/perifericos.png')
})