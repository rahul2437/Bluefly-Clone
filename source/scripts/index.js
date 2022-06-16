let img = document.querySelector("#banner>img");
img.setAttribute('src', '../source/images/banner/6.jpg');
let btn1 = document.getElementById('inc');
let btn2 = document.getElementById('dec');
let imgnum = 0;
let imgarr = [
  '../source/images/banner/1.png',
  '../source/images/banner/2.png',
  '../source/images/banner/3.png',
  '../source/images/banner/4.png',
  '../source/images/banner/5.png',
  '../source/images/banner/6.jpg'
];


btn1.addEventListener('click',()=>{
  if (imgnum === 0) {
    imgnum = imgarr.length - 1;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum--;
    img.setAttribute('src', imgarr[imgnum]);
  }
});
btn2.addEventListener('click',()=>{
  if (imgnum === imgarr.length - 1) {
    imgnum = 0;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum++;
    img.setAttribute('src', imgarr[imgnum]);
  }
});


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


let tranding_now = [
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_1800x1800.jpg?v=1607399172",
    discription: "ROXY WOMENS DOWN WINTER PUFFER COAT",
    cuttedPrice: "$450",
    currPrice: "from $320.38",
    saveingPer: "save 29%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313058180_RLLZ_1_540x.jpg?v=1641655192",
    discription: "BOTEGA VENTA FLASH LETHER BOTIE",
    cuttedPrice: "$1350",
    currPrice: "from $1189.99",
    saveingPer: "Save 26%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/100345-01_540x.jpg?v=1650952910",
    discription:
      "VERSACE JEANS COUTURE BLACK STRUCTURED MEDALLION BUCKLE SHOULDER/ BELT BAG",
    cuttedPrice: "$546",
    currPrice: "from $299.98",
    saveingPer: "Save 45%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311886728_RLLZ_1_540x.jpg?v=1641624968",
    discription: "STUART WEITZMAN HENLEY LEATHER BOOTIE",
    cuttedPrice: "$550",
    currPrice: "from $439.99",
    saveingPer: "Save 65%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411461425_RLLZ_1_540x.jpg?v=1641543376",
    discription: "NICOLE BENISTI JASPER DOWN JACKET",
    cuttedPrice: "$990",
    currPrice: "from $439.99",
    saveingPer: "Save 65%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312910660_RLLZ_1_540x.jpg?v=1641066935",
    discription: "GUCCI ACE INTERLOCKING G LEATHER SNEAKER",
    cuttedPrice: "$650",
    currPrice: "from $549.99",
    saveingPer: "Save 15%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411118526_RLLZ_1_540x.jpg?v=1651098920",
    discription: "MACKAGE PATSY DOWN LEATHER-TRIM JACKET",
    cuttedPrice: "$950",
    currPrice: "from $601.99",
    saveingPer: "Save 39%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411231871_RLLZ_1_540x.jpg?v=1652233735",
    discription: "NICOLE BENISTI CORTINA DOWN JACKET",
    cuttedPrice: "$1200",
    currPrice: "from $347.99",
    saveingPer: "Save 71%",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784207_RLLZ_1_540x.jpg?v=1641645577",
    discription: "STUART WEITZMAN KEELAN SUEDE TALL BOOT",
    cuttedPrice: "$695",
    currPrice: "from $354.99",
    saveingPer: "Save 50%",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311886733_RLLZ_1_540x.jpg?v=1641432547",
    discription: "STUART WEITZMAN HENLEY CHILL LEATHER COMBAT BOOT",
    cuttedPrice: "$650",
    currPrice: "from $329.99",
    saveingPer: "Save 49%",
  },
];



window.addEventListener("load", load);
function load() {
  displayTrandingNow(tranding_now);
}


function displayTrandingNow(arr) {
  arr.forEach(function (elm) {
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elm.img);
    let p = document.createElement("p");
    p.innerText = elm.discription;
    let div2 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.innerText = elm.cuttedPrice;
    let span2 = document.createElement("span");
    span2.innerText = elm.currPrice;
    let span3 = document.createElement("span");
    span3.innerText = elm.saveingPer;
    div2.append(span1, span2, span3);
    div1.append(image, p, div2);
    div1.addEventListener("click", function () {
      alert("provide the add to card link and store the current data in local storage")
    })
    document.querySelector("#container3").append(div1);

  });

  document.querySelector(".d3>input").addEventListener("click", function () {
    alert("provide the card link")
  })
}