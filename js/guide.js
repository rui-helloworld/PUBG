
window.onload = function() {
 var oDiv = document.getElementById('guide-nav');
 var divT = 470;
 //console.log(divT);
 window.onscroll = function() {
  // 获取当前页面的滚动条纵坐标位置 
  var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if (scrollT >= divT) 
    oDiv.className = 'guide-nav-fixed';
    else
    oDiv.className = 'guide-nav';
 }
}