var upvoted = false;
var downvoted = false;

$(document).ready(function(){

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


  $("#wifi-button").click(function(){
      $("#wifi-elems").html(getModal("wifi-modal","Nearby Wifis", "wifi-modal-body"));
      $("#wifi-modal").modal();

      $("#wifi-modal-body").html(`
        <div  style="overflow-y: scroll;">
        <table id="example" class="table table-striped table-bordered">
                <tbody id="problems-table-body">
                  <button id="place-1" type="button" class="btn btn-info btn-block place">
                      Pizzeria Seba
                  </button>
                  <button id="place-2" type="button" class="btn btn-info btn-block place">
                      Stradale
                  </button>
                </tbody
            </table>
            </div>
        `);

        $(".place").click(function(){

            var id = this.id.replace('place-','');
            if (id === "1"){
                $("#wifi-elems").append(getModal("wifi-modal-table","Pizzeria Seba", "wifi-modal-table-body"));
                $("#wifi-modal-table").modal();


                $("#wifi-modal-table-body").html(`
                  <div  style="overflow-y: scroll;">
                  <table id="example" class="table table-striped table-bordered">
                          <thead>
                              <tr>
                                  <th>Passwords submitted</th>
                                  <th>Upvote</th>
                                  <th>Downvote</th>
                                  <th>Your vote</th>
                                  <th>Date</th>
                              </tr>
                          </thead>
                          <tbody id="problems-table-body">
                              <tr>
                                  <td>12345</td>
                                  <td  id="up-1">10</td>
                                  <td  id="down-1">-7</td>
                                  <td><i id="upvote-1"  class="upvote fas fa-arrow-up mr-2"></i>
                                  <i id="downvote-1"  class="downvote fas fa-arrow-down"></i></td>
                                  <td>8/10/2019</td>
                              </tr>
                              <tr>
                                  <td>43210</td>
                                  <td id="up-2">2</td>
                                  <td id="down-2">-130</td>
                                  <td><i id="upvote-2"  class="upvote fas fa-arrow-up mr-2"></i>
                                  <i id="downvote-2"  class="downvote fas fa-arrow-down"></i></td>
                                  <td>8/10/2019</td>
                              </tr>
                      </table>

                      <button id="submit-pass" type="button" class="btn btn-info btn-block">
                          Submit new password
                      </button>
                      </div>
                  `);



                  $(".upvote").click(function(){
                    var id = this.id.replace('upvote-','');
                      if(!upvoted){
                        var ups = Number($("#up-"+id).text()) + 1;
                        $("#up-"+id).text(ups);
                        upvoted = true;
                        $("#upvote-"+id).css('color', '#007c7a');
                      }else{
                        var ups = Number($("#up-"+id).text()) - 1;
                        $("#up-"+id).text(ups);
                        upvoted = false;
                        $("#upvote-"+id).css('color', 'black');
                      }
                  });


                  $(".downvote").click(function(){
                    if(!downvoted){
                        downvoted = true;
                        var id = this.id.replace('downvote-','');
                        var ds = Number($("#down-"+id).text()) - 1;
                        $("#down-"+id).text(ds);
                        $("#downvote-"+id).css('color', '#007c7a');
                      }else{
                        downvoted = false;
                        var id = this.id.replace('downvote-','');
                        var ds = Number($("#down-"+id).text()) + 1;
                        $("#down-"+id).text(ds);
                        $("#downvote-"+id).css('color', 'black');
                      }
                  });
            }
        });

   });


})