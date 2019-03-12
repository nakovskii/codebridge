window.addEventListener('scroll', () => {
 let pDiv = document.getElementById('parallax-container');
 let cDiv = pDiv.getElementsByTagName('div');
 for(let i = 0; i < cDiv.length; i++) {
   cDiv[i].style.transform = 'translateY(-' + (window.pageYOffset * i / cDiv.length) + 'px)';
 }
}, false);

window.addEventListener('scroll', () => {
 let pDiv = document.getElementById('parallax-container-sml');
 let cDiv = pDiv.getElementsByTagName('div');
 for(let i = 0; i < cDiv.length; i++) {
   cDiv[i].style.transform = 'translateY(-' + (window.pageYOffset * i * 2 / cDiv.length) + 'px)';
 }
}, false);
