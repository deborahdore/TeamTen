var isSearched = false;
var isChecked = 0;
    
$(document).ready(function(){

  
    $("#msg-error").hide();

    $("#reset").click(function(){
        isChecked = 0;
        if(isSearched) $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.7766395843614!2d23.583424315812298!3d46.76929897913802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9cd2cbc48d%3A0x646fe710618fdd1d!2sTechnical%20University%20of%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1575998836557!5m2!1sen!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
        else{
            $("#new_map").hide();
            $("#map").show();
        }
        $("#traffic").prop("checked", false);
        $("#bicycle-track").prop("checked", false);
        $("#limited-traffic-area").prop("checked", false);
        $("#parking").prop("checked", false);
    })
    $("#back").click(function(){
        if(isSearched){
            $("#new_map").hide();
            $("#map").show();
            isSearched = false;
        }else{
            window.location.href="home_android.html";
        }
    });

    $("#btn-map").click(function(){
        isSearched  = true;
        var address = document.getElementById("position").value;
        console.log(address);
        if(address.toString().length>0){
            $("#map").hide();
            $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.7766395843614!2d23.583424315812298!3d46.76929897913802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9cd2cbc48d%3A0x646fe710618fdd1d!2sTechnical%20University%20of%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1575998836557!5m2!1sen!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
        }else{
            $("#new_map").html('<p style="color:red; ">Address can t be empty!</p>')
        }
    });

    $("#filters").click(function(){
        if(window.getComputedStyle(document.getElementById("myDropdown")).display == 'none'){
            $(".dropdown-content").show();
        }else{
            $(".dropdown-content").hide();
        }
    });

    $("#apply").click(addMaps);

    $("#location").click(function(){
        isSearched = true;
        $("#map").hide();
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.7766395843614!2d23.583424315812298!3d46.76929897913802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9cd2cbc48d%3A0x646fe710618fdd1d!2sTechnical%20University%20of%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1575998836557!5m2!1sen!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
    });
})

function addMaps(){
    $("#map").hide();
    $(".dropdown-content").hide();

    if($("#traffic").is(':checked')){
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10930.819501188585!2d23.57811873992747!3d46.770713413039026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sro!4v1576092721601!5m2!1sit!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
        isChecked++;
        console.log("traffic was pressed!")
    }
    if($("#bicycle-track").is(':checked')){
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10930.813671209537!2d23.578118738588635!3d46.770742139104044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1strasee%20pentru%20biciclete!5e0!3m2!1sit!2sro!4v1576092851630!5m2!1sit!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
        isChecked++;
        console.log("bicycle track was pressed!")
    }
    if($("#limited-traffic-area").is(':checked')){
        console.log("limited traffic area was pressed!")
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2732.646082927209!2d23.585591265577442!3d46.771872153257405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47490e9d685d7be9%3A0xa65f39d4aa0ffccb!2sPia%C8%9Ba%20Unirii%2C%20Cluj-Napoca!3m2!1d46.7700702!2d23.5903524!4m5!1s0x47490e9b85ff8931%3A0x9a21cdd271a51c8b!2sFacultatea%20Antica%20de%20Automatic%C4%83%20%C8%99i%20Calculatoare%20Din%20secolul%2010%2C%20Strada%20George%20Bari%C8%9Biu%2026-28%2C%20Cluj-Napoca%20400027!3m2!1d46.7723581!2d23.5852075!5e0!3m2!1sit!2sro!4v1576092932887!5m2!1sit!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
        isChecked++;
    }

    if($("#parking").is(':checked')){
        console.log("parking was pressed!")
        isChecked++;
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2732.645712204424!2d23.585591265493857!3d46.77187945977159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparking!5e0!3m2!1sit!2sro!4v1576093057761!5m2!1sit!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
    }

    if(isChecked>1){
        $("#msg-error").show();
        $("#new_map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.7766395843614!2d23.583424315812298!3d46.76929897913802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9cd2cbc48d%3A0x646fe710618fdd1d!2sTechnical%20University%20of%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1575998836557!5m2!1sen!2sro" frameborder="0" style="border:0;height:60vh;" allowfullscreen=""></iframe>`);
    }else{
        $("#msg-error").hide();
    }
    isChecked = 0;
    console.log(isChecked);
}