var selected = -1;

$(document).ready(function(){


  $("#problems-back-button").click(function(){
    window.location.href="home_hall.html";
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

    var row = $('#problems-table-body tr:nth-child('+selected+') .td-priority');
    row.html(priority);
    $("#reprioritize-modal").modal('hide');
  });

    $('#example').DataTable();

})
