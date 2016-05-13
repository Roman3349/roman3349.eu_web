function getAge() {
	var today = new Date();
	var birthDate = new Date("1998-06-06");
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return document.getElementById('age').appendChild(document.createTextNode(age));
}

getAge();
