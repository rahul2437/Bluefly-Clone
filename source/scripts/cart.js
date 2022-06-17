let Incart = JSON.parse(localStorage.getItem("AddToCart")) || [];
console.log(Incart);

displayCart(Incart)
//    body creation for the data added in cart from product pages
function displayCart(Incart) {
  let quantityCart =0;
   let amountCart = 0;
  
  document.querySelector("#cartBody").innerHTML = "";
  Incart.forEach(function (elem, index) {
    quantityCart += +elem.cart;
     amountCart +=(+elem.actprice)*(+elem.cart) ;
     
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let pTag1 = document.createElement("p");
    pTag1.innerText = elem.name;

    let pTag2 = document.createElement("p");
    pTag2.innerText = "$"+elem.actprice;

    var qty = document.createElement("p")
    qty.setAttribute("id", "qty")
    qty.innerText = "Qty" + " " + elem.cart;

    let btn1 = document.createElement("button");
    btn1.innerText = "Delete";
    btn1.style.cursor = "pointer"

    btn1.addEventListener("click", function () {
      DeletefromCart(elem, index);
    });


    document.querySelector("#cartBody").append(box);
    box.append(image, pTag1, pTag2, qty, btn1);
  });
  document.querySelector("#cart").innerText = quantityCart;
  document.querySelector("#amount").innerText = amountCart.toFixed(2);
  if(+quantityCart==0)
  {
        document.querySelector("#empty").innerText="Click here to shop more!!";
    } 
}
displayCart(Incart);


// to delete the item from cart 
// to subtract amount when item/product is deleted
function DeletefromCart(elem, index) {
  if (elem.cart <= 1) {
    Incart.splice(index, 1);
    localStorage.setItem("AddToCart", JSON.stringify(Incart));
    displayCart(Incart);
    // console.log(amountLS)
  }
  else {
    elem.cart -= 1
    localStorage.setItem("AddToCart", JSON.stringify(Incart));
    displayCart(Incart);
  }
   removingItem(elem); 
 }
 // to decrease the  number of item ,displayed in cart, when item is deleted 
 function removingItem(elem)
 {
   quantityCart =document.querySelector("#cart").innerText
   quantityCart--;
  
   localStorage.setItem("quantityOfItem",JSON.stringify(quantityCart)) 
 }



