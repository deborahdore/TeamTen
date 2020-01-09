
$(document).ready(function(){

$("#login-alert").hide();

//alert("1");
isCityHall = localStorage.getItem("isCityHall");
console.log("isCityHall="+isCityHall);
//alert("1");

//redirect if logged in
var user = localStorage.getItem("user");
if(user !== null){
  if(isCityHall === "true"){
   //window.location.href="home_hall.html";
 }else{
    //window.location.href="home_android.html";
 }
}


 $("#login-button").click(function(){
   $("#login-alert").hide();
   var email = $("#email").val();
   var password = $("#password").val();

   console.log("email="+email);
   console.log("password="+password);
   console.log("isCityHall = "+isCityHall);

   if(isCityHall === "true"){
     if(email === "admin" && password==="1234"){
       localStorage.setItem("user", email);
       window.location.href = 'home_hall.html';
     }else{
       //server
       $("#login-alert").html("Bad password or email");
       $("#login-alert").show();
     }
  } else {
    if(email === "user" && password==="1234"){
       localStorage.setItem("user", email);
      window.location.href = 'home_android.html';
    }else{
      //server
      $("#login-alert").html("Bad password or email");
      $("#login-alert").show();
    }
  }

    return false;
 });

})
