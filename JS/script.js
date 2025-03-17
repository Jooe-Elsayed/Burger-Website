
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//? Menu Show 
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

//? Menu hidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//? Remove Menu Mobile
const navLink = document.querySelectorAll('.nav--link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//? Add Show Header
const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50  ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

//? Show Scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);



//? Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]')
    const scrollActive = () => {
        const scrollDown = window.screenY
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active--link')
            }else{
                sectionClass.classList.remove('active--link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive);


    //? Scroll Reveal Animation 
    const sr = ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:2000,
        delay:200,
    })

    sr.reveal(`.home--data, .footer`);
    sr.reveal(`.home--dish`, {delay:500, distance:'100px', origin:'bottom'})
    sr.reveal(`.home--burger`, {delay:1200, distance:'100px', duration:1500})
    sr.reveal(`.home--ingredient`, {delay:1000, interval:100})
    sr.reveal(`.recipe--img, .delivery--img, .contact--image`,  {origin:'left'})
    sr.reveal(`.recipe--data, .delivery--data, .contact--data`, {origin:'right'})
    sr.reveal(`.popular--card`, {interval:100})