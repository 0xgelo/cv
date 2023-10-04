
const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const openNavHandler = () => {
        navMenu.style.display = 'flex'
        navOpenBtn.style.display = 'none'
        navCloseBtn.style.display = 'inline-block'
    }
    const closeNavHandler = () => {
        navMenu.style.display = 'none'
        navOpenBtn.style.display = 'inline-block'
        navCloseBtn.style.display = 'none'
    }
    
navOpenBtn.addEventListener('click', openNavHandler)

navCloseBtn.addEventListener('click', closeNavHandler)
const navItems = navMenu.querySelectorAll('a')
if(window.innerWidth < 768){
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    })
}




