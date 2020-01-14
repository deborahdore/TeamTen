$(document).ready(function()
{
    $("#vouchers-back-button").click(function()
    {
        window.location.href="rewards_home.html";
    });

    $("#redeem-button").click(() => modal.style.dsiplay="block");

    $("#bus-tickets-button").click(() => window.location.href="you_are_wanted.html");
})
