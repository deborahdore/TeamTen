
$(document).ready(function(){
//alert("1");
isCityHall = localStorage.getItem("isCityHall");
//alert("1");

 $("#login-button").click(function(){
   var email = $("#email").val();
   var password = $("#password").val();

   if(isCityHall === true){
     if(email === "admin" && password==="1234"){
       window.location.href = 'home_hall.html';
     }else{
       alert("bad password or email");
     }
  } else {
    if(email === "user" && password==="1234"){
      window.location.href = 'home_android.html';
    }else{
      alert("bad password or email");
    }
  }
 });

})
