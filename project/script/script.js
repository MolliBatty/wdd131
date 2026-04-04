console.log("JavaScript is loaded!");

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

const spotlightImages = document.querySelectorAll('.spotlight img');

function openModal(image) {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    captionText.textContent = image.alt;
}

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

spotlightImages.forEach(image => {
    image.addEventListener('click', function () {
        openModal(this);
    });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

const spotlightTitles = Array.from(spotlightImages).map(img => img.alt);
console.log(spotlightTitles);