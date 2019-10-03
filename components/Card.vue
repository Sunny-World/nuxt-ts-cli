<template>
  <div class="card">
    <Form :label-width="50">
      <FormItem label="用户名">
        <i-input
          v-model="username"
          placeholder="请输入用户名"
        ></i-input>
      </FormItem>
      <FormItem label="密码">
        <i-input
          v-model="password"
          type="password"
          placeholder="请输入密码"
        ></i-input>
      </FormItem>
      <Button
        type="primary"
        style="width:100%;margin-top:20px;"
        @click="login"
      >登录</Button>
    </Form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Person } from "~/types";
import { login } from "~/req/user";

@Component({})
export default class Card extends Vue {
  @Prop() person!: Person;
  public username = "";
  public password = "";

  public async login() {
    const obj = {
      username: this.username,
      password: this.password
    };
    const res = await login(obj);
    if (res.code == 200) {
      this.$router.push({
        path: "/home"
      });
    } else {
      this.$Message.error("登录失败");
    }
  }
}
</script>

<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
<style>
.ivu-input {
  background-color: rgba(255, 255, 255, 0) !important;
  color: #fff;
}
</style>
