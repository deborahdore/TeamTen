

$(document).ready(function(){

  $("#logout-button").click(function(){
    localStorage.removeItem("user");
    window.location.href="index.html";
   });

   isCityHall = localStorage.getItem("isCityHall");

   $("#city-problems-button").click(function(){
     if(isCityHall === "true"){
      window.location.href="problems_hall.html";
     }else{
       window.location.href="problems_android.html";
     }
    });

   $("#trash-report").click(() => {
    window.location.href="trash_report.html";
   })

   $("#traffic-info").click(function(){
     window.location.href="traffic_info.html";
   })
   $("#register-requests-button").click(() => {
     window.location.href="register_volunteer.html";
   })

   $("#rewards-button").click(() => {
    window.location.href="rewards_home.html";
  })
})
