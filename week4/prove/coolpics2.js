const nav = document.querySelector('nav')
const toggleButton = document.querySelector('.menu')
const gallery = document.querySelector('.container');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

toggleButton.addEventListener('click', () =>{
    nav.classList.toggle('active');
});


gallery.addEventListener('click', openModal);

function openModal(e) {
    if(e.target.tagName === 'IMG'){
        const smallImageSrc = e.target.src;
        const fullImageSrc = smallImageSrc.replace('coolpic.jpg', 'norris-full.jpg');
        
        modalImage.src = fullImageSrc;
        modalImage.alt = e.target.alt;

        
    }
    
}


closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
     


window.addEventListener('resize', () => {
    if(window.innerWidth >= 700) {
        nav.classList.remove('active');
    }
})