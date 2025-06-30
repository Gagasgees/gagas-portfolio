 /*============== SHOW MENU =============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*========= MENU SHOW ========*/
/* Validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======= MENU HIDDEN ========*/
/* Validate if constant exist */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE =================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__linkk, we remove the show-menu click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============== SHADOW HEADER ====================*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*============== SEND EMAIL ============= */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
       e.preventDefault(); // mencegah refresh halaman default

        // Ambil data dari input form
        const name = document.getElementById('name').value;
        const from = document.getElementById('from').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Tampilkan pesan loading kepada pengguna
        contactMessage.textContent = "Mengirim email... Mohon tunggu.";
        contactMessage.style.color = "white";

        try {
            // Kirim permintaan ke server
            const response = await fetch('https://formspree.io/f/mkgbyopw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, from, subject, message }),
            });

            // Tangani respons dari server
            if (response.ok) {
                
                contactMessage.textContent = "✅ Message sent successfully."; // Tampilkan pesan sukses
                contactMessage.style.color = "green";
                contactForm.reset(); // Reset form setelah sukses
            } else {
                ;
                contactMessage.textContent = "❌ Message failed. Please try afain."; // Tampilkan pesan error
                contactMessage.style.color = "red";
            }
        } catch (error) {
            contactMessage.textContent = "❌ An error occurred. Please try again. "; // Tampilkan pesan error
            contactMessage.style.color = "red";
        }
    });
}

/*================ SHOW SCROLL UP =================*/
const scrollup = () => {
    const scrollup = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
} 
window.addEventListener('scroll', scrollup)

/*================ SCROLL SECTIONS ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*================ DARK LIGHT THEME ================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme) 
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*================= SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // untuk mengulang animasi
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {origin: 'right'})