
// $(document).ready(function(){
// $("#register-alert").hide();
// $("#register-success").hide();

// //alert("1");
isCityHall = localStorage.getItem("isCityHall");
// //alert("1");

// //redirect if logged in
var user = localStorage.getItem("user");
if(user !== null){
  if(isCityHall === "true"){
   //window.location.href="home_hall.html";
 }else{
   // window.location.href="home_android.html";
 }
}

if(user !== null) {
  PERSON_NAME = user;
}

var counter = 0;



$(document).ready(function(){ 

  $("#problems-back-button").click(() => {
    window.location.href = 'home_hall.html';
  });

  $("#register-button").click(function() {
    event.preventDefault();
   alert("New poll was added!");
    return false;
  });

});




/*

  $("#sendButton").click(function() {
    event.preventDefault();
    const msgText = msgerInput.val();
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText, msgerChat);
     $("#message").val(" ");
   botResponse();  
     $("#msger-chat").scrollTop($("#msger-chat").height());
    return false;
  });
*/