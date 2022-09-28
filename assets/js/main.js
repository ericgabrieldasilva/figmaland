const logo = document.querySelector('.logo img')
const btnOpenMenu = document.querySelector('#btn-open-menu')
const btnCloseMenu = document.querySelector('#btn-close-menu')
const body = document.querySelector('body')

// Open menu
btnOpenMenu.addEventListener('click', () => {
  body.classList.add('menu-expanded')
  logo.setAttribute('src', './assets/images/logo.png')
})

// close menu
btnCloseMenu.addEventListener('click', () => {
  body.classList.remove('menu-expanded')
  changeHeaderWhenScroll() 
})

const header = document.querySelector('header')
const navHeight = header.offsetHeight;
// change background color and logo when scroll
function changeHeaderWhenScroll(){
  if (window.scrollY >= navHeight){
    header.classList.add('scroll')
    logo.setAttribute('src', './assets/images/dark-logo.png')
  } else{
    header.classList.remove('scroll')
    logo.setAttribute('src', './assets/images/logo.png')
  }
}

changeHeaderWhenScroll()
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})
