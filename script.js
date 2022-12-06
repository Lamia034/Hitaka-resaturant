// navbar scroller
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
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};


//add to cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


function purchaseClicked() {
   
    alert(`Your order has been validated with total price :  ${updateCartTotal()}$ `)
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img1')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100"><br>
            <span class="cart-item-title">${title}</span><br>
        </div><br>
        <span class="price">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div><hr>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// let t = total;
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    return total;
}




 //filter results

function show(){
   
    

   
        let numb = document.getElementsByClassName("block").length;
     var nom = document.getElementById('nom').value;
      

     if(nom == "Sushis"){
       let numb1 = document.getElementsByClassName("sushi").length;
       let rest = numb - numb1;
       console.log(numb);
       // var rest = numb2 - numb1;
       // const collection = document.getElementsByClassName("sushi");
       for (let i = 0; i < numb1; i++) {
           document.getElementsByClassName("sushi")[i].style.display='block';
       }
     
       for (let i = 0; i < rest; i++){
           document.getElementsByClassName("salade")[i].style.display='none';
           document.getElementsByClassName("dessert")[i].style.display='none';
           document.getElementsByClassName("drink")[i].style.display='none';
       }
     }

     else if(nom == "Salades"){
       let numb1 = document.getElementsByClassName("salade").length;
       let rest = numb - numb1;
       console.log(numb);
       // var rest = numb2 - numb1;
       // const collection = document.getElementsByClassName("sushi");
       for (let i = 0; i < numb1; i++) {
           document.getElementsByClassName("salade")[i].style.display='block';
       }
     
       for (let i = 0; i < rest; i++){
           document.getElementsByClassName("sushi")[i].style.display='none';
           document.getElementsByClassName("dessert")[i].style.display='none';
           document.getElementsByClassName("drink")[i].style.display='none';
       }
     }

     else if(nom == "Desserts"){
       let numb1 = document.getElementsByClassName("dessert").length;
       let rest = numb - numb1;
       console.log(numb);
       // var rest = numb2 - numb1;
       // const collection = document.getElementsByClassName("sushi");
       for (let i = 0; i < numb1; i++) {
           document.getElementsByClassName("dessert")[i].style.display='block';
       }
     
       for (let i = 0; i < rest; i++){
           document.getElementsByClassName("sushi")[i].style.display='none';
           document.getElementsByClassName("salade")[i].style.display='none';
           document.getElementsByClassName("drink")[i].style.display='none';
       }
     }

     else if(nom == "Drinks"){
       let numb1 = document.getElementsByClassName("drink").length;
       let rest = numb - numb1;
       console.log(numb);
       // var rest = numb2 - numb1;
       // const collection = document.getElementsByClassName("sushi");
       for (let i = 0; i < numb1; i++) {
           document.getElementsByClassName("drink")[i].style.display='block';
       }
     
       for (let i = 0; i < rest; i++){
           document.getElementsByClassName("sushi")[i].style.display='none';
           document.getElementsByClassName("salade")[i].style.display='none';
           document.getElementsByClassName("dessert")[i].style.display='none';
       }
     }
  


}

    //   else if(nom == "Salades"){
    //     let numb1 = document.getElementsByClassName("salade").length;
    //     let rest = numb - numb1;
    //     console.log(numb);
    //     // var rest = numb2 - numb1;
    //     // const collection = document.getElementsByClassName("sushi");
    //     for (let i = 0; i < numb1; i++) {
    //         document.getElementsByClassName("salade")[i].style.display='block';
    //     }
      
    //     for (let i = 0; i < rest; i++){
    //         document.getElementsByClassName("sushi")[i].style.display='none';
    //         document.getElementsByClassName("dessert")[i].style.display='none';
    //         document.getElementsByClassName("drink")[i].style.display='none';
    //     }
    //   }

    //   else if(nom == "Desserts"){
    //     let numb1 = document.getElementsByClassName("dessert").length;
    //     let rest = numb - numb1;
    //     console.log(numb);
    //     // var rest = numb2 - numb1;
    //     // const collection = document.getElementsByClassName("sushi");
    //     for (let i = 0; i < numb1; i++) {
    //         document.getElementsByClassName("dessert")[i].style.display='block';
    //     }
      
    //     for (let i = 0; i < rest; i++){
    //         document.getElementsByClassName("sushi")[i].style.display='none';
    //         document.getElementsByClassName("salade")[i].style.display='none';
    //         document.getElementsByClassName("drink")[i].style.display='none';
    //     }
    //   }

    //   else if(nom == "Drinks"){
    //     let numb1 = document.getElementsByClassName("drink").length;
    //     let rest = numb - numb1;
    //     console.log(numb);
    //     // var rest = numb2 - numb1;
    //     // const collection = document.getElementsByClassName("sushi");
    //     for (let i = 0; i < numb1; i++) {
    //         document.getElementsByClassName("drink")[i].style.display='block';
    //     }
      
    //     for (let i = 0; i < rest; i++){
    //         document.getElementsByClassName("sushi")[i].style.display='none';
    //         document.getElementsByClassName("salade")[i].style.display='none';
    //         document.getElementsByClassName("dessert")[i].style.display='none';
    //     }
    //   }
   
// }
 

  // document.getElementsByClassName("sushi")[i].style.display='block';
    //     // console.log(nom);
  
    //         for (let i = 0; i < numb; i++) {
    //             document.getElementsByClassName("sushi")[i].style.display='block';
    //         }
    //         for (let i = 0; i < rest; i++) {
    //             document.getElementsByClassName("sushi")[i].style.display='block';
    //         }
    //         document.getElementsByClassName("sushi").style.display='block'
    //         document.getElementsByClassName("salade")[0].style.display='none'
    //         document.getElementsByClassName("dessert")[0].style.display='none'
    //         document.getElementsByClassName("drink")[0].style.display='none'
    //         console.log("sushi");
    //     }
    //     else if(nom == "Salades"){
    //         document.getElementsByClassName("salade")[0].style.display='block'
    //         document.getElementsByClassName("sushi")[0].style.display='none'
    //         document.getElementsByClassName("dessert")[0].style.display='none'
    //         document.getElementsByClassName("drink")[0].style.display='none'
    //         console.log("salade");
    //     }
    //     else if(nom == "Desserts") {
    //         document.getElementsByClassName("dessert")[0].style.display='block'
    //         document.getElementsByClassName("sushi")[0].style.display='none'
    //         document.getElementsByClassName("salade")[0].style.display='none'
    //         document.getElementsByClassName("drink")[0].style.display='none'
    //         console.log("else");
    //     }
    //     else if(nom == "Drinks"){
    //         document.getElementsByClassName("drink")[0].style.display='block'
    //         document.getElementsByClassName("sushi")[0].style.display='none'
    //         document.getElementsByClassName("salade")[0].style.display='none'
    //         document.getElementsByClassName("dessert")[0].style.display='none'
            
    //     }