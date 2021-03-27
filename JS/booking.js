const form = document.querySelector('form');

const fullName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');

const error = document.querySelector('.error');
const submit = document.querySelector('.submit');

form.addEventListener('submit', validateInformation);

function validateInformation(e){

    error.style.padding = '1em';

    if(isNaN(phone.value) || phone.value.length != 11){
        error.textContent = 'Enter a valid Phone Number.';
        e.preventDefault();
    }

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        error.textContent = 'Enter a valid Email Address.';
        e.preventDefault();
    }

    if(fullName.value.length < 6){
        error.textContent = 'Full Name is required.';
        e.preventDefault();
    }

        return true;
}