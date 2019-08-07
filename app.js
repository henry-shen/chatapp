// -- Include all compiled plugins (below), or include individual files as needed -->
$(document).ready(function(){

    setTimeout(first_text, 1000);

     $('#form').submit(function(event) {
    
        event.preventDefault();
        var textInput = $('#new-message').val();
        //$('#messages').html(textInput);
        $("p").last().after("<p></p>");
        $("p").last().addClass("blue-bubble").text(textInput);

        var objDiv = document.getElementById("scrollbox");
        objDiv.scrollTop = objDiv.scrollHeight;

    });

    

});
