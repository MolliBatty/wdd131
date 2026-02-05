// go find all of the ratings and add the correct label
// set the attribute and set the correct thing
// parentheses indicates parameters


// could do this
// function addStars(span){
//     const stars = span.innerText.length;
//     span.setAttribute('aria-label', `${stars} out of 5 stars`);
// }

const spans = document.querySelectorAll('article.movie p span');

spans.forEach((span) => {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
});

// spans.forEach(addStars);

// for(let i = 0; i < spans.length; i++){
//     addStars(spans[i]);
// }