setTimeout(changeLogin, 100);
function changeLogin(){
  let loggedin = localStorage.getItem('loginData');
  if (loggedin===true) {
    document.getElementById('loginBtn').setAttribute('class','inactive');
    document.getElementById('logoutBtn').setAttribute('class','active');
  }
  else {
    document.getElementById('loginBtn').setAttribute('class','active');
    document.getElementById('logoutBtn').setAttribute('class','inactive');
  }
}
document.getElementById('logoutBtn').addEventListener('click',()=>{
  localStorage.setItem('loginData',false);
  changeLogin();
});
document.getElementById('loginBtn').addEventListener('click',()=>{
  window.location.href = 'pages/LoginPage.html';
});

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


btn1.addEventListener('click', () => {
  if (imgnum === 0) {
    imgnum = imgarr.length - 1;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum--;
    img.setAttribute('src', imgarr[imgnum]);
  }
});
btn2.addEventListener('click', () => {
  if (imgnum === imgarr.length - 1) {
    imgnum = 0;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum++;
    img.setAttribute('src', imgarr[imgnum]);
  }
});


// Shop by category start here
let categoryData = [
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2278681_large.jpg?v=1652827735",
    about: "DRESSES",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313307270_RLLZ_1_360x.jpg?v=1655150554",
    about: "PUMP & HEELS",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/612544DV7071000-1_5024ffe5-9fd6-424c-97c4-9ab552c15218_large.jpg?v=1654826539",
    about: "HANDBAGS",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/DiorByDior-2-00086-1_360x.jpg?v=1609777367",
    about: "SUNGLASSES",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311313347_RLLZ_1_360x.jpg?v=1654834002",
    about: "WOMEN'S SNEAKERS",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2318068_large.jpg?v=1654122457",
    about: "MEN'S SNEAKERS",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2241436_large.jpg?v=1649703209",
    about: "MEN'S T-SHIRT",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411125638_RLLZ_1_360x.jpg?v=1654918372",
    about: "WOMEN'S TOPS",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/600235-TBP47e_360x.jpg?v=1628713967",
    about: "WOMEN'S DENIM",
  },
  {
    imge_url:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/6030762198_RLLZ_1_large.jpg?v=1654758198",
    about: "JEWELERY",
  },
];
catload();
function catload() {
  displaydata(categoryData);
}
function displaydata(categoryData) {
  categoryData.forEach(function (elm) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elm.imge_url);

    let p = document.createElement("p");
    p.innerText = elm.about;
    div.append(image, p);
    div.addEventListener("click", function () {
      let filter = p.innerText;
      alert(`filter it according ${filter}`);
    });
    document.querySelector("#container").append(div);
  });
}
// Shop by category end here

//   new arrivals start here
let newArrivalsData = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1566289_1800x1800.png?v=1635615949",
    name: '"DIVAI"  T-SHIRT',
    cuttedPrice: "$600",
    currPrice: "from $413.23",
    saveingPer: "save 37%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2246726_360x.jpg?v=1651848885",
    name: '"LA MEDUSA"  RUBBER MULES',
    cuttedPrice: "$468",
    currPrice: "from $366.49",
    saveingPer: "save 24%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2269023_1800x1800.jpg?v=1651089256s",
    name: '"THE FLURO MOTO SHOT"  BAG',
    cuttedPrice: "$468",
    currPrice: "from $340.94",
    saveingPer: "save 27%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2087946_1800x1800.jpg?v=1638291787",
    name: "'FOR RIDING'  RAINBOOTS ",
    cuttedPrice: "$450",
    currPrice: "from $320.38",
    saveingPer: "save 29%",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2226376_1800x1800.jpg?v=1648739239",
    name: '"SIGNATURE STRIPES"  POUCH',
    cuttedPrice: "$354",
    currPrice: "from $261.64.94",
    saveingPer: "save 26%",
  },
];
arrlivalload();
function arrlivalload() {
  displaynewArrivalData(newArrivalsData);
}

function displaynewArrivalData(arr) {
  arr.forEach(function (elm) {
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elm.image);
    let p = document.createElement("p");
    p.innerText = elm.name;
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
      alert("provide the card page link");
    });
    document.querySelector("#container2").append(div1);
  });
  document
    .querySelector(".text>input")
    .addEventListener("click", function () {
      alert("provide the card page link pls");
    });
}
//   new arrivals end here

//trendin noe start here
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

trendload();
function trendload() {
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
//trending now end here

//footer start here
let abovefArr = [
  {
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "UP TO 85% OFF THE DENIM SHOP FOR HIM & HER",
    about: "From Hudson Jeans, Joe's Jeans, J Brand & More",
    btn: "SHOP DENIM"
  },
  {
    image: "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "UP TO 80% OFF LIGHTWEIGHT JACKETS & COATS",
    about: "Must-Haves From Cole Haan, Burberry, & More",
    btn: "SHOP OUTERWEAR"
  },
  {
    image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHVyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
    about: "Shop Wallets, Belts, Hats, Sunglasses & More",
    btn: "SHOP WOMEN'S ACCSORRIS"
  },
];

abovefArr.forEach(function (elem) {
  let box = document.createElement("div");
  let image = document.createElement("img");
  image.setAttribute("src", elem.image);

  let title = document.createElement("h2");
  title.innerHTML = elem.name;

  let about = document.createElement("p");
  about.innerHTML = elem.about;

  let btn = document.createElement("button");
  btn.innerText = elem.btn;


  box.append(image, title, about, btn);
  document.querySelector("#abovef").append(box);
})

function subscribe() {
  let value = document.getElementById('email').value
  if (value == "") {

    alert("Enter Mail ID")
  }
}
  //footer end here
