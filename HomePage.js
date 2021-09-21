
localStorage.setItem("Cart", 0)

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(productList){

    let clothing = document.getElementById('clothing-section')
    let accessories = document.getElementById('accessories-section')


    function getDomElement(i , type) {
        
        type.innerHTML += `<div id="product-card">
        <img class="card-image" src="${productList[i].preview}" alt="product-image" id="${i+1}" onclick="CardOpen(${i+1})"/>
        <div class="product-data">
        <h4> ${productList[i].name} </h4>
        <h5> ${productList[i].brand} </h5>
        <p> Rs ${productList[i].price} </p>
        </div>
        </div> `   
        
    }

    
    function finalCall()
    {
    for (var j=0; j<productList.length; j++)
    if (productList[j].isAccessory == true) 
    {
    getDomElement(j, accessories) 
    }
    else
    {
        getDomElement(j,clothing ) 
    }
    }
    finalCall(getDomElement)

    

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        center:true,
        autoplay:true,
        margin:100,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
      
      // You can use responsive item here based on requirement;  
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
      })
   
    

})




var Addclick = parseInt(localStorage.getItem("Cart"))


var CartIcon = document.getElementById("CartIcon")
 CartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="CartNum">${Addclick}</span>` //change



 function CardOpen(ImageID){
    // console.log(ImageID)  


    var obj = {
        id : ImageID
    }
    console.log(obj)
    localStorage.setItem("Item", JSON.stringify(obj))

    location.assign("./ProductDetails.html?id=" +ImageID)

}


function Cart1(){

}