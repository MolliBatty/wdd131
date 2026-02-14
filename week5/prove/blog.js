const spans = document.querySelectorAll('#info p');

spans.forEach((p) => {
    if (p.innerText.includes('⭐')){
        const stars = p.innerText.length;
        p.setAttribute('aria-label', `${stars} out of 5 stars`);
    }
    
});