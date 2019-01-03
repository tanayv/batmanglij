<template>
    <div :class="['czar-card', color]">
        <p class="text">
            {{ text }} 
        </p>
        <p class="button-holder" v-if="color != 'black'">
            <button v-on:click="selectCard()">Select</button>
        </p>
    </div>
</template>


<script>

    export default {
        name: "button-card",
        props: ['text', 'sender', 'color'],
        methods: {
            selectCard: function(e) {
                this.$emit('card-selected', {
                    text: this.text,
                    sender: this.sender 
                });
            }
        }
    }
    
</script>

<style>
    .czar-card {
        width: 100%;
        height: 200px;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d;
        border-radius: 5px;
        margin-right: 10px;
        background-color: #fff;
        position: relative;
        display: inline-block;
        white-space: initial;
        vertical-align: top;
    }

    .czar-card.black {
        background-color: #3a3a3a;
        color: #fff;
    }

    .czar-card.white {
        background-color: #fff;
    }

    .czar-card p.text {
        margin: 0;
        padding: 10px;
    }

    .czar-card p.button-holder {
        text-align: center;
        position: absolute;
        bottom: 10px;
        width: 100%;
        margin: 0;
    }

    .czar-card button {
        width: 80%;
        background: #304960;
        color: #fff;
        font-size: 1rem;
        border-radius: 5px;
        padding: 5px;
        margin: 0 auto;
    }

    .czar-card button:hover {
        background: #285e91;
        cursor: pointer;
    }
</style>