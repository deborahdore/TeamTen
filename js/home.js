const changeFontSize = (incr) => {
  $("div").children().each(function () {
    var fontSize = parseInt($(this).css('font-size'), 10);
    fontSize += incr;
    $(this).css('font-size', fontSize + 'px');
  })
}

$(document).ready(function () {

  $("#logout-button").click(function () {
    localStorage.removeItem("user");

    window.location.href = "index.html";
  });

  isCityHall = localStorage.getItem("isCityHall");

  $("#city-problems-button").click(function () {
    if (isCityHall === "true") {
      window.location.href = "problems_hall.html";
    } else {
      window.location.href = "problems_android.html";
    }
  });

  $("#trash-report").click(() => {
    window.location.href = "trash_report.html";
  })

  $("#traffic-info").click(function () {
    window.location.href = "traffic_info.html";
  })
  $("#register-requests-button").click(() => {
    window.location.href = "register_volunteer.html";
  })

  $("#discounts-button").click(() => {
    window.location.href = "discounts.html";
  })
  $("#swt-simplified").change(function () {
    if ($(this).prop("checked") === true) {
      changeFontSize(5);
    } else {
      changeFontSize(-5);
    }
  })
  
   $("#chat-button").click(() => {
    if(isCityHall === "true"){
      window.location.href="chat_hall.html";
     }else{
       window.location.href="chat_mobile.html";
     }
      
   })
    $("#make-poll-button").click(() => {
      if(isCityHall === "true"){
      window.location.href="you_matter_hall.html";
     }else{
       window.location.href="you_matter.html";
     }
   })

})

