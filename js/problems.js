

$(document).ready(function(){


  $("#problems-back-button").click(function(){
    window.location.href="home_android.html";
  });


  $("#submit-problem-button").click(function(){
    //send data to server...
    var category = $("#problem-category").val();
    var location = $("#problem-location").val();
    var priority = $("#problem-priority").val();
    var title = $("#problem-title").val();
    var description = $("#problem-description").val();

    console.log(category);
    var errors = ""

    if(title.length === 0){
      errors = "Title must not be empty!";
    }

    if(errors.length === 0){
      $("#message-modal").modal();
      $("#message-body").html(`
        <div class="alert alert-success" role="alert">
        Request succesfully sent!
        </div>
        `);

      $("#submit-problem-modal").modal('hide');


      //apend to table
      $("#problems-table-body").prepend(`
        <tr>
            <td>`+ title +`</td>
            <td>`+description+`</td>
            <td>`+category+`</td>
            <td>0</td>
            <td>`+location+`</td>
            <td>`+priority+`</td>
        </tr>
        `);
   }else{

     $("#message-modal").modal();
     $("#message-body").html(`
       <div class="alert alert-danger" role="alert">`
        +errors+
       `</div>
       `);
   }
  });



   isCityHall = localStorage.getItem("isCityHall");
   if(isCityHall === "true"){

   }else{

   }

    $('#example').DataTable();

})
