

$(document).ready(function(){

  $("#logout-button").click(function(){
    localStorage.removeItem("user");
    window.location.href="index.html";
   });
})
