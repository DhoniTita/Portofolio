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
// TEXT Animation 2

const profesion = document.querySelector('.home_profesion i')

function text_animation2(){
    profesion.textContent = 'designer'
    function text_animation2_1(){
        profesion.textContent = 'editor'
        function text_animation2_2(){
            profesion.textContent = 'web_development'
            
        }
        setTimeout(text_animation2_2,1000 * 10)
    }
    setTimeout(text_animation2_1,1000 * 10)
}
setTimeout(text_animation2,1)
setInterval(text_animation2,1000 * 30)
// MENUCLICK
const menubtn = document.querySelector('.menubtn')

menubtn.addEventListener('click',function menuclick(){
    menubtn.classList.toggle('use')
    document.querySelector('.menulist').classList.toggle('use')
})

// NAV ACTIVE
const main = document.querySelector('main')
let section = document.querySelectorAll('section')
let navlikn = document.querySelectorAll('.menulist ul li a')

main.addEventListener('scroll',() => {
    section.forEach(sec => {
        let top = main.scrollTop
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlikn.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.menulist ul li a[href*='+ id +']').classList.add('active')
            })
        }
    })
})

// TEXT PROPERTY
document.querySelector('.name').textContent = 'i ramadhoni'

function SendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_83zjqb7', 'template_edfp4ee', parms)
        .then(alert("Your message has been sent successfully!"));
}