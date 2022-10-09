//asign correlating html nodes to vars
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.navMenu');
let navlinks = document.querySelectorAll('.navLink');

navlinks.forEach(link => {
  //untoggles mobile nav menu when link is clicked
  link.addEventListener('click',() =>{
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
  })
})

//add class active if hamburger is clicked to trigger css animation
hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
