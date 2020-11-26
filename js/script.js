
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

