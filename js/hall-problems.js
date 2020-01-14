var selected = -1;

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
    window.location.href="home_hall.html";
  });

  $(".comment-button").click(function(){

    $("#user-comments-pop").html(getModal("user-comments-pop-modal","Comments", "user-comments-pop-modal-body"));
    $("#user-comments-pop-modal").modal();

    $("#user-comments-pop-modal-body").html(`
      <div class="form-group">
        <label for="comment-category">Switch Comments Type</label>
        <select id="comment-category" class="form-control form-control-sm">
          <option>Both</option>
          <option>User</option>
          <option>City Hall</option>
        </select>
      </div>
      <div class="row bootstrap snippets">
  <div class="col-md-6 col-md-offset-2 col-sm-12">
      <div class="comment-wrapper">
          <div class="panel panel-info">

              <div class="panel-body">
                  <textarea id="comment-area" class="form-control" placeholder="write a comment..." rows="3"></textarea>
                  <br>
                  <button type="button" id="post-comment" class="btn btn-info pull-right">Post</button>
                  <div class="clearfix"></div>
                  <hr>
                  <ul class="media-list">
                  <li class="media">
                      <a href="#" class="pull-left">
                          <img src="./images/profile_img.png" alt="" class="img-circle">
                      </a>
                      <div class="media-body">
                          <span class="text-muted pull-right">
                              <small class="text-muted">2 minutes ago</small>
                          </span>
                          <strong class="text-success">@Mrs.Big/CityHall</strong>
                          <p>
                             Please anybody who sees this animal, report it immediately!
                          </p>
                      </div>
                  </li>
                      <li class="media">
                          <a href="#" class="pull-left">
                              <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                          </a>
                          <div class="media-body">
                              <span class="text-muted pull-right">
                                  <small class="text-muted">30 min ago</small>
                              </span>
                              <strong class="text-success">@LaurenceCorreil</strong>
                              <p>
                                 No, it isn't. Please do not go out!
                              </p>
                          </div>
                      </li>
                      <li class="media">
                          <a href="#" class="pull-left">
                              <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                          </a>
                          <div class="media-body">
                              <span class="text-muted pull-right">
                                  <small class="text-muted">32 min ago</small>
                              </span>
                              <strong class="text-success">@JohnNida</strong>
                              <p>
                                  Isn't this a false alarm?
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

  </div>
</div>
      `);

      $("#comment-category").change(function(e) {

      var cat =  $("#comment-category").val();
      console.log(cat);
      if(cat == "Both"){
          $(".media-list").html(
        `
        <li class="media">
            <a href="#" class="pull-left">
                <img src="./images/profile_img.png" alt="" class="img-circle">
            </a>
            <div class="media-body">
                <span class="text-muted pull-right">
                    <small class="text-muted">2 minutes ago</small>
                </span>
                <strong class="text-success">@Mrs.Big/CityHall</strong>
                <p>
                   Please anybody who sees this animal, report it immediately!
                </p>
            </div>
        </li>
        <li class="media">
            <a href="#" class="pull-left">
                <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
            </a>
            <div class="media-body">
                <span class="text-muted pull-right">
                    <small class="text-muted">30 min ago</small>
                </span>
                <strong class="text-success">@LaurenceCorreil</strong>
                <p>
                   No, it isn't. Please do not go out!
                </p>
            </div>
        </li>
        <li class="media">
            <a href="#" class="pull-left">
                <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
            </a>
            <div class="media-body">
                <span class="text-muted pull-right">
                    <small class="text-muted">32 min ago</small>
                </span>
                <strong class="text-success">@JohnNida</strong>
                <p>
                    Isn't this a false alarm?
                </p>
            </div>
        </li>
        `);
      }else if(cat == "User"){
        $(".media-list").html(
      `
      <li class="media">
          <a href="#" class="pull-left">
              <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
          </a>
          <div class="media-body">
              <span class="text-muted pull-right">
                  <small class="text-muted">30 min ago</small>
              </span>
              <strong class="text-success">@LaurenceCorreil</strong>
              <p>
                 No, it isn't. Please do not go out!
              </p>
          </div>
      </li>
      <li class="media">
          <a href="#" class="pull-left">
              <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
          </a>
          <div class="media-body">
              <span class="text-muted pull-right">
                  <small class="text-muted">32 min ago</small>
              </span>
              <strong class="text-success">@JohnNida</strong>
              <p>
                  Isn't this a false alarm?
              </p>
          </div>
      </li>
      `);
      }else{
        $(".media-list").html(
      `
      <li class="media">
          <a href="#" class="pull-left">
              <img src="./images/profile_img.png" alt="" class="img-circle">
          </a>
          <div class="media-body">
              <span class="text-muted pull-right">
                  <small class="text-muted">2 minutes ago</small>
              </span>
              <strong class="text-success">@Mrs.Big/CityHall</strong>
              <p>
                 Please anybody who sees this animal, report it immediately!
              </p>
          </div>
      </li>
      `);
      }
    });

      $("#post-comment").click(function(){
        var message = $("#comment-area").val();

        var cat =  $("#comment-category").val();
        console.log(cat);
        if(cat != "User"){
        $("#comment-area").val("");
         $(".media-list").prepend(`
           <li class="media">
               <a href="#" class="pull-left">
                   <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
               </a>
               <div class="media-body">
                   <span class="text-muted pull-right">
                       <small class="text-muted">0 min ago</small>
                   </span>
                   <strong class="text-success">@Admin/CityHall</strong>
                   <p>
                     `+message+` </a>
                   </p>
               </div>
           </li>
           `)
           }
          });


  });

  $(".reprioritize-button").click(function(){
    //send data to server...
    $("#reprioritize-modal").modal();

    selected = this.id.replace('reprioritize-button-','');
    console.log(selected);
  });

  $("#submit-problem-button").click(function(){
    //send data to server...
    var priority = $("#problem-priority").val();

    var allRows = $("#problems-table-body tr");
    allRows.each(function(i, obj) {
      var rowId = $(obj).attr('id');
      //var checkID = rowId.replace("row-");
      //console.log(rowId);
      if(rowId == "row-"+selected){
        $(obj).find('.td-priority').html(priority);
      }
    });

    $("#reprioritize-modal").modal('hide');
  });


  $(".photos-button").click(function(){
    //send data to server...
    $("#photos-modal").modal();

    selected = this.id.replace('photos-button-','');
    console.log(selected);

    if(selected === "1"){
      $("#photos-body").html(`
        <img src="https://www.freeiconspng.com/uploads/lion-icon-6.png"
         alt="Trulli" width="100%" height="333">
       `);
    }else if(selected === "2"){
      $("#photos-body").html(`
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG98-3YswD7lA2a9OeXeAmwcrvdVV7ixmBJKJZcUGKoO4ANJcEQ&s"
         alt="Trulli" width="100%" height="333">
       `);
    }else if(selected === "3"){
      $("#photos-body").html(`
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSua00HqB4oQTmwszeSbGxrg1bdLkxMXRmtTO5MyMXN_ZPO3NmT&s"
         alt="Trulli" width="100%" height="333">
       `);
    }else{
      $("#photos-body").html("");
    }
  });


  //sorting off
  $('#example').dataTable( {
   "aaSorting": []
  });

})
