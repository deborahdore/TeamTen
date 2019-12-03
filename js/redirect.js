
$(document).ready(function(){
  var user = localStorage.getItem("user");
  if(user === null){
    window.location.href="index.html";
  }
})
