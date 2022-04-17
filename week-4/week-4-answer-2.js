// Assignment 2: Callback Function and Advanced HTML DOM

/* Complete the functions below to make AJAX call to a URL by GET method,
and show the response data in the page. You may render UI with any style. */


function ajax (src, callback) {
	
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {

			let productData = JSON.parse(xhr.responseText);
			callback(productData);

		}
	};

	xhr.open('GET', src);
	xhr.send();

};


function render (data) {
	
	let ajaxSection = document.getElementById('ajaxSection');

	for (let i = 0; i < data.length; i++) {
		
		let name = data[i].name;
		let price = data[i].price;
		let des = data[i].description;

		let card = document.createElement('div');
		card.className = "card";

		let name_div = document.createElement('h2');
		let name_text = document.createTextNode(name);
		name_div.appendChild(name_text);
		card.appendChild(name_div);

		let price_div = document.createElement('h3');
		let price_text = document.createTextNode("NT$ " + price);
		price_div.appendChild(price_text);
		card.appendChild(price_div);

		let des_div = document.createElement('p');
		let des_text = document.createTextNode(des);
		des_div.appendChild(des_text);
		card.appendChild(des_div);

		ajaxSection.appendChild(card);
	}


};


ajax(
	"https://appworks-school.github.io/Remote-Aassigiment-Data/products",
	function(response){
		render(response);
	}
);




