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
  document.getElementById("courses").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function corbooks(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "block";
  document.getElementById("courses").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function courses(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("courses").style.display = "block";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "none";
}
function art_pap(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("artpap").style.display = "block";
  document.getElementById("interprep").style.display = "none";
}
function inter_prep(){
  document.getElementById("unitopic").style.display = "none";
  document.getElementById("corbooksid").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("artpap").style.display = "none";
  document.getElementById("interprep").style.display = "block";
}

function dmq_ss(){
  document.getElementById("dmq_ss").style.display = "block";
}

function sdm_ss(){
  document.getElementById("sdm_ss").style.display = "block";
  document.getElementById("sdm_ass").style.display = "none";
}

function sdm_ass(){
  document.getElementById("sdm_ass").style.display = "block";
  document.getElementById("sdm_ss").style.display = "none";
}


function mec_ass(){
  document.getElementById("mec_ass").style.display = "block";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "none";
}
function mec_oic(){
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_oic").style.display = "block";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "none";
}
function mec_ss(){
  document.getElementById("mec_ss").style.display = "block";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "none";
}
function mec_final(){
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "block";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "none";
}
function mec_pro(){
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "block";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "none";
}
function mec_mid(){
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "block";
  document.getElementById("mec_res").style.display = "none";
}
function mec_res(){
  document.getElementById("mec_ass").style.display = "none";
  document.getElementById("mec_oic").style.display = "none";
  document.getElementById("mec_ss").style.display = "none";
  document.getElementById("mec_final").style.display = "none";
  document.getElementById("mec_pro").style.display = "none";
  document.getElementById("mec_mid").style.display = "none";
  document.getElementById("mec_res").style.display = "block";
}

function ss_dm(){
   document.getElementById("ss_dm").style.display = "block";
   document.getElementById("ss_ml").style.display = "none";
}

function ss_ml(){
   document.getElementById("ss_dm").style.display = "none";
   document.getElementById("ss_ml").style.display = "block";
}

function dmq_oic(){
   document.getElementById("dmq_oic").style.display = "block";
   document.getElementById("dmq_ss").style.display = "none";
}

function goal_phd(){
   document.getElementById('goal_phd').style.display = "block"
}

function dic_ss(){
   document.getElementById('dic_ss').style.display = 'block';
   document.getElementById('dic_pro').style.display = 'none';
}

function dic_pro(){
   document.getElementById('dic_ss').style.display = 'none';
   document.getElementById('dic_pro').style.display = 'block';
}
