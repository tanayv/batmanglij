<template>
    <div class="login-wall">
        <div class="login-box">

            <div class="flare">
            </div>

            <form @submit.prevent="registerUser">
              <div class="gorm-group">
                  <input type="text" v-model="user" class="form-control" placeholder="Name">
              </div>
              <button type="submit" class="btn btn-success">Join</button>
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
        padding: 40px 15px;
        border-radius: 5px;
    }

    input[type="text"] {
        width: 100%;
        border: 1px solid #c2c0c0;
        font-size: 1.3rem;
        border-radius: 3px;
        padding: 10px;
        outline: none !important;
        margin-bottom: 10px;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input[type="text"]:focus {
        border: 1px solid #7c7c7c;
    }

    button {
        width: 100%;
        background: #304960;
        color: #fff;
        font-size: 1.3rem;
        border-radius: 3px;
        padding: 10px;
        margin: 0 auto;
        outline: none !important;
    }

    button:hover {
        background: #285e91;
        cursor: pointer;
    }
</style>
