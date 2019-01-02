<template>
    <div class="button-card">
        <p class="text">
            {{ text }} 
        </p>
        <p class="button-holder">
            <button v-on:click="selectCard()">Select</button>
        </p>
    </div>
</template>


<script>

    export default {
        name: "button-card",
        props: ['text'],
        methods: {
            selectCard: function(e) {
                this.$emit('card-selected', this.text);
            }
        }
    }
    
</script>

<style>
    .button-card {
        height: 100%;
        width: 200px;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d;
        border-radius: 5px;
        margin-right: 10px;
        background-color: #fff;
        position: relative;
        display: inline-block;
        white-space: initial;
        vertical-align: top;
    }

    .button-card p.text {
        margin: 0;
        padding: 10px;
    }

    .button-card p.button-holder {
        text-align: center;
        position: absolute;
        bottom: 10px;
        width: 100%;
        margin: 0;
    }

    .button-card button {
        width: 80%;
        background: #304960;
        color: #fff;
        font-size: 1rem;
        border-radius: 5px;
        padding: 5px;
        margin: 0 auto;
    }

    .button-card button:hover {
        background: #285e91;
        cursor: pointer;
    }
</style>