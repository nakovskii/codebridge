var curDiv = 0;
var divArr = document.getElementsByClassName(`rules`);

const showDiv = (n) => { // function block
  if(n > divArr.length - 1) {curDiv = 0;}
  if(n < 0) {curDiv = divArr.length - 1;}

    let i = 0;
    while (i < divArr.length){
      divArr[i].style.display = "none";
      i++;
    }
  divArr[curDiv].style.display = "block";
}
const nxDiv = (n) => {  // onclick call this fn() from the html
  showDiv(curDiv += n);
}
