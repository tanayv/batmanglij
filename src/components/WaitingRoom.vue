<template>
    <div class="container">
        <div class="box">
            Waiting for more people to join...
        </div>
    </div>
</template>

<script>
export default {
    name: 'waiting-room'
}
</script>

<style>
    .container {
        background-color: #ececec;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box {
        background-color: #fff;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d;
        width: 90%;
        padding: 15px;
        border-radius: 5px;
    }
</style>
