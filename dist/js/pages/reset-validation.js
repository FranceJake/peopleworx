const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const regName = document.querySelector('#fName-reg');
const password2 = document.querySelector('#pass2-reg');

const inputControl = document.querySelectorAll('.inputControl');
const errorDisplay = document.querySelector('.error');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    //const passwordValue = password.value.trim();
    //const password2Value = password2.value.trim();
    //const regNameValue = regName.value.trim();

    if(emailValue === '') {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address")
    } else {
        setSuccess(email);
    }

    /*if(passwordValue === '') {
        setError(password, "Password is required");
    } else if (passwordValue.length < 12) {
        setError (password, "Password must be at least 12 character")
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if(regNameValue === '') {
        setError(regName, "Name is required")
    } else {
        setSuccess(regName);
    }*/
};