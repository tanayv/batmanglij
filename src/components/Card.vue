<template>
    <div :class="['card', color]">
        <p>{{ text }}</p>
    </div>
</template>


<script>

    export default {
        name: "card",
        props: ['color', 'text']
    }
    
</script>

<style>
    .card {
        height: 200px;
        width: 100%;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 20px;
    }

    .card.black {
        background-color: #3a3a3a;
        color: #fff;
    }

    .card.white {
        background-color: #fff;
    }
</style>