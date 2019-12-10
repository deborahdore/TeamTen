
$(document).ready(function()
{
    $("#register-volunteer-back-button").click(function()
    {
        window.location.href="register_volunteer.html";
    });


    $('#birth-date-form-input').datepicker({
        format: 'mm/dd/yyyy'
    });

    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
      });


})
