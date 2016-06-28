// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/flowers.jpg') {
      myImage.setAttribute ('src','images/roses.jpg');
	} else {
	  myImage.setAttribute ('src','images/flowers.jpg');
	}
}

// Personalized welcome message code


var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Flowers are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Flowers are cool, ' + storedName;
}


var myButton = document.querySelector('button');

myButton.onclick = function() {
  setUserName();
}