let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");


// Toggle between showing and hiding the sidebar when clicking the menu icon
function w3_open() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
    overlay.style.display = "none";
  } else {
    sidebar.style.display = 'block';
    overlay.style.display = "block";
  }
}


// Close the sidebar with the close button
function w3_close() {
  sidebar.style.display = "none";
  overlay.style.display = "none";
}

// Scroll to top of page smoothly
function scrollToTopSmooth(){
  window.scrollTo({top: 0, behavior: "smooth"});
}

// Zu Menüpunkt scrollen
function scrollToPoint(point){
  //scroll to methods with offset because of Header
  let headerOffset = 65;
  let bodyRect = document.body.getBoundingClientRect().top;
  let pointContainerRect = document.getElementById(point).getBoundingClientRect().top;
  let pointContainerPosition = pointContainerRect - bodyRect;
  let offsetPostion = pointContainerPosition - headerOffset;
  window.scrollTo({
    top: offsetPostion,
    behavior: "smooth"
  });
}
