<template>
    <div class="scoreboard">
        <table>
            <tr>
                <th>Player</th>
                <th>Czar</th>
                <th>Score</th>
            </tr>
            <tr v-for="player of game.players" :key="player.name">
                <td>{{ player.name }}</td>
                <td>{{ player.czar }}</td>
                <td>{{ player.score }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'scoreboard',
        computed: {
            ...mapState(['game', 'user'])
        }
    }
</script>

<style>

    .scoreboard {
        height: calc(100% - 60px);
        width: 100%;
        background-color: #fff;
        padding: 10px;
    }

    .scoreboard table {
        width: 100%;
    }

    .scoreboard table tr td, .scoreboard table tr th,  {
        padding: 5px;
        text-align: left;
    }

</style>
