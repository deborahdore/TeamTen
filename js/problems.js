var incrId = 12;

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

    var date = "";
    var photo = "";
    var description = "";
    var location = "";
    var priority = "";
    var upvotes = "";

    if(selected === "1"){
      date = "2019/11/01";
      photo = "https://www.freeiconspng.com/uploads/lion-icon-6.png";
      description = "Lion escaped from zoo";
      location = "Observator";
      priority = "HIGH";
      upvotes = "61";
    }else if(selected === "2"){
      date = "2019/10/01";
      photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG98-3YswD7lA2a9OeXeAmwcrvdVV7ixmBJKJZcUGKoO4ANJcEQ&s";
      description = "Everybody can help";
      location = "City Centre";
      priority = "HIGH";
        upvotes = "63";
    }else if(selected === "13"){
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1;
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      date = year + "/" + month + "/" + day;
      photo = "./images/city.png";
      description = "description";
      location = "Gruia";
      priority = "HIGH";
        upvotes = "67";
    }

    if(photo.length > 0){
        $("#more-body").html(`
          <form>
            <div class="form-group">
             <label for="problem-description">Date</label>
             <input disabled class="form-control" id="problem-description" placeholder="` + date + `" rows="2"/>
           </div>
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
         <label for="problem-priority">Upvotes</label>
         <input disabled class="form-control" id="problem-priority" placeholder="` + upvotes + `" rows="2"/>
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
         <form>
           <div class="form-group">
            <label for="problem-description">Date</label>
            <input disabled class="form-control" id="problem-description" placeholder="` + date + `" rows="2"/>
          </div>
         </form>
        `);
     }
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

      incrId++;
      //apend to table
      $("#problems-table-body").prepend(`
        <tr>
            <td>`+ title +`</td>
            <td>`+description+`</td>
            <td>`+category+`</td>
            <td>0</td>
            <td>`+location+`</td>
            <td>`+priority+`</td>
            <td><button id="more-button-` + incrId+`" type="button" class="more-button btn btn-info">More</button></td>
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


  //sorting off
  $('#example').dataTable( {
   "aaSorting": []
  });

})
