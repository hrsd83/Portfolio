
//SCRIPT DEL TOGGLE
let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcon = document.querySelector('.menu-toggleA');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=>{
  menu.classList.toggle('show');

  // if(menu.classList.contains('show')){
  //   menuToggleIcon.setAttribute('class','bi-x-square');

  // }else{
  //   menuToggleIcon.setAttribute('class','.menu-x');
  // }
})

// SCRIPT DEL NOMBRE

const type = new Typed('.typed', {
  strings: ['<i class="nombre">Sanchez Henry</i>'
],

  typeSpeed:100, // Velocidad en milisegundos para colocar una letra
  startDelay: 300, // Velocidad en milisegundos en poner una letra
  backSpeed: 75, // Velocidad en milisegundos en borrar una letra 
  // smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto
  loop: false, //Repetir el array de strings
  showCursor:false, //Monstrar cursor palpitando
  cursorChar: '|', // Caracter para el cursor 
  contentType: 'html', //'html o null ' para texto sin formato
  backDelay: 3000, //Tiempo de espera derspues que termina de escribir una palabra

 
});


// SCRIPT DEL DESARROLLADOR
const dev = new Typed('.desarrollador', {
  strings: ['<i class="dev">Desarrollador FrontEnd</i>'
],
typeSpeed:80, // Velocidad en milisegundos para colocar una letra
startDelay: 300, // Velocidad en milisegundos en poner una letra
backSpeed: 40, // Velocidad en milisegundos en borrar una letra 
// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto
loop: true, //Repetir el array de strings
showCursor:true, //Monstrar cursor palpitando
cursorChar: '|', // Caracter para el cursor 
contentType: 'html', //'html o null ' para texto sin formato
backDelay: 1000, //Tiempo de espera derspues que termina de escribir una palabra
});

// const selector = document.querySelector('.btn-outline-dark')
// selector.classList.add('magictime', 'puffIn')


// FUNCION DE SALUDAR
function mySaludo() {
  const saludar = document.querySelector('.saludo')
  saludar.classList.add('magictime', 'twisterInDown')
 
}
setInterval(mySaludo, 1000);

//FUNCION DE ENLACES
function myEnlace() {
  const botonesEnlaces = document.querySelector('#enlaces')
  botonesEnlaces.classList.add('magictime', 'tinLeftIn')
 
}
setInterval(myEnlace, 1000);

// funcion de tecnologias html, css y javascript
function tecnologias() {
  const tecnologia = document.querySelector('.containerTenologias')
  tecnologia.classList.add('magictime', 'tinDownIn')
 
}
setInterval(tecnologias, 1000);

//Funcion del button del github
function myFunction() {
  const selector = document.querySelector('.btn-outline-dark')
  selector.classList.add('magictime', 'foolishIn')
 
}
setInterval(myFunction, 1000);

//Funcion de cards
function myTarjetas() {
  const tarjetas = document.querySelector('#cards')
  tarjetas.classList.add('magictime', 'spaceInDown')
 
}
setInterval(myTarjetas, 1000);

//Funcion de redes
function myRedes() {
  const redesSociales = document.querySelector('.header-redes')
  redesSociales.classList.add('magictime', 'tinLeftIn')
 
}
setInterval(myRedes, 1000);

//Funcion de footer
function footer() {
  const piePagina = document.querySelector('#footer2')
  piePagina.classList.add('magictime', 'openDownRightReturn')
 
}
setInterval(footer, 1000);


// FUNCION DE PARALLAX
document.addEventListener('mousemove' , parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    
    const x = (window.innerWidth - e.pageX*speed)/100
    const y = (window.innerWidth - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px)translateY(${y}px)`
  });

}






