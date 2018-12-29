<template>
    <div class="nav">
        <div class="tabs">
            <div class="tab">Live</div>
            <div class="tab">Scoreboard</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'nav'
    }

</script>

<style>
    .nav {
        background: #00bc7e;
        color: #fff;
        padding: 10px;
        height: 60px;
        width: 100%;
        position: relative;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d
    }

    .tabs {
        width: 100%;
        height: 2rem;
        position: absolute;
        bottom: 0;
    }

    .tabs .tab {
        display: inline-block;
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0 20px;
        font-weight: 600;
    }
</style>