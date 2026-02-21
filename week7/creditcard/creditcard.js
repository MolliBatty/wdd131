const form = document.getElementById('creditcardform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cardNumber = document.getElementById('cardnumber').value.replace(/\s/g, '');
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear() % 100;

    if (cardNumber !== '1234123412341234') {
        alert('Invalid card number!');
        return;
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        alert('Card is expired!');
        return;
    }

    form.submit();
});