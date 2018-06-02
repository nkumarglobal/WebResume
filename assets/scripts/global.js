
window.addEventListener("load",init);
var leftMenuWidth = 220;
function init()
{
    var alinks = document.querySelectorAll('#dvNavBarContainer>ul>li>a');
  
   for(let i=0;i<alinks.length;i++){
       alinks[i].addEventListener("click",slidepage);
       
   }
   //alert('init fn call finished');
}

function slidepage()
{
     var myHref = event.srcElement.getAttribute("href");
    
    // //console.log(myHref);
    //  var divname = myHref.substring(myHref.lastIndexOf('#')+1,myHref.length);
    // changeClass(divname);
    var sideBar = leftMenuWidth;
    
    $("html, body").stop().animate({
       scrollLeft: $(myHref).offset().left - sideBar,
       scrollTop: $(myHref).offset().top
    }, 600,'swing');
}

// function changeClass(divname){
//     document.getElementById(divname).className = 'slideLeft';
// }


    