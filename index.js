// Just the start
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
  //document.getElementById("mainInfo").style.display = "block";
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

function selfchal(){
   document.getElementById('acad_deadlines').style.display = 'none';
   document.getElementById('selfchal').style.display = 'block';
}

function goal_phd(){
   document.getElementById('goal_phd').style.display = 'block';
}

function selfchal(){
   document.getElementById("acad_deadlines").style.display = "none";
   document.getElementById("selfChal").style.display = "block";
}



function uni_topic(){
  document.getElementById("unitopic").style.display = "block";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("extr_srcs").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function corbooks(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "block";
  document.getElementById("extr_srcs").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function exterSources(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("extr_srcs").style.display = "block";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function art_pap(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("extr_srcs").style.display = "none";
  document.getElementById("artpap").style.display = "block";
  document.getElementById("interprep").style.display = "none";
}
function inter_prep(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("extr_srcs").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "block";
}

function websites(){
   document.getElementById("prsnl_space").style.display = "none";
   document.getElementById("wbsts").style.display = "block";
}

function ss_dm(){
   document.getElementById("ss_dm").style.display = "block";
   document.getElementById("ss_ml").style.display = "none";
}

function ss_ml(){
   document.getElementById("ss_dm").style.display = "none";
   document.getElementById("ss_ml").style.display = "block";
}

function goal_phd(){
   document.getElementById('goal_phd').style.display = "block"
}
