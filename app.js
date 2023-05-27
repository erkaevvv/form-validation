const registeredUsers = [
	['admin', 'KoI18'],
	['manager', 'SuperMe108'],
	['editor', '12345'],
];

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const login = document.querySelector('[name=login]');
const password = document.querySelector('[name=password]');

inputs.forEach(input => input.addEventListener('keypress', handleEvent));

function handleEvent(e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		e.target.nextElementSibling.focus();
	}
}

form.addEventListener('submit', handleSubmit);

function handleSubmit() {
	if (validate()) {
		alert('Access granted');
		form.reset();
	}
}

function validate() {
	if (!(login.value.trim() && password.value.trim())) {
		alert('All fields are required');
		return false;
	}
	for (let user of registeredUsers) {
		if (login.value === user[0] && password.value === user[1]) {
			return true;
		}
	}
	alert('Incorrect login or password');
	return false;
}