let abovefArr=[
    {
        image:"https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
        about:"From Hudson Jeans, Joe's Jeans, J Brand & More",
        btn:"SHOP DENIM"
    },
    {
        image:"https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS",
        about:"Must-Haves From Cole Haan, Burberry, & More", 
        btn:"SHOP OUTERWEAR" 
    },
    {
        image:"https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHVyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name:"UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
        about:"Shop Wallets, Belts, Hats, Sunglasses & More",   
        btn:"SHOP WOMEN'S ACCSORRIS"
    }, 
  ];

  abovefArr.forEach(function(elem){
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",elem.image);

    let title=document.createElement("h2");
    title.innerHTML=elem.name;

    let about=document.createElement("p");
    about.innerHTML=elem.about;

    let btn=document.createElement("button");
    btn.innerText=elem.btn;

   
    box.append(image,title,about,btn);
    document.querySelector("#abovef").append(box);
  })

  function subscribe(){
    let value = document.getElementById('email').value
    if(value==""){
        
        alert("Enter Mail ID")
    }
  }