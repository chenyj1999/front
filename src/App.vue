<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>

<template>
  <header>
    <nav>
      <ul>
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
      </ul>
      <a href="javascript:void(0);" class="icon" @click="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
}

li {
  float: left;
}

li a {
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: #666;
  background-color: #ddd;
}

.icon {
  display: none;
}

/*@media (max-width:800px) {
  #myLinks {
    display: none;
  }

  .icon {
    display: block;
    float: right;
  }
}*/


.dropdown {
  padding: 14px 16px;
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
