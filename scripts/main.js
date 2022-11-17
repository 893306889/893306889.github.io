//JS文件注释示例
let changeH1 = document.querySelector('h1');
changeH1.textContent = 'Hello world!';

let a = document.querySelector('li');
a.textContent = '原本这里是空的！！！';
if (a === 'chocolate') {
	alert('这个是巧克力');
} else {
	alert('内容是“原本这里是空的”，不是巧克力')
}

function multiply(num1, num2) {
	let result = num1 * num2;
	console.log(result);
	return result;
}

document.querySelector('h1').onclick = function() {
	alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img')
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/头像图标缩小版.png') {
		myImage.setAttribute('src', 'images/Onken1.jpg');
	} else {
		myImage.setAttribute('src', 'images/头像图标缩小版.png');
	}

	let myButton = document.querySelector('button');
	let myHeading = document.querySelector('h1');
	function setUserName() {
		let myName = prompt('请输入你的名字。');
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}
	if (!localStorage.getItem('name')) {
		setUserName();
	} else {
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
	}
	myButton.onclick = function() {
		setUserName();
	}
}