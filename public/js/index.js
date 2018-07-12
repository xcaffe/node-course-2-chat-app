var socket = io();

        socket.on('connect', function() {
            console.log('Connected to server');

            socket.emit('createMessage', {
                from: 'Andrew',
                text: 'Hey , yup what is going on.' 
         });
        });
        
        socket.on('disconnect', function() {
            console.log('Disconnected from server');
        });

        socket.on('newEmail', function (email) {
            console.log('New email', email);
        });

        socket.on ('newMessage', function(message)  {
            console.log('newMessage', message);
        });