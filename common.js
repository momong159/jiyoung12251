
$('.snb').hide();
$("#gnb > li").hover(function() {
  $('.snb').stop().slideDown(200)
}, function() {
  $('.snb').stop().slideUp(200)
})
const sliderWrap = document.querySelector("#slider")
const sliderList = document.querySelector("#sliderList")
const slider = document.querySelectorAll(".slider")
let timer, timer1, timer2;
let state = 1;
sliderList.style.left = "-1000px";
let firstList = sliderList.children[0]
console.log(firstList)
let lastList = sliderList.children[slider.length -1]
sliderList.removeChild(lastList)
sliderList.prepend(lastList)

function slider1() {
  let lastList = sliderList.children[slider.length -1]
  sliderList.removeChild(lastList)
  sliderList.prepend(lastList)
  sliderList.style.left = "-1000px";
  state = 1;
}
function slider2() {
  let firstList = sliderList.children[0]
  sliderList.removeChild(firstList)
  sliderList.appendChild(firstList)
  sliderList.style.left = "-1000px";
  state = 1;
}

function move1() {
  state = 0
  if ( sliderList.style.left == "0px" ) {
    clearTimeout(timer1)
    slider1()
  }
  else {
    sliderList.style.left = parseInt(sliderList.style.left) + 5 + "px"
    timer1 = setTimeout(move1, 1)
  }
}
function move2() {
  state = 0;
  if ( sliderList.style.left == "-2000px" ) {
    clearTimeout(timer2)
    slider2()
  }
  else {
    sliderList.style.left = parseInt(sliderList.style.left) - 5 + "px"
    timer2 = setTimeout(move2, 1)
  }
}

timer = setInterval(move2, 4000)
