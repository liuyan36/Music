<template>
  <div>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input v-model="password" placeholder="请输入内容"></el-input>
    <el-button @click="loginHandle" type="primary">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    loginHandle() {
      this.$api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res.data)
        // token 本地存储token
        localStorage.setItem("token", res.data.token)
        this.$router.push("/")
      })
    }
  }
};
</script>

<style scoped>

</style>

<style scoped>
</style>
