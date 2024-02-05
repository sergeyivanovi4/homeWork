$(document).ready(function(){
    var nextMessageId = 0;

    function sendData(data, callback){
        $.post("http://students.a-level.com.ua:10012",JSON.stringify(data),callback, "json");
    }

    function sendMessage(nick, message){
        var data    = {func: "addMessage", nick: nick, message: message, author: 'chat'};
        sendData(data, function(data){
            getMessages();
        });
    }

    function cleanUp(text){
        if (typeof text !== 'string')
            return text;
        if (text.match(/<script/i)){
            let el = document.createElement('div');
            el.innerText = text;
            return `<h1>SUPER HACKER CODE:</h1><pre>${el.innerHTML}</pre>`
        }
        return text;
    }

    function getMessages(){
        var data    = {func: "getMessages", messageId: nextMessageId, author: 'chat'};
        sendData(data, function(data){
            //for (var msgIndex=0;msgIndex<data.data.length;msgIndex++)
            for (var msgIndex in data.data){
                msg     = data.data[msgIndex]
                $msgDiv = $("<div>").html(`<b>${cleanUp(msg.nick)}</b>:${cleanUp(msg.message)}`);
                $("#chat").prepend($msgDiv);
            }
            nextMessageId = data.nextMessageId;
        });
    }

    $("#send").click(function(){
        var nick    = $('#nick').val();
        var message = $('#msg').val();
        sendMessage(nick, message);
    });
    getMessages();

    setInterval(getMessages,2000);
});

