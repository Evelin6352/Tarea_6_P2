function abrirRegalo(event){
    const image = event.currentTarget;
    image.src = 'iconos/giphy.gif';

    const mensaje = document.querySelector('h1');
    mensaje.innerText = '¡Felicidades! 🎉';

    
    image.removeEventListener('click', abrirRegalo);


}

const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);