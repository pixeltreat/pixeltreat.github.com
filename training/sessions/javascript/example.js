function validateAndSubmitForm(){


	var requestPayload = {
		"name": "Shalabh"
	};

	var myRequest = new XMLHttpRequest();
	myRequest.onreadystatechange = function(){
		if(myRequest.readyState == 4 && myRequest.status == 200)
			console.log('Response:' + myRequest.responseText);
	}
	myRequest.open("POST","http://127.0.0.1:1337/register",true);

	myRequest.send(JSON.stringify(requestPayload));
}