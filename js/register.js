
$(document).ready(function(){
$("#register-alert").hide();
$("#register-success").hide();

//alert("1");
isCityHall = localStorage.getItem("isCityHall");
//alert("1");

//redirect if logged in
var user = localStorage.getItem("user");
if(user !== null){
  if(isCityHall === "true"){
   window.location.href="home_hall.html";
 }else{
    window.location.href="home_android.html";
 }
}



 $("#register-button").click(function(){
   $("#register-alert").hide();
   $("#register-success").hide();

   var email = $("#email").val();
   var name = $("#name").val();
   var password = $("#password").val();
   var confirmPassword = $("#confirm-password").val();

   var displayErrors = ""
   var errors = []


   if(name.length === 0){
     errors.push("Name must not be empty!");
   }

   if(email.length === 0){
     errors.push("Email must not be empty!");
   }

   if(password === confirmPassword){
     if(password.length < 5){
       errors.push("Password must contain at least 5 characters!");
     }
   }else{
      errors.push("Passwords do not match!");
   }

   for(var i=0; i < errors.length ; i++){
        displayErrors+= "<li>"+errors[i]+"</li>";
    }

    if(errors.length > 0){
      $("#register-alert").show();
      $("#register-alert").html(displayErrors);
    }else{
      //server
      $("#register-success").html("Account succesfully created!");
      $("#register-success").show();
    }



 });

})
