$(document).ready(function(){
    // displaying date w jquery method
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    // on click function save input into the field and time 
    $(".save").on("click", function(){
        // displays message upon saving event to notify user that they saved their event to localStorage
        $("#storeMessage").removeClass("hidden");
        // using this function to display the variables and then save it into the local storage 
        var text = $(this).siblings(".text").val();
        
        var time = $(this).parent().attr("id");
        // sets time and text to local storage
        localStorage.setItem(time, text);
    });
        // saves local 
        $("#09AM .text").val(localStorage.getItem("09AM"));
        $("#10AM .text").val(localStorage.getItem("10AM"));
        $("#11AM .text").val(localStorage.getItem("11AM"));
        $("#12PM .text").val(localStorage.getItem("12PM"));
        $("#13PM .text").val(localStorage.getItem("13PM"));
        $("#14PM .text").val(localStorage.getItem("14PM"));
        $("#15PM .text").val(localStorage.getItem("15PM"));
        $("#16PM .text").val(localStorage.getItem("16PM"));
        $("#17PM .text").val(localStorage.getItem("17PM"));

