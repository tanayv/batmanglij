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
            text: ""
        },
        white: []
    }
}

const io = require('socket.io')(server);
io.on('connection', function(socket) {

    socket.on('REGISTER_USER', function(data) {
        console.log("Registering user: " + data.user);

        if (state.players.findIndex((player) => (player.name === data.user)) != -1) {
            console.log("User already exists, merging session...")
        }
        else {
            state.players.push({
                name: data.user,
                czar: false,
                score: 0
            });
        }

        if (state.players.length == 2)
            startGame();
        
        io.emit('UPDATE_UI', JSON.stringify(state))
    });

    socket.on('SELECT_CARD', function(data) {
        console.log(data);
        console.log("Received card: " + JSON.parse(data).text + " from user " + JSON.parse(data).sender);
        state.cards.white.push(JSON.parse(data));
        io.emit('UPDATE_UI', JSON.stringify(state));
    })

    socket.on('DECLARE_WINNER', function(data) {
        startNextRound(data.czar, data.winner);
        io.emit('UPDATE_UI', JSON.stringify(state));
        io.emit('NEW_ROUND', JSON.stringify(state));
    })

});

const startGame = () => {

    /* Draw a black card at the start of the game */
    state.cards.black = cardManager.drawBlackCard();

    /* Assign first player as Card Czar */
    state.players[0].czar = true;

}

const startNextRound = (czar, winner) => {

    /* Remove all cards */
    state.cards.white.length = 0;
    state.cards.black = {
        "text": ""
    };

    /* Increase winner's score */
    let winnerSlot = state.players.findIndex((player) => {
        return player.name === winner
    })
    state.players[winnerSlot].score++;

    /* Select next Czar */
    let currentCzarSlot = state.players.findIndex((player) => {
        return player.name === czar.name
    })
    let nextCzarSlot = currentCzarSlot + 1;
    if (nextCzarSlot >= state.players.length)
        nextCzarSlot = 0;

    console.log("Round summary:");
    console.log({
        "playerList": state.players,
        "czar": czar,
        "winner": winner, 
        "currentCzarSlot": currentCzarSlot,
        "nextCzarSlot": nextCzarSlot
    })

    state.players[currentCzarSlot].czar = false;
    state.players[nextCzarSlot].czar = true;

    /* Draw new black card */
    state.cards.black = cardManager.drawBlackCard();

}
