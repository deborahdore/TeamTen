
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
   //window.location.href="home_hall.html";
 }else{
   // window.location.href="home_android.html";
 }
}

$("#problems-back-button").click(() => {
	 window.location.href = 'home_android.html';
})

$("#report-trash-button").click(() => {
  $("#trash-report-container").html("");
  $('#trash-report-container').prepend($('<button>',{id:'camera-button', src:'images/camera_icon.png'}));
    var buttons = document.getElementById("camera-button");
    buttons.innerHTML = '<img id="button_img"src="images/camera_icon.png" />';

  $('#trash-report-container').prepend($('<img>',{class:'trash_img',src:'images/trash.png'}));
  $("#report-trash-button").remove();
  $("#camera-button").click(() => {
     $("#camera-button").remove()
    // <a id="report-trash-button" class="btn btn-primary btn-user btn-block">
    $('#action_buttons').append($('<button>',{id:'send-report-button', class:"btn btn-info btn-user btn-block"}));
    $("#send-report-button").text('Send report!');
    $("#send-report-button").css('background-color', 'green');
    $("#send-report-button").click(() => {
       $("#trash-report-container").html('<div class="loader" id="loader"></div>');
      setTimeout(() => {
        $("#loader").css("display", "none");
         $("#trash-report-container").html('<h1>Successful operation!</h1>');

       }, 4000);
        setTimeout(() => {
        location.reload();
       }, 7000);

    })
     $('#action_buttons').append($('<button>',{id:'discard-report-button', class:"btn btn-info btn-user btn-block"}));
    $("#discard-report-button").text('Discard report!')
    $("#discard-report-button").css('background-color', 'red');
    $("#discard-report-button").click(() => {
        window.location.href = 'home_android.html';

    })
  })

  return false;
});



})

function myMap() {
//   var utCenter = new google.maps.LatLng(46.46277,23.36276)
var mapProp= {
  center:new google.maps.LatLng(46.46277,23.36276)
};
var map = new google.maps.Map(document.getElementById("trash-report-container"),mapProp);
// var marker = new google.maps.Marker({position: utCenter, animation:google.maps.Animation.BOUNCE});

// marker.setMap(map);
}
