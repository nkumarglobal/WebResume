
window.addEventListener("load",init);
var leftMenuWidth = 220;
var alinks;
var arr_intro = ['Web Design','UI Design','Photography'];

function init()
{
    alinks = getAllNavigationLinks();
  
   for(let i=0;i<alinks.length;i++){
       alinks[i].addEventListener("click",slidepage);
   }

  
   //alert('init fn call finished');
}

function slidepage()
{
    var myHref = event.srcElement.getAttribute("href");
    $("html, body").stop().animate({
       scrollLeft: $(myHref).offset().left - leftMenuWidth,
       scrollTop: $(myHref).offset().top
    }, 600,'swing');

    for(let i=0;i<alinks.length;i++){
        alinks[i].className ='navlinkNormal';
    }
    
    event.srcElement.className = 'navlinkActive';
}

function getAllNavigationLinks()
{
    var nav_links = document.querySelectorAll('#dvNavBarContainer>ul>li>a');
    return nav_links;
}

// function playAnimation()
// {
//     // intro_anim = document.getElementById('#intro_anim');
//     // for(let i=0;i<=arr_intro.length-1;i++){
//     //     intro_anim.innerHTML = arr_intro[i];
//     // }
//     console.log('Hello');
// }

// var period = 1000; // ms
// var endTime = 10000;  // ms
// var counter = 0;
// var sleepyAlert = setInterval(function(){
//     console.log(alinks[counter]);
//     if(counter === endTime){
//        clearInterval(sleepyAlert);
//     }
//     counter += period;
// }, period);
    
