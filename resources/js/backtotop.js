let upButton = document.getElementById("up-button");
window.onscroll = function(){toggleVisibility()};

function toggleVisibility(){
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    //make visible
    upButton.classList.add("show");

  }else{
    //make invisible
    upButton.classList.remove("show");
  }



}
 
//Nach oben scrollen
function scrollToTopSmooth(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
