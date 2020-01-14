$(document).ready(function()
{
    $("#no-voucher").hide();
    
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
            $("#no-voucher").show();
        }
    });

    $("#decline1-button").click(function()
    {
        $("#opera-tickets-div").hide();
        voucher1 = true;
        if(voucher1 == true && voucher2 == true)
        {
            $("#no-voucher").show();
        }
    });

    $("#redeem2-button").click(function()
    {
        $("#cinema-tickets-div").hide();
        voucher2 = true;
        if(voucher1 == true && voucher2 == true)
        {
            $("#no-voucher").show();
        }
    });

    $("#decline2-button").click(function()
    {
        $("#cinema-tickets-div").hide();
        voucher2 = true;
        if(voucher1 == true && voucher2 == true)
        {
            $("#no-voucher").show();
        }
    });

    

    

})
