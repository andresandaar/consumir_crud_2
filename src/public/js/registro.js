//variables registros

/* const botonregistro = document.getElementById('formulario'); */

document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('registro')
		.addEventListener('submit', validarFormulario);
});
function validarFormulario(evento) {
	const namesInput = document.getElementById('names');

	const emailInput = document.getElementById('email');

	const passwordInput = document.getElementById('password');
	const names = namesInput.value;
	const email = emailInput.value;
	const password = passwordInput.value;
	evento.preventDefault();
	if (names.length == 0) {
		alert('No has escrito nada en el usuario');
		return;
	} else if (email.length == 0) {
		alert('No has escrito nada en el usuario');
		return;
	} else if (password.length == 0) {
		alert('No has escrito nada en el usuario');
		return;
	}

	this.submit();
	let datos = {
		id: 0,
		names: names,
		email: email,
		password: password,
	};
	axios({
		method: 'POST',
		url: 'https://crud1-heroku.herokuapp.com/registro',
		data: datos,
		/* 	headers: { 'Target-URL': 'https://crud1-heroku.herokuapp.com' }, */
	})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

/* botonregistro.addEventListener('submit', () => {
	const names = namesInput.value;
	const email = emailInput.value;
	const password = passwordInput.value;
   	axios({
			method: 'POST',
			url: 'http://localhost:3000',
			data: datos,
			headers: { 'Target-URL': 'https://crud1-heroku.herokuapp.com' },
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
}); */
//fin resgitro

/* const salidaget = document.getElementById('get');
const consulta = document.getElementById('consulta');
const borrar = document.getElementById('borrar');
const borrarget = document.getElementById('get'); */

/* consultar */
/* borrar.addEventListener(
	'click',
	() => {
		borrarget.innerHTML = '';
	},
	false
);
consulta.addEventListener('click', () => {
	function generateSuccessHTMLOutput(response) {
		return (
			'<h4>Result</h4>' +
			'<h5>Status:</h5> ' +
			'<pre>' +
			response.status +
			' ' +
			response.statusText +
			'</pre>' +
			'<h5>Headers:</h5>' +
			'<pre>' +
			JSON.stringify(response.headers, null, '\t') +
			'</pre>' +
			'<h5>Data:</h5>' +
			'<pre>' +
			JSON.stringify(response.data, null, '\t') +
			'</pre>'
		);
	}
	salidaget.innerHTML = '';
	axios({
		method: 'GET',
		url: 'http://localhost:3000',
		headers: {
			'Target-URL': 'https://crud1-heroku.herokuapp.com',
			responseType: 'json',
		},
	})
		.then((response) => {
			if (response.status == 200) {
				salidaget.innerHTML = generateSuccessHTMLOutput(response);
			}
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}); */
//https://blog.logrocket.com/understanding-axios-post-requests/
