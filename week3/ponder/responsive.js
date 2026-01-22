const nav = document.querySelector('nav')
const toggleButton = document.querySelector('.menu-btn')

toggleButton.addEventListener('click', () =>{
    nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if(window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})
          