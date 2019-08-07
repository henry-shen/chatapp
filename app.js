// -- Include all compiled plugins (below), or include individual files as needed -->
$(document).ready(function(){

    // Call function for chat box to automatically send messages.

    setTimeout(first_text, 1000);

    // Trigger when you enter submit message form.

     $('#form').submit(function(event) {
    
        event.preventDefault();

        var textInput = $('#new-message').val();
        $("p").last().after("<p></p>");
        $("p").last().addClass("blue-bubble").text(textInput);

        var scrollbox = document.getElementById("scrollbox");
        scrollbox.scrollTop = scrollbox.scrollHeight;

        setTimeout(chatbot_text, 5000);

        var scrollbox = document.getElementById("scrollbox");
        scrollbox.scrollTop = scrollbox.scrollHeight;

    });
});
