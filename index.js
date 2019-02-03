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
  document.getElementById("mainInfo").style.display = "block";
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
;}

function selfchal(){
   document.getElementById("acad_deadlines").style.display = "none";
   document.getElementById("selfChal").style.display = "block";
}

function acad_deadline(){
   document.getElementById("acad_deadlines").style.display = "block";
   document.getElementById("selfChal").style.display = "none";
}

function acad_home(){
  document.getElementById("mec_tab").style.display = "none";
  document.getElementById("dic_tab").style.display = "none";
  document.getElementById("sdm_tab").style.display = "none";
  document.getElementById("dmq_tab").style.display = "none";
  document.getElementById("acad_home").style.display = "block";
}

function mech_learn(){
  document.getElementById("mec_tab").style.display = "block";
  document.getElementById("dic_tab").style.display = "none";
  document.getElementById("sdm_tab").style.display = "none";
  document.getElementById("acad_home").style.display = "none";
  document.getElementById("dmq_tab").style.display = "none";
}
function dic(){
  document.getElementById("dic_tab").style.display = "block";
  document.getElementById("mec_tab").style.display = "none";
  document.getElementById("sdm_tab").style.display = "none";
  document.getElementById("acad_home").style.display = "none";
  document.getElementById("dmq_tab").style.display = "none";
}
function sdm2(){
  document.getElementById("sdm_tab").style.display = "block";
  document.getElementById("dic_tab").style.display = "none";
  document.getElementById("mec_tab").style.display = "none";
  document.getElementById("acad_home").style.display = "none";
  document.getElementById("dmq_tab").style.display = "none";
}
function dmq(){
  document.getElementById("sdm_tab").style.display = "none";
  document.getElementById("dic_tab").style.display = "none";
  document.getElementById("mec_tab").style.display = "none";
  document.getElementById("acad_home").style.display = "none";
  document.getElementById("dmq_tab").style.display = "block";
}

function home_ss(){
  document.getElementById("homess").style.display = "block";
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
}

function uni_topic(){
  document.getElementById("homess").style.display = "none";
  document.getElementById("unitopic").style.display = "block";
  document.getElementById("corbooksid").style.display = "none";
}

function corbooks(){
  document.getElementById("homess").style.display = "none";
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "block";
}

function dmq_ss(){
  document.getElementById("dmq_ss").style.display = "block";
}

function sdm_ss(){
  document.getElementById("sdm_ss").style.display = "block"
}
