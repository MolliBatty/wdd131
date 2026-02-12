const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape', 'banana','kiwi','strawberry','blueberry','raspberry'];

const ul = document.getElementById('fruit-list');

fruits.forEach((fruits) => {
    const li = document.createElement('li');
    li.textContent = fruits;
    ul.appendChild(li); 
    // adds list before </ul>
});

// let html = '';

// fruits.forEach((fruit) =>{
//     html += `<li>${fruit}</li>`;
// });

// ul.innerHTML = html;

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
    }
}
