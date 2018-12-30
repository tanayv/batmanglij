<template>
    <div class="login-wall">
        <div class="login-box">

            <div class="flare">
            </div>

            <form @submit.prevent="registerUser">
              <div class="gorm-group">
                  <label for="user">User:</label>
                  <input type="text" v-model="user" class="form-control">
              </div>
              <button type="submit" class="btn btn-success">Send</button>
          </form>

        </div>
    </div>
</template>

<script>
export default {
    name: "login-wall",
    data() {
        return {
            user: ''
        }
    },
    methods: {
        registerUser(e) {
            e.preventDefault();
            this.$emit('register-user', this.user)
        }
    }
}
</script>

<style>
    .login-wall {
        background-color: #ececec;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-box {
        background-color: #fff;
        box-shadow: 0px 1px 5px 0px #1a1a1a3d;
        width: 90%;
        padding: 15px;
        border-radius: 5px;
    }
</style>
