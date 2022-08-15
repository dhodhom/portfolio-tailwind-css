// Navbar Fixed
window.onscroll = function() {
    const toTop = document.querySelector('#to-top')
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        
        toTop.classList.add('flex')
        toTop.classList.remove('hidden')
    }else{
        header.classList.remove('navbar-fixed')

        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Klik diluar Hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

if(localStorage.getItem('theme')){
    html.classList.add('dark')
    darkToggle.checked=true
}

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark'
    }else{
        html.classList.remove('dark')
        localStorage.clear()
    }
})