<template>
    <div class="nav">
        <div class="tabs">
            <div class="tab">Live</div>
            <div class="tab">Scoreboard</div>
            <div class="tab user">
                <div class="flare">
                </div>
                {{ user }}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'tabs',
        props: ['user', 'tabIndex']
    }

</script>

<style>
    .nav {
        background: #00bc7e;
        color: #fff;
        padding: 10px;
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
        width: calc(100% / 3);
        text-align: center;
        border-bottom: 1px solid #00bc7e;
        text-transform: uppercase;
        font-weight: 500;
    }

    .tab.user {
        text-transform: capitalize;
        text-align: left;
    }
</style>