<template>
    <div class="nav">
        <div class="tabs">
            <div class="tab" v-bind:class="{ active: activeTabIndex == 0 }" v-on:click="SET_ACTIVE_TAB_INDEX(0)">Live</div>
            <div class="tab" v-bind:class="{ active: activeTabIndex == 1 }" v-on:click="SET_ACTIVE_TAB_INDEX(1)">Scoreboard</div>
            <div class="tab user">
                {{ user }}
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'navigation',
        computed: {
            ...mapState(['activeTabIndex', 'user'])
        },
        methods: {
            ...mapActions(['SET_ACTIVE_TAB_INDEX'])
        }
    }

</script>

<style>
    .nav {
        background: #00bc7e;
        color: #fff;
        height: 60px;
        width: 100%;
        position: relative;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d
    }

    .tabs {
        width: 100%;
        height: 2rem;
        position: absolute;
        bottom: 3px;
    }

    .tabs .tab {
        display: inline-block;
        font-size: 1.3rem;
        line-height: 2rem;
        padding: 0 20px;
        width: calc(100% / 3);
        text-align: center;
        border-bottom: 3px solid #00bc7e;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
    }

    .tabs .tab:hover {
        border-bottom: 3px solid #fff;
        
    }

    .tabs .tab.active {
        border-bottom: 3px solid #fff;
    }



    .tab.user {
        text-transform: capitalize;
        text-align: right;
        font-size: 0.8rem;
        line-height: 2rem;
        cursor: initial;
        border-bottom: none !important;
    }
</style>