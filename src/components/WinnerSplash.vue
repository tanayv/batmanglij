<template>
    <div class="winner-splash">
        <p>Winner: {{ roundWinner.winner }}</p>
        <p>Card: {{ roundWinner.card }}</p>
    </div>
</template>

<script>

    export default {
        name: 'winner-splash',
        props: ['roundWinner']
    }
</script>

<style>

</style>
