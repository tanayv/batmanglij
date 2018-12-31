const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const server = app.listen(PORT, function() {
    console.log('server running on ' + PORT);
});

let state = {
    players: [

    ],
    cards: {
        black: {

        },
        white: [{

        }]
    }
}

const io = require('socket.io')(server);
io.on('connection', function(socket) {
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });

    socket.on('REGISTER_USER', function(data) {
        console.log("Registering user: " + data.user);
        io.emit('UPDATE_UI', JSON.stringify(state))
    });

});