
$(document).ready(function()
{
    $("#register-volunteer-back-button").click(function()
    {
        window.location.href="register_volunteer.html";
    });


    $("#submit-form-btn").click(function()
    {
    //  alert("Your request has been sent! Thank You!");
      $('form#forrm').trigger("reset");
      $('#redeem-modal').modal('show');
      return false;
    });



    $('#birth-date-form-input').datepicker({
        format: 'mm/dd/yyyy'
    });

    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });

      $("#multiple_input_group").change(function(){

        //get just filename from full path

        $("#file-name").html($("#multiple_input_group").val().replace(/^.*[\\\/]/, ''));

      });


      $("#multiple_input_group2").change(function(){

        //get just filename from full path

        $("#file-name2").html($("#multiple_input_group2").val().replace(/^.*[\\\/]/, ''));

      });


})
