const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0; // para o aleatorio
let intervalId = null; // para nao acelerar o aleatorio

/*const trafficLght = (event) => {
    console.log (event);
} voce ve tudo o que esta recebendo desse evento */

/*const trafficLght = (event) => {
    console.log ( event.target.id ); //vendo o evento , voce pode direcionar o que voce com . e o nome o evento desejado.
} */

/*const trafficLght = (event) => {
    if ( event.target.id == 'red' ) {
        turnOnRed()
    };  se o evento escrito for red ele vai pra function turnOnRed. 
} */

const trafficLght = (event) => {
    stopAutomatic(); // para nao acelerar o automatic ,e sim deixar na velocidade que foi programado
    // turnOn.red(); quando voce clicar em qualquer botao ele vai ser vermelho
    turnOn[event.target.id](); // usa o [] quando for chamar alguma coisa no event
    
} 

const nextIndex = () => {
    
    /*colorIndex = colorIndex < 2 ? ++colorIndex : 0;  mesma coisa do if embaixo, nao
    precisa dos {} podendo deixar ele na frente do => que funcionaria normalmente.*/

    if ( colorIndex < 2) {
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

const changeColor = () => {
    //console.log ('teste cor'); testar para ver se aparece e se vai comecar uma repetição 
    /*const color = 'red' ;
    turnOn[color](); a cada um segundo ele vai para a cor red*/
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn [color] ();
    nextIndex();
}

// variavel para nao acelerar o aleatorio
const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    //intervalId para conseguir parar o aleatorio
    'automatic': () => intervalId = setInterval( changeColor, 1000 )//o setInterval vai realizar a function changeColor a cada um segundo 
}

buttons.addEventListener('click', trafficLght );