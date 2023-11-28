const imagenes = document.querySelectorAll('.img-virtud')
const cuadradoLight = document.querySelector('.cuadrado-blanco')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const textoImagen = document.querySelector('.texto-imagen')
const menu1 = document.querySelector('.menu')
var figuras = document.querySelectorAll(".myFigure");

//Al hacer click en una de las imagenes de clase se obtiene su src
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
//Al hacer click en una figura de la clase se obtiene el figcaption anclado a la imagen
figuras.forEach(figura => {
    figura.addEventListener('click', () => {
        var figcaption = figura.querySelector("figcaption");
        var contenido = figcaption.textContent;
        aparecerTexto(contenido)
    });
});

contenedorLight.addEventListener('click', (e) =>{
    if(e.target !== cuadradoLight && !cuadradoLight.contains(e.target)){
        contenedorLight.classList.toggle('show')
        cuadradoLight.classList.toggle('showImage')
        menu1.style.visibility = "visible";
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    cuadradoLight.classList.toggle('showImage')
    menu1.style.visibility = "hidden";
}
const aparecerTexto = (texto) => {
    textoImagen.textContent = texto;
}