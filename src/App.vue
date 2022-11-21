<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router';

var userlist = 0;
var username = '';
if (sessionStorage.getItem("username") != null) {
  userlist = 1;
  username = sessionStorage.getItem("username") + "　您好";
}

function logout() {
  sessionStorage.clear();
  alert("登出成功");
  location.reload();
}

</script>

<template>
  <header>
    <nav>
      <ul class="nav" v-if="userlist == 0">
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li>
          <RouterLink to="/">Login</RouterLink>
        </li>
      </ul>
      <ul class="nav nav-tabs" v-else>
        <li class="dropdown">
          最新消息
          <div class="dropdown-content" style="left:0;">
            <RouterLink to="/allnews">最新消息</RouterLink>
            <RouterLink to="/createnews">新增最新消息</RouterLink>
          </div>
        </li>
        <li class="dropdown">
          活動
          <div class="dropdown-content" style="left:0;">
            <RouterLink to="/allevent">活動</RouterLink>
            <RouterLink to="/createevent">新增活動</RouterLink>
          </div>
        </li>
        <li>
          <a>{{ username }}</a>
        </li>
        <li>
          <a href="#" @click="logout">Logout</a>
        </li>
      </ul>
      <!--<ul class="nav nav-tabs">
        <li class="dropdown">
          最新消息
          <div class="dropdown-content" style="left:0;">
            <RouterLink to="/">最新消息</RouterLink>
            <RouterLink to="/createnews" v-if="userlist != 0">新增最新消息</RouterLink>
          </div>
        </li>
        <li class="dropdown">
          活動
          <div class="dropdown-content" style="left:0;">
            <RouterLink to="/allevent">活動</RouterLink>
            <RouterLink to="/createevent" v-if="userlist != 0">新增活動</RouterLink>
          </div>
        </li>
        <li>
          <a>{{ username }}</a>
        </li>
        <li v-if="userlist == 0">
          <RouterLink to="/login">Login</RouterLink>
        </li>
        <li v-else>
          <a href="#" @click="logout">Logout</a>
        </li>
      </ul>-->
    </nav>
  </header>
  <div class="box">
    <RouterView />
  </div>

</template>

<style scoped>
/*@media (max-width:800px) {
  #myLinks {
    display: none;
  }

  .icon { 
    display: block;
    float: right;
  }
}*/
ul {
  padding: 0px;
  text-align: center;
  border-bottom: solid 3px #eee;
  margin: 0px 50px;
}

li {
  width: 25%;
  display: inline-block;
}

.box {
  padding: 20px 80px;
}

.dropdown {
  padding: 14px 16px;
  position: relative;

}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 45px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover {
  background-color: #ddd;
}
</style>
