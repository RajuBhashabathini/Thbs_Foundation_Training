function validate() {

	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	const pass = document.getElementById('pass').value;
	const phone = document.getElementById('phone').value;
	const dob = document.getElementById('dob').value;
	const accountType = document.getElementById('accountType').value;

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