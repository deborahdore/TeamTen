$(document).ready(function()
{
    var voucher1;
    var voucher2;
    $("#vouchers-back-button").click(function()
    {
        window.location.href="rewards_home.html";
    });

    $("#redeem1-button").click(function()
    {
        $("#opera-tickets-div").hide();
        voucher1 = true;
        if(voucher1 == true && voucher2 == true)
        {
            console.log("hei");
        }
    });

    $("decline1-button").click(function()
    {
        $("#opera-tickets-div").hide();
    });

    $("#redeem2-button").click(function()
    {
        $("#cinema-tickets-div").hide();
        voucher2 = true;
        if(voucher1 == true && voucher2 == true)
        {
            console.log("hei");
        }
    });

    $("decline2-button").click(function()
    {
        $("#cinema-tickets-div").hide();
    });

    

})
