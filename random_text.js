function first_text() {

    $("p").last().after("<p></p>");
    $("p").last().addClass("orange-bubble").text(f_text);

    setTimeout(chatbot_text, 5000);
};

function chatbot_text() {

    var i = Math.floor(r_text.length * Math.random())

    $("p").last().after("<p></p>");
    $("p").last().addClass("orange-bubble").text(r_text[i]);

    var objDiv = document.getElementById("scrollbox");
    objDiv.scrollTop = objDiv.scrollHeight;
   
    setTimeout(chatbot_text, 5000);
}


var r_text = new Array (); 

r_text[0] = "I was just thinking about you!"; 
r_text[1] = "You are a great example for others."; 
r_text[2] = "You have great ideas."; 
r_text[3] = "When I grow up I want to be you!"; 
r_text[4] = "I appreciate all of your opinions."; 
r_text[5] = "I understand."; 
r_text[6] = "Can I ask you a question?"; 
r_text[7] = "That's interesting."; 
r_text[8] = "Tell me more."; 
r_text[8] = "Give me a second."; 

var f_text = 'Hello! I am a chat bot. I will generate random messages from now on.';




