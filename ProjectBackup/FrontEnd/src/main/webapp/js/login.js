function doLogin() {

	
	const email = document.getElementById('email').value;
	const pass = document.getElementById('pass').value;
	

	//TODO : add validation for each field

	const customerObj = {};
	customerObj.firstName = firstName;
	customerObj.lastName = lastName;
	customerObj.email = email;
	customerObj.phone = phone;
	customerObj.password = pass;
	customerObj.dob = dob;
	customerObj.accountType = accountType;

	addCustomer(customerObj);

}
async function addCustomer(customerObj) {
	const url = 'http://localhost:9090/customer';

	const data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(customerObj)
	};
	const rawResponse = await fetch(url, data);
	const content = await rawResponse.json();

	console.log(content);
}