var main=document.getElementById('main');
var mainTop=main.offsetHeight;
var header=document.getElementById('header');
// console.log(mainTop);

header.style.background='rgba(204,51,42,'+ document.documentElement.scrollTop/mainTop +')';
window.addEventListener('scroll',function(){
    // console.log('1111');
    var headTop=(document.body.scrollTop ||document.documentElement.scrollTop) /mainTop;
    header.style.background='rgba(204,51,42,'+ headTop +')';
    
})


  window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })  
  }

  var time=2*60*60;
  var spans = document.querySelectorAll('#section .left>span');
//   console.log(spanList);
timeid();
function timeid(){
  var hour = Math.floor(time / 60 / 60);
  // console.log(hour);        
  // time % 3600 除以3600除不尽的部分都属于分钟 (不够一个小时都属于分钟就相当于去掉了小时部分)  / 60 对应的分钟数 向下取消
  var minute = Math.floor(time % 3600 / 60);
  // console.log(minute);
  // time % 60 只要除以60除不尽不够一分钟的都是秒数
  var second = time % 60;
  // console.log(second);
  // 4.2 把时分秒十位个位分别放到页面中的span上显示
  spans[0].innerHTML = Math.floor(hour / 10);
  spans[1].innerHTML = Math.floor(hour % 10);
  spans[3].innerHTML = Math.floor(minute / 10);
  spans[4].innerHTML = Math.floor(minute % 10);
  spans[6].innerHTML = Math.floor(second / 10);
  spans[7].innerHTML = Math.floor(second % 10);
}
  setInterval(function(){
    if(time<=0){
      time=2*60*60;
    }
    time--;
    timeid();

  },1000)