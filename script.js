const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');u
	navbar.classList.remove('open');
};
//add to card 
var addItemId = 0;
 function addToCart(item){
	addItemId += 1;
	var selectedItem = document.createElement('div');
	selectedItem.classList.add('cartImg');
	selectedItem.setAttribute('id',addItemId);
	var img = document.getElement('img1');
	img.setAttribute('src',item.children[0].currentSrc);
	selectedItem.append(img1);
	chosenItems.append(selectedItem);
 }