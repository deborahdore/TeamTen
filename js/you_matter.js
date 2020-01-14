
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

  $("#problems-back-button").click(() => {
    window.location.href = 'home_android.html';
  });

  var qNr = 1, aNr = 0;
  appendMessage(qNr, aNr, "What do you consider important in the nearest future?", "New bus lines in the metropolitan area", "New bycicle roads in the city");
  qNr++;
  aNr +=2;

   appendMessage(qNr, aNr, "Do you think a new mall would be needed for the city?", "Yes", "No");
  qNr++;
  aNr +=2;

   appendMessage(qNr, aNr, "Do you have any ideas to make TUCN a better university?", "Yes, absolutely yes!", "No, TUCN is the best uni ever! <3");
  qNr++;
  aNr +=2;

});


function appendMessage(qNr, aNr, question, answer1, answer2) {
  //   Simple solution for small apps

  var newQuestion = ` <div class="item">
                       <h4 id="question${qNr}">${qNr}. ${question}</h4>
                      <ul>
                        <li><p class="optionClass" id="answer${aNr}"> ${answer2}</p>    </li>
                        <li><p class="optionClass" id="answer${aNr+1}"> ${answer1}</p>   </li>
                      </ul>
                     
                      
                      
                    </div>`;

  $("#decisionList").append(newQuestion);                    
  $("#answer" +aNr).click(function() {
      if( ($("#answer"+(aNr+1)).attr("class") !== "selectedClass") && ($("#answer"+aNr).attr("class") !== "selectedClass")) {
    
    var x = Math.floor(Math.random() * 100);
    $("#answer"+aNr).text($("#answer"+aNr).text() + ": " + x + "%");
    $("#answer"+aNr).attr("class", "selectedClass");
    $("#answer"+(aNr + 1)).text($("#answer"+(aNr+1)).text() + ": " + (100-x) + "%");
  }
  });

  $("#answer"+(aNr+1)).click(() => {
    if( ($("#answer"+(aNr+1)).attr("class") !== "selectedClass") && ($("#answer"+aNr).attr("class") !== "selectedClass")) {

     var x = Math.floor(Math.random() * 100);
     $("#answer"+aNr).text($("#answer"+aNr).text() +  ": " + x + "%");
    $("#answer"+(aNr + 1)).text($("#answer"+(aNr+1)).text() +  ": " + (100-x) + "%");
    $("#answer"+(aNr+1)).attr("class", "selectedClass");
    }
  })


  
}


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