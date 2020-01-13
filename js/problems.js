var incrId = 12;
var upvoted = false;
var downvoted = false;
var passCount = 3;

function getModal(modalName, title, bodyId){
  return `
  <!-- Modal -->
<div class="modal fade" id="` + modalName + `" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">`+ title +`</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div id="` + bodyId + `" class="modal-body">

    </div>
  </div>
</div>
</div>`
}

$(document).ready(function(){


  $("#problems-back-button").click(function(){
    window.location.href="home_android.html";
  });

  $("#multiple_input_group").change(function(){
    //get just filename from full path
    $("#file-name").html($("#multiple_input_group").val().replace(/^.*[\\\/]/, ''));
  });

  //works for dynamic elements
  $(document).on("click",".more-button", function(){
    $("#more-modal").modal();

    var selected = this.id.replace('more-button-','');
    console.log(selected);

    var photo = "";
    var description = "";
    var location = "";
    var priority = "";
    var upvotes = "";
    var completed = "40";

    if(selected === "1"){
      photo = "https://www.freeiconspng.com/uploads/lion-icon-6.png";
      description = "Lion escaped from zoo";
      location = "Observator";
      priority = "HIGH";
      upvotes = "61";
      completed = "40";
    }else if(selected === "2"){
      photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG98-3YswD7lA2a9OeXeAmwcrvdVV7ixmBJKJZcUGKoO4ANJcEQ&s";
      description = "Everybody can help";
      location = "City Centre";
      priority = "HIGH";
        upvotes = "63";
        completed = "20";
    }else if(selected === "13"){
      photo = "./images/city.png";
      description = "description";
      location = "Gruia";
      priority = "HIGH";
      upvotes = "0";
      completed = "60";
    }

    if(photo.length > 0){
        $("#more-body").html(`
          <div class="progress">
         <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
           `+ completed +`% Completed
         </div>
         <div id="user-comments-pop"></div>
          <div id="hall-comments-pop"></div>
       </div>
          <form style="margin-top:20px">
          <div class="form-group text-center">
             <button id="user-comments" type="button" class="btn btn-info">User Comments</button>
             <button id="hall-comments" type="button" class="btn btn-info">City Hall Comments</button>
           </div>
           <div class="form-group">
            <label for="problem-description2">Description</label>
            <textarea disabled class="form-control form-control-sm" id="problem-description2" placeholder="` + description + `" rows="2"/>
          </div>
          <div class="form-group">
           <label for="problem-location">Location</label>
           <input disabled class="form-control form-control-sm" id="problem-location" placeholder="` + location + `" rows="2"/>
         </div>
         <div class="form-group">
          <label for="problem-priority">Priority</label>
          <input disabled class="form-control form-control-sm" id="problem-priority" placeholder="` + priority + `" rows="2"/>
        </div>
        <div class="form-group">
         <label for="problem-priority">Upvotes</label>
         <input disabled class="form-control form-control-sm" id="problem-priority-upvote" placeholder="` + upvotes + `" rows="2"/>
       </div>
       <div class="form-group">
       <label for="problem-priority">Your vote</label>
         <i id="upvote-1"  class="upvote fas fa-2x fa-arrow-up mr-2"></i>
       </div>
           <div class="form-group">
            <label for="problem-description">Photo</label>
            <img src="`+ photo +`"
             alt="img" width="100%" height="333"
          </div>
          </form>
         `);
     }else{
       $("#more-body").html(`
         <div class="progress">
        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
          40% Completed
          </div>
        </div>
         <form style="margin-top:20px">
         <div class="form-group">
          <label for="problem-description2">Description</label>
          <textarea disabled class="form-control" id="problem-description2" placeholder="` + description + `" rows="2"/>
        </div>
        <div class="form-group">
         <label for="problem-location">Location</label>
         <input disabled class="form-control" id="problem-location" placeholder="` + location + `" rows="2"/>
       </div>
       <div class="form-group">
        <label for="problem-priority">Priority</label>
        <input disabled class="form-control" id="problem-priority" placeholder="` + priority + `" rows="2"/>
      </div>
      <div class="form-group">
      <label for="problem-priority">Your vote</label>
        <i id="upvote-1"  class="upvote fas fa-2x fa-arrow-up mr-2"></i>
      </div>
      <div class="form-group">
       <label for="problem-priority">Upvotes</label>
       <input disabled class="form-control" id="problem-priority-upvote" placeholder="` + upvotes + `" rows="2"/>
     </div>
         </form>
        `);
     }

     $(".upvote").click(function(){
       var id = this.id.replace('upvote-','');
         if(!upvoted){
           var ups = Number($("#problem-priority-upvote").attr('placeholder')) + 1;
           $("#problem-priority-upvote").attr('placeholder', ups);
           upvoted = true;
           $("#upvote-"+id).css('color', '#007c7a');
         }else{
           var ups = Number($("#problem-priority-upvote").attr('placeholder')) - 1;
           $("#problem-priority-upvote").attr('placeholder', ups);
           upvoted = false;
           $("#upvote-"+id).css('color', 'black');
         }
     });

  });


  $("#submit-problem-button").click(function(){
    //send data to server...
    var category = $("#problem-category").val();
    var location = $("#problem-location").val();
    var priority = $("#problem-priority").val();
    var title = $("#problem-title").val();
    var description = $("#problem-description").val();
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var date = (year.toString()).substring(2,4) + "/" + month + "/" + day;

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

      incrId++;

      //apend to table
      var tablee = $('#example').DataTable();   ;
      tablee.row.add( [
           title,
          category,
           date,
           `<button id="more-button-` + incrId+`" type="button" class="more-button btn-xs btn-info">More</button>`
       ] ).draw( false );
      // $("#problems-table-body").prepend(`
      //   <tr>
      //       <td>`+ title +`</td>
      //       <td>`+category+`</td>
      //       <td>`+date+`</td>
      //       <td><button id="more-button-` + incrId+`" type="button" class="more-button btn-xs btn-info">More</button></td>
      //   </tr>
      //   `);

        //update dataTable
        $('#example').DataTable().draw();
   }else{

     $("#message-modal").modal();
     $("#message-body").html(`
       <div class="alert alert-danger" role="alert">`
        +errors+
       `</div>
       `);
   }
  });


  //sorting off
  $('#example').dataTable( {
   "aaSorting": []
  });

})
