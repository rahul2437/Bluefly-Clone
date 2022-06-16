let img = document.querySelector("#banner>img");
img.setAttribute('src', '../source/images/banner/6.jpg');
let btn1 = document.getElementById('inc');
let btn2 = document.getElementById('dec');
let imgnum = 0;
console.log(btn1,btn2);
let imgarr = [
  '../source/images/banner/1.png',
  '../source/images/banner/2.png',
  '../source/images/banner/3.png',
  '../source/images/banner/4.png',
  '../source/images/banner/5.png',
  '../source/images/banner/6.jpg'
];


btn1.addEventListener('click',()=>{
  console.log('right');
  if (imgnum === 0) {
    imgnum = imgarr.length - 1;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum--;
    img.setAttribute('src', imgarr[imgnum]);
  }
});
btn2.addEventListener('click',()=>{
  console.log('left');
  if (imgnum === imgarr.length - 1) {
    imgnum = 0;
    img.setAttribute('src', imgarr[imgnum]);
  } else {
    imgnum++;
    img.setAttribute('src', imgarr[imgnum]);
  }
});