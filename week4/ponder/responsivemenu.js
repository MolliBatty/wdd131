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
          

const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', function(){
    btn.classList.toggle('open');
})

// btn.addEventListener('click', function(){
//     btn.classList.toggle('close');
// })

// transition: transform 0.7s ease-in-out;