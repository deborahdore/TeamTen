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
