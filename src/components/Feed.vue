<template>
    <div class="feed">
        <Card color="black"/>
        <hr/>
        <Card color="white"/>
        <Card color="white"/>
    </div>
</template>


<script>

    import Card from "./Card.vue"

    export default {
        name: "feed",
        components: {
            Card
        }
    }
</script>

<style>
    .feed {
        height: calc(100% - 60px);
        width: 100%;
        background-color: #ececec;
        padding: 10px;
    }

    hr {
        opacity: 0.3;
    }
</style>