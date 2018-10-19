// jquery
$(document).ready(function () {

    //console.log('jquery ok!');
    // Make connection from client side
    var socket = io();
    
    

    /*
    Functions that handles sending messages from clients
    by pressing Enter or clicking send
    Trims white space and checks for null string before emitting the msg
    */
    var emit = function(msg, user) {
        
        var data = {
            message: msg,
            user: user
        }
        socket.emit('chat message', data);
    }
    $('#msg').keypress(function(event) {
        var msg = $("#msg").val().trim();  
        if(event.which == 13 && msg != "") {
            //alert(msg);
            event.preventDefault();
            emit(msg);
            $("#msg").val('');
        }
    })
    $('#send').click(function(event) {
        var msg = $("#msg").val().trim();
        if(msg != "") {
            //alert(msg);
            event.preventDefault();
            emit(msg);
            $("#msg").val('');
        }
    })
    
    
    /*
    Function that handles displaying messages from server
    */
    
    
});
