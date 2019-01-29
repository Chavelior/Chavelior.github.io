// Just the start
function deadlines(evt){
  // For now: Just show the deadlines in a list format
  document.getElementById("Deadlines").style.display = "block";
  evt.currentTarget.className += " active";
  // Future: Send a mail to me reminding my deadlines
}

function academics(evt){
  // For now:
  document.getElementById("Academics").style.display = "block";
  evt.currentTarget.className += " active";
  // Future:
}

function selfstudy(evt){
  // For now: Academic and personal together. Can be confusing but will work on it soon
  document.getElementById("selfStudy").style.display = "block";
  evt.currentTarget.className += " active";
  // Future:
}

function contactinfo(evt){
  // For now:
  document.getElementById("contactInfo").style.display = "block";
  evt.currentTarget.className += " active";
  // Future:
}
