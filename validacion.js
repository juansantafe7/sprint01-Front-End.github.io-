let parrafo = document.getElementById('invisible');
let boton01 = document.getElementById('boton');

boton01.addEventListener('click',function(){

    parrafo.style.display = 'flex';
    boton01.style.display = 'none';

})

let parrafo2 = document.getElementById('invisible2');
let boton02 = document.getElementById('boton2');


boton02.addEventListener('click',function(event){

    event.preventDefault();
    parrafo2.style.display = 'flex';
    boton02.style.display = 'none';

})


