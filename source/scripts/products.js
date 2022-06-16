let dataArr = JSON.parse(localStorage.getItem('prodData'));
let filterBy = document.querySelector('#genderFilter');
let sortBy = document.querySelector('#priceFilter');

showCards(dataArr);

sortBy.addEventListener('change', () => {
  if (sortBy.value == 'low') {
    let sorted = dataArr.sort((a, b) => {
      a = parseInt(a.actprice.substring(1));
      b = parseInt(b.actprice.substring(1));
      return a - b;
    });
    showCards(sorted);
  }
  else if (sortBy.value == 'high') {
    let sorted = dataArr.sort((a, b) => {
      a = parseInt(a.actprice.substring(1));
      b = parseInt(b.actprice.substring(1));
      return b - a;
    });
    showCards(sorted);
  }
  else {
    showCards(dataArr);
  }
});
filterBy.addEventListener('change', () => {
  if (filterBy.value == 'men') {
    let filteredArr = dataArr.filter((e) => {
      return e.gender == 'male';
    });
    showCards(filteredArr);
  }
  else if (filterBy.value == 'female') {
    let filteredArr = dataArr.filter((e) => {
      return e.gender == 'female';
    });
    showCards(filteredArr);
  }
  else {
    showCards(dataArr);
  }
});
function showCards(arr) {
  document.querySelector('#prodDisp>div:nth-child(2)').innerHTML = '';
  arr.forEach((e,index) => {
    createCards(e,index);
  });
}

function createCards(ele,index) {
  let prodGridCard = document.createElement('div');
  let pimg = document.createElement('img');
  let pbrand = document.createElement('h4');
  let pname = document.createElement('p');
  let psktprice = document.createElement('p');
  let pactprice = document.createElement('p');
  let pdisc = document.createElement('p');
  let pricediv = document.createElement('div');
  let imgLink = ele.image
  if (imgLink == '') imgLink = 'https://via.placeholder.com/200x300';
  else imgLink = ele.image;

  let btn = document.createElement('div');
  let btndec = document.createElement('div');
  let btninc = document.createElement('div');
  let btndisp = document.createElement('div');
  btn.setAttribute('id','cartValue');
  btndec.innerText = '-';
  btninc.innerText = '+';
  btndisp.innerText = ele.cart;
  btn.append(btndec,btndisp,btninc);
  btn.setAttribute('class', 'addToCart');
  
  
  
  btninc.addEventListener('click', function(){
    let cart = JSON.parse(localStorage.getItem('AddToCart')) || [];
    let n = cart.length;
    if(n==0){
      ele.cart = 1;
      btndisp.innerText = ele.cart;
      cart.push(ele);
      localStorage.setItem('AddToCart',JSON.stringify(cart));
    }
    else{
      let present = cart.filter((e)=>{
        return e.name == ele.name;
      });
      if(present.length==0){
        ele.cart = 1;
        btndisp.innerText = ele.cart;
        cart.push(ele);
        localStorage.setItem('AddToCart',JSON.stringify(cart));
      }
      else{
        cart.splice(index, 1);
        present[0].cart++;
        btndisp.innerText = present[0].cart;
        cart.push(present[0])
        localStorage.setItem('AddToCart',JSON.stringify(cart));
      }
    }
  });
  btndec.addEventListener('click', function(){
    let cart = JSON.parse(localStorage.getItem('AddToCart')) || [];
    let n = cart.length;
    if(n==0){
      cart.push(ele);
      localStorage.setItem('AddToCart',JSON.stringify(cart));
    }
    else{
      let present = cart.filter((e)=>{
        return e.name == ele.name;
      });
      if(present.length==0){
        cart.push(ele);
        localStorage.setItem('AddToCart',JSON.stringify(cart));
      }
      else{
        cart.splice(index, 1);
        if(present[0].cart>0) present[0].cart--;
        btndisp.innerText = present[0].cart;
        cart.push(present[0])
        localStorage.setItem('AddToCart',JSON.stringify(cart));
      }
    }
  });



  pimg.src = imgLink;
  pbrand.innerText = ele.miscData;
  pname.innerText = ele.name;
  psktprice.innerText = ele.stkprice;
  pactprice.innerText = ele.actprice;
  pdisc.innerText = '!DISCOUNTED!';
  pricediv.append(psktprice, pactprice, pdisc);
  prodGridCard.append(pimg, pbrand, pname, pricediv, btn);
  document.querySelector('#prodDisp>div:nth-child(2)').append(prodGridCard);
}

