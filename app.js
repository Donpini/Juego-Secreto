let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados= [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); // seleccionando la etiquieta h
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // captura el numero ingresado por el usuario y lo pasa  a entero. 

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos=== 1) ? 'vez ' : 'veces'}.`); //template string `` y opererador ternario 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{

        //si el usuario no acepto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero Secreto es menor');
        }else{
            asignarTextoElemento('p','El numero Secreto es mayor');
        }

        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value=" ";
}
function GenerarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo) + 1;

    //si ya se sortearon todos los numeros 
    if(listaNumerosSorteados.length== numeroMaximo){

        asignarTextoElemento('p','Ya se asignaron todos los números posibles');

    }else{
        // si el numero generado, esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        
        }

    }

    
    
    
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);  
    numeroSecreto= GenerarNumeroSecreto();
    intentos= 1;
    
}

function reiniciarJuego( ) {

    //1. se necesita limpiar la caja
    limpiarCaja();
    //2. indicar mensaje de intervalos de numeros.
    //3. Generar el numero aleatoreo.
    //4. Inicializar el numero de intentosl.
    condicionesIniciales();
    //5. deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();