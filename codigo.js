
//QUITA TODAS LAS CLASES Y APARECEN HASTA QUE HAY UN CLICK
const activar = document.querySelectorAll('.nav-link');

activar.forEach(recorrer => {
    recorrer.addEventListener('click', () =>{
            removerClase();

            recorrer.classList.add('active');

    });
});

function removerClase(){
        activar.forEach(quitar => {
           quitar.classList.remove('active'); 
        });
};


