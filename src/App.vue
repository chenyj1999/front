<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <nav>
      <ul class="nav nav-tabs">
        <li class="dropdown">
          最新消息
          <div class="dropdown-content" style="left:0;">
            <RouterLink to="/">最新消息</RouterLink>
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
          <p></p>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
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
