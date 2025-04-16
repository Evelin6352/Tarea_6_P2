function abrirRegalo(event){
    
    const newHeader = document.createElement('h1');
    newHeader.textContent = '¡Felicidades! Has abierto el regalo.';

    const newImage = document.createElement('img');
    newImage.src = 'iconos/giphy.gif';

    const container = document.querySelector('#container');
    container.innerHTML = ''; 
    container.appendChild(newHeader);
    container.appendChild(newImage);

}


const image = document.querySelector('img');
image.addEventListener('click', abrirRegalo);
