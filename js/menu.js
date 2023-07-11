const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-navegacion')
const elements = document.querySelectorAll('.animacion');


menu.addEventListener('click', ()=>{
    menuNav.classList.toggle("spread")
    menu.style.visibility = "hidden";
    elements.forEach(element => {
        element.classList.remove('animacion');
    })
    
})

window.addEventListener('click', e=>{
    if(menuNav.classList.contains('spread') && e.target != menuNav && e.target != menu  ){
    
        menuNav.classList.toggle("spread")
        menu.style.visibility = "visible";
        elements.forEach(element => {
            element.classList.add('animacion');
        })
        
    }
})