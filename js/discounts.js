let remainingDiamonds = 3;

const initialize = () => {
    $("#discounts-back-button").click(function () {
        window.location.href = "home_android.html";
    });

    $("#remaining-diamonds").text(remainingDiamonds + " x");

    $(".text-block-dacia").text("5% discount");

    $(".discount").click(() => {
        if (remainingDiamonds > 0) {
            let resp = confirm("Are you sure you want to use the credit?");
            if (resp) $("#remaining-diamonds").text(--remainingDiamonds + " x");
        } else {
            alert("You don't have enough credits!");
        }
    })

    $(".text-block-ctp").text("1 free ticket");
    $(".text-block-allview").text("5% discount");
    $(".text-block-cfr").text("20% discount");
}

$(document).ready(initialize);
