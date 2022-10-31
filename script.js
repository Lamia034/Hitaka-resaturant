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
/*
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
 */

 //second try add to card
 /*
 var li_element = document.querySelectorAll(".category option");
var item_elements = document.querySelectorAll(".card");
 for(var i = 0;i < option_elements.length; i++){
	option_elements[i].addEventListener("click",function(){
		option_elements.forEach(function(option)){
			option.classList.remove("active");
		}
		this.classList.add("active");
		var option_value = this.getAttribute("data-option");
		item_elements.forEach(function(item)
			item.style.display = "none";
	})
		if(option_value == "Sushis"){
			document.querySelector("." + option_value).getElementsByClassName.display = "block";
		}
		else if(option_value == "Salades"){
			document.querySelector("." + option_value).getElementsByClassName.display = "block";
		}
		else if(option_value == "Desserts"){
			document.querySelector("." + option_value).getElementsByClassName.display = "block";
		}
		else if(option_value == "Drinks"){
			document.querySelector("." + option_value).getElementsByClassName.display = "block";
		}
		else{
			consolelog("");
		}
	})
 }*/