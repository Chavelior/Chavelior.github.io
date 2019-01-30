// Just the start
console.log("Enters here:")
function eventdirect(evt, task) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById("mainInfo").style.display = "none"
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(task).style.display = "block";
  evt.currentTarget.className += " active";
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function personalInfo(){
  document.getElementById("mainInfo").style.display = "block";
}
