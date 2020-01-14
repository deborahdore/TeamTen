$(document).ready(function()
{
    
    
    var voucher1;
    var voucher2;
    $("#bus-tickets-back-button").click(function()
    {
        window.location.href="rewards_home.html";
    });

    $("#redeem1-button").click(function()
    {
        $("#bus-tickets1-div").hide();
        voucher1 = true;
        if(voucher1 == true && voucher2 == true)
        {
            $("#no-bus-ticket").show();
        }
    });

    $("#decline1-button").click(function()
    {
        $("#bus-tickets1-div").hide();
    });

    $("#redeem2-button").click(function()
    {
        $("#bus-tickets2-div").hide();
        voucher2 = true;
        if(voucher1 == true && voucher2 == true)
        {
            $("#no-bus-ticket").show();
        }
    });

    $("#decline2-button").click(function()
    {
        $("#bus-tickets2-div").hide();
    });

    $("#no-bus-ticket").hide();

    

})