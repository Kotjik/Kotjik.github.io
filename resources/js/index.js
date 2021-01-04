let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");

let language_checkboxes = document.getElementsByClassName("language_checkbox");
let germanContent = document.getElementsByClassName("german");
let englishContent = document.getElementsByClassName("english");

if(localStorage.getItem("language")===null){
  console.log("localStorage is null");
}else if (localStorage.getItem("language") === "german"){

}else if (localStorage.getItem("language") === "english"){

}



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


// Sprache ändern
function changeLanguage(checkbox){

  if(checkbox.checked == true){
    for(let i = 0; i < language_checkboxes; i++){
      language_checkboxes[i].checked = true;
    }
    for(let i = 0; i < germanContent.length; i++){
      germanContent[i].classList.add("hidden");
    }
    for(let i = 0; i < englishContent.length; i++){
      englishContent[i].classList.remove("hidden");
    }
    localStorage.setItem("language", "german");

  }else{
    for(let i = 0; i < language_checkboxes; i++){
      language_checkboxes[i].checked = false;
    }
    for(let i = 0; i < germanContent.length; i++){
      germanContent[i].classList.remove("hidden");
    }
    for(let i = 0; i < englishContent.length; i++){
      englishContent[i].classList.add("hidden");
    }
    localStorage.setItem("language", "english");
  }
}
