$(document).ready(function(){
    // displaying date w jquery method
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    $(".save").on("click", function(){
        $("#storeMessage").removeClass("hidden");
        var text = $(this).siblings(".text").val();
        
        var time = $(this).parent().attr("id");
        // sets time and text to local storage
        localStorage.setItem(time, text);
    });
        // saves local 
        $("#9 .text").val(localStorage.getItem("9"));
        $("#10 .text").val(localStorage.getItem("10"));
        $("#11 .text").val(localStorage.getItem("11"));
        $("#12 .text").val(localStorage.getItem("12"));
        $("#13 .text").val(localStorage.getItem("13"));
        $("#14 .text").val(localStorage.getItem("14"));
        $("#15 .text").val(localStorage.getItem("15"));
        $("#16 .text").val(localStorage.getItem("16"));
        $("#17 .text").val(localStorage.getItem("17"));

        //changes color of row based on time of the day

        for (let index = 09; index < 18; index++) {
            var hour = "#" + index;
            var currentHour = moment().hour();
            console.log(currentHour);
            if (index === currentHour) {
                $ (hour).addClass("present")
            } 
            else if (index < currentHour) {
                $(hour).addClass("past")
            }
            else if (index > currentHour){
                $(hour).addClass("future")
            }
        }
})

