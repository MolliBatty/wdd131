
let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);


    document.querySelector('.html').style.backgroundColor = '';
    document.querySelector('.css').style.backgroundColor = '';
    document.querySelector('.js').style.backgroundColor = '';
    
    if (codeValue === 'html'){
        document.querySelector(".html").style.backgroundColor = "#f59542";
    } else if (codeValue === 'css'){
        document.querySelector(".css").style.backgroundColor = "#42a4f5";
    } else if (codeValue === 'js') {
        document.querySelector(".js").style.backgroundColor = "#f542f2";
    }
});