
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




const BOT_MSGS = [
  "Welcome! How can we help you?",
  "Thank you for the information! We'll try to answer ASAP!",
  "Currently we have no online operants!",
  "Sorry if my answers are not relevant. :)",
];
  const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
var PERSON_NAME = "User";

if(user !== null) {
  PERSON_NAME = user;
}

var counter = 0;



$(document).ready(function(){ 

  botResponse();
$("#problems-back-button").click(() => {
  window.location.href = 'home_android.html';
});

    const msgerForm = $(".msger-inputarea");
  const msgerInput = $("#message");
  const msgerChat = $(".msger-chat");

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

});


function appendMessage(name, img, side, text, msgerChat) {
  //   Simple solution for small apps
  console.log(side + " " +text);
  const msgHTML = `
    <div class="msg left-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  $(".msger-chat").append(msgHTML);
  
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[counter++];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
