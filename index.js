const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const cardManager = require("./cards");

app.use("/api", cardManager.router);
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
        state.players.push({
            name: data.user,
            czar: false,
            score: 0
        });
        io.emit('UPDATE_UI', JSON.stringify(state))

        if (state.players.length == 2)
            startGame();
    });

    socket.on('SELECT_CARD', function(data) {
        console.log("Received card: " + data.cardText + " from user in slot " + data.senderSlot);
        state.cards.white.push({
            text: data.cardText,
            senderSlot: data.senderSlot
        });
    })

    socket.on('DECLARE_WINNER', function(data) {
        console.log("Round complete: Czar (Player #" + data.currentCzarSlot + ") selected Winner Player (#" + data.winnerSlot + ")");
        startNextRound(data.currentCzarSlot, data.winnerSlot);
        io.emit('UPDATE_UI', JSON.stringify(state));
    })

});

const startGame = () => {

    /* Draw a black card at the start of the game */
    state.cards.black = cardManager.drawBlackCard();

    /* Assign first player as Card Czar */
    state.players[0].czar = true;

}

const startNextRound = (currentCzarSlot, winnerSlot) => {

    /* Remove all cards */
    state.cards.white.length = 0;
    state.cards.black = {};

    /* Increase winner's score */
    state.players[winnerSlot].score++;

    /* Select next Czar */
    let nextCzarSlot = currentCzarSlot + 1;
    if (nextCzarSlot >= state.players.length)
        nextCzarSlot = 0;

    state.players[currentCzarSlot].czar = false;
    state.players[nextCzarSlot].czar = true;

    /* Draw new black card */
    state.cards.black = cardManager.drawBlackCard();

}
