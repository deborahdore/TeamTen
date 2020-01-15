
$(document).ready(function()
{
    isCityHall = localStorage.getItem("isCityHall");

    $("#be-volunteer-back-button").click(function()
    {
      if (isCityHall === "true") {
        window.location.href="home_hall.html";
      } else {
        window.location.href="home_android.html";
      }

    });

    $("#register-volunteer-button").click(() => window.location.href="register_volunteer_form.html");

    $("#you-are-wanted-button").click(() => window.location.href="you_are_wanted.html");
})
