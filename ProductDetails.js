var searchv = location.search
var AN = searchv.charAt(searchv.length - 1) //10
// console.log(AN)

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" +AN, function(productData){

var LHS = document.getElementById("left-side")
LHS.innerHTML = `<img src="${productData.preview}" id="ImageSize" >`

var RHS = document.getElementById("right-side")

RHS.innerHTML = `<h1 class="Product-name">${productData.name}</h1>
<h1 class="product-brand" >${productData.brand}</h1>
<h4 id="section-heading">Price: Rs <p id="product-price">${productData.price}</p></h4>
<h4 id="section-heading">Description</h4>
<p id="description">${productData.description}</p>
<h4 id="section-heading">Product Preview</h4>
<div id="product-images">
</div>
<button id="Button1" onclick= "AddToCart()">Add to Cart</button>`

var ProductImage = document.getElementById("product-images")

  for (var i=0; i<productData.photos.length; i++){4
  ProductImage.innerHTML += `<img src="${productData.photos[i]}" id="Img${i}" class="${i==0 ? "border" : ""}" onclick= "Active('Img${i}')">`
}


});

var currentActiveId = "Img0"

function Active(Index){

  var bigImage = document.getElementById("ImageSize")
  
    var smallImage = document.getElementById(Index)
    bigImage.src = smallImage.src

    var newActiveId = Index
    smallImage.className = "border"
   var currentActiveElement =  document.getElementById(currentActiveId)
   currentActiveId = newActiveId
   currentActiveElement.className = ""
   
}

var Addclick = 0
var AllCart = 0
function AddToCart(){
  Addclick++
  localStorage.setItem("Cart", Addclick)
// console.log(localStorage.getItem("Cart"))
 if(localStorage.getItem("Cart") == NaN){
    localStorage.setItem("Cart", Addclick)
    console.log(Addclick)
 }else{
   var AllPast = parseInt(localStorage.getItem("Cart"))
   console.log(AllPast)
   AllCart++
   Allclick = AllPast + AllCart
   localStorage.setItem("Cart", Addclick)
 }

 var CartIcon = document.getElementById("CartIcon")
 CartIcon.innerHTML = `<i class="fas fa-shopping-cart "></i><span class="CartNum">${Addclick}</span>`

}

console.log(localStorage.getItem("Cart"))

var Addclick = parseInt(localStorage.getItem("Cart"))

var CartIcon = document.getElementById("CartIcon")
 CartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="CartNum">${Addclick}</span>`