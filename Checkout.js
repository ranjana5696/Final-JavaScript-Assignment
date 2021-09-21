var Addclick = parseInt(localStorage.getItem("Cart"))

var CartIcon = document.getElementById("CartIcon")
 CartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="CartNum">${Addclick}</span>`



 $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(productList){


    var Item = localStorage.getItem("Item")
    // console.log(Item[6])
    var cartnum1 = Item[6] - 1
    var CartNum = parseInt(localStorage.getItem("Cart"))


// console.log(cartnum1)

 var LHSCheckout1 = document.getElementById("LHSCheckout")
 LHSCheckout1.innerHTML += `<div class="left-image" >
 <img class="checkout-product-img" src="${productList[cartnum1].preview}" />
 </div>
 <div class="LHSCheckout-description">
     <p class="LHS-title">${productList[cartnum1].name}</p>
     <p>X ${CartNum}</p>
     <p>Amount: Rs ${CartNum*(productList[cartnum1].price)}</p>
 </div>`
// console.log(productList[cartnum1].price)
var RHSCheckout = document.getElementById("RHSCheckout")
RHSCheckout.innerHTML = `<h3>Total Amount</h3>
<span>Amount: Rs <span class="RHSCheckout-price" > ${CartNum*(productList[cartnum1].price)} </span> </span>
<a href="./Comformation.html" > <button id="Button1" onclick="Empty()">Place Order</button> </a>`

})


