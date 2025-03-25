// TEXT Animation 1
const h1nav = document.querySelector('.nav-holder h1')
h1nav.textContent = 'rama'
function text_animation_1 (){
    h1nav.textContent = 'dhoni'    
    function text_animation_2(){
        h1nav.textContent = 'rama'
    }
    setTimeout(text_animation_2,5000)
}
setInterval(text_animation_1,10000)

// MENUCLICK
const menubtn = document.querySelector('.menubtn')

menubtn.addEventListener('click',function menuclick(){
    menubtn.classList.toggle('use')
    document.querySelector('.menulist').classList.toggle('use')
})

// NAV ACTIVE
const nav_links = document.querySelectorAll('.menu-list a')

