const getbtn = document.getElementById('getbutton');

const getdata = () => {
	/* 	let url3 = 'http://localhost:3000/';
	let url = 'https://crud1-heroku.herokuapp.com';
	let dat = {
		headers: {
			'Target-Endpoint': 'https://crud1-heroku.herokuapp.com',
		},
	}; */
	axios({
		method: 'GET',
		url: 'http://localhost:3000',
		headers: {
			'Target-URL': 'https://crud1-heroku.herokuapp.com',
			responseType: 'json',
		},
	})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
getbtn.addEventListener('click', getdata);

///post%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const getbtn2 = document.getElementById('getbutton2');

const getdata2 = () => {
	/* 	let url3 = 'http://localhost:3000';
	let url = 'https://crud1-heroku.herokuapp.com'; */
	let datos = {
		id: 0,
		name: 'Pedro David1',
		last_name: 'Perez peñate',
		salary: 3003957,
	};
	axios({
		method: 'POST',
		url: 'http://localhost:3000',
		data: datos,
		headers: { 'Target-URL': 'https://crud1-heroku.herokuapp.com' },
	})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
getbtn2.addEventListener('click', getdata2);

//delate %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const getbtn3 = document.getElementById('getbutton3');

const getdata3 = () => {
	let id = 51;
	axios({
		method: 'DELETE',
		url: 'http://localhost:3000',
		headers: {
			'Target-URL': `https://crud1-heroku.herokuapp.com/${id}`,
		},
	})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};
//jasonwatmore.com/post/2021/08/25/axios-http-delete-request-examples
https: getbtn3.addEventListener('click', getdata3);
///put%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const getbtn4 = document.getElementById('getbutton4');

const getdata4 = () => {
	let datos = {
		name: 'Pedro David111',
		last_name: 'Perez peñate',
		salary: 3003957,
	};
	axios({
		method: 'PUT',
		url: 'http://localhost:3000',
		data: datos,
		headers: { 'Target-URL': 'https://crud1-heroku.herokuapp.com/41' },
	})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
};
getbtn4.addEventListener('click', getdata4);
