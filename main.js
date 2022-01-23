const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const showMsg = () => {
	if (pass.value.length >= minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
				p.textContent = 'Twoje hasło jest idealne';
                p.style.color = "lime";
			} else if (pass.value.length >= minValue && pass.value.match(letters)  && pass.value.match(special)) {
                p.textContent = 'brakuje cyfry';
                p.style.color = "orange";
            } else if (pass.value.length >= minValue && pass.value.match(numbers)  && pass.value.match(special)) {
                p.textContent = 'brakuje litery';
                p.style.color = "orange";
            } else if (pass.value.length >= minValue && pass.value.match(letters)  && pass.value.match(numbers)) {
                p.textContent = 'brakuje znaku specjalnego';
                p.style.color = "orange";
            } else if (pass.value.length < minValue) {
                p.textContent = 'hasło za krótkie';
            } else if (pass.value.length >= minValue) {
                p.textContent = 'wpisz cyfrę, znak specjalny';
            }
        
        }
            
        
    
pass.addEventListener('keyup', showMsg);
