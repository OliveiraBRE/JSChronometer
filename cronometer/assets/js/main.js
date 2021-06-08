const relogio = document.querySelector('.relogio');
let seconds = 0;
let timer;

/*
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', (e) => {
  clearInterval(timer) // para garantir que o relogio não vai se descontrolar
  relogio.classList.remove('pausado');
  startClock();
});

pausar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.classList.add('pausado');
});

zerar.addEventListener('click', (e) => {
  clearInterval(timer);
  relogio.innerText = '00:00:00';
  seconds = 0;
  relogio.classList.remove('pausado');
})
*/
// substituindo o código acima
document.addEventListener('click', (e) => {
  // target captura o elemento clicado no document
  const element = e.target;

  if(element.classList.contains('iniciar')) {
    clearInterval(timer) // para garantir que o relogio não vai se descontrolar
    relogio.classList.remove('pausado');
    startClock();
  }

  if(element.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado'); 
  }

  if(element.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerText = '00:00:00';
    seconds = 0;
    relogio.classList.remove('pausado');
  }

})


function getTimeFromSeconds(seconds){
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR',{
    hour12 : false,
    timeZone : 'GMT'
  });
}


// starta o relogio 
// atualiza o inner do relogio
function startClock(){
  timer = setInterval(() => {
    seconds++;
    relogio.innerText = getTimeFromSeconds(seconds);
  }, 1000);
}