const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function membersShizzle(arr) {
	var table = document.createElement('table');
	table.style = "border-style: solid; border-color: #000; border-width: 3px; margin-bottom: 30px;";
	var th = true;
	var tbody = document.createElement('tbody');
	var thead = document.createElement('thead');
	var tr = document.createElement('tr');
	for (name in arr[0]) {
		var th = document.createElement('th');
		th.style = "border-style: solid; border-color: #000; border-width: 3px; padding: 5px;";
		th.innerText = name;
		tr.appendChild(th);
	}
	thead.appendChild(tr);
	table.appendChild(thead);
	for (i in arr) {
		if (!isNaN(i)) {
			var tr = document.createElement('tr');
			for (ii in arr[i]) {
				var td = document.createElement('td');
				td.innerText = arr[i][ii];
				tr.appendChild(td);
			}
			tr.style = "border-bottom-width: 3px; border-bottom-style: solid; border-bottom-color: #000;";
			tbody.appendChild(tr);
		}
	}
	table.appendChild(tbody);
	document.body.appendChild(table);
}

function processResponse(response) {
	console.log(response);
    var table = document.createElement('table');
	table.style = "border-style: solid; border-color: #000; border-width: 3px; margin-bottom: 30px;";
	var thead = document.createElement('thead');
	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');
	var trbody = document.createElement('tr');
	var top = ["squadName", "homeTown", "formed", "secretBase", "active"];
	for (i in top) {
		var name = top[i];
		var th = document.createElement('th');
		th.style = "border-style: solid; border-color: #000; border-width: 3px; padding: 5px;";
		th.innerText = name;
		tr.appendChild(th);
		var th = document.createElement('td');
		th.innerText = response[name];
		trbody.appendChild(th);
	}
	thead.appendChild(tr);
	tbody.appendChild(trbody);
	table.appendChild(thead);
	table.appendChild(tbody);
	document.body.appendChild(table);
	membersShizzle(response['members']);
}
sendRequest();