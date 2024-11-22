
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


const mapa = document.getElementById('titulo-mapa');
let texto = "Muestra tu Ubicación, Recarga la pagina y ve el efecto"




function mostrarTitulo(objeto, texto, indice = 0){
        
        objeto.textContent += texto[indice]

        
        if(indice === texto.length-1) return;
        setTimeout(() => mostrarTitulo(mapa, texto, indice+1), 150 )
        
}

mostrarTitulo(mapa, texto);
