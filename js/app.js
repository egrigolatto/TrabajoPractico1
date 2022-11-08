//menu responsive

let menuMobile = document.querySelector('#menuMobile')
let navegacion = document.querySelector('#navegacion')

menuMobile.addEventListener('click', ()=>{
    
    navegacion.classList.toggle('miclase')
})

