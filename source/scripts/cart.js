
// Incart get product data form LS 
let Incart = JSON.parse(localStorage.getItem("AddToCart")) || [];
// itemsInCart get quantity of items form LS
let itemsInCart = JSON.parse(localStorage.getItem("quantityOfItem")) || [];
// amountLS get total amount form LS
let amountLS = JSON.parse(localStorage.getItem("amountOfItem")) || [];
 
   displayCart(Incart)
//    body creation for the data added in cart from product pages
  function displayCart(Incart){
   document.querySelector("#cartBody").innerHTML = "";
   Incart.forEach(function(elem,index) {
   
     let box = document.createElement("div");

     let image = document.createElement("img");
     image.setAttribute("src", elem.image_url);

     let pTag1 = document.createElement("p");
     pTag1.innerText = elem.name;

     let pTag2 = document.createElement("p");
     pTag2.innerText = "Rs" + " " + elem.price;

     var qty = document.createElement("p")
     qty.setAttribute("id","qty")
     qty.innerText ="Qty"+" "+elem.cart;

     let btn2 = document.createElement("button");
     btn2.innerText = "Delete";
     btn2.style.cursor = "pointer"

     btn2.addEventListener("click", function () {
       DeletefromCart(elem,index);
     });
   

     document.querySelector("#cartBody").append(box);
     box.append(image, pTag1, pTag2,qty, btn2);
   });
    document.querySelector("#cart").innerText=itemsInCart;
     document.querySelector("#amount").innerText = amountLS;
  }
   displayCart(Incart);


// to delete the item from cart 
// to subtract amount when item/product is deleted
 function DeletefromCart(elem,index) {
   let sum=localStorage.getItem("amountOfItem")
    sum = +sum  
                              
   if(elem.cart<=1){
     sum=sum-elem.price
   Incart.splice(index, 1);
   localStorage.setItem("AddToCart", JSON.stringify(Incart));
   amountLS =document.querySelector("#amount").innerText=sum;
    localStorage.setItem("amountOfItem", sum)
  displayCart(Incart);
   }
   else{
     elem.cart -= 1
     sum=sum-elem.price
     localStorage.setItem("AddToCart", JSON.stringify(Incart));
     // console.log(elem.cart)
     amountLS =document.querySelector("#amount").innerText=sum;
     localStorage.setItem("amountOfItem", sum)
     displayCart(Incart);
   }
  removingItem(elem);
  
 }
 // to decrease the  number of item ,displayed in cart, when item is deleted 
 function removingItem(elem)
 {
   itemsInCart =document.querySelector("#cart").innerText=itemsInCart -1;
 if(+itemsInCart==0)
  {
        document.querySelector("#empty").innerText="Do some shopping";
    } 
   localStorage.setItem("quantityOfItem",JSON.stringify(itemsInCart)) 
 }
 let imageNum=0;
 movingBanner()
 function movingBanner(){
 let image=document.getElementsByClassName("banner");
 for(let i=0;i<image.length;i++)
 {
  image[i].style.display="none"
 }
 imageNum++;
 if(imageNum>image.length) 
 {
  imageNum = 1;
 }
image[imageNum-1].style.display = "block";
setTimeout(movingBanner,3000)
 }



