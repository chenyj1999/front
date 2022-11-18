<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';

let userResult = reactive({
    data: [{
        "username": "",
        "password": "",
    }]
});
var text = "";
function post() {

    axios.post('http://127.0.0.1/foundation_laravel/public/api/users', {
        username: userResult.data.username,
        password: userResult.data.password,
    })
        .then((res) => {
            alert(res.data);
            console.log(res.data);
            text = JSON.stringify(res.data);
            if (text == "true") {
                alert("登入成功");
                router.replace({ path: '/' });
            }
            else {
                alert("登入失敗");
                router.replace({ path: '/login' });
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

function post1(event) {
    console.log(event.target.files[0]);
    apiResult.data.image = event.target.files[0];
}


</script>

<template>
    <div class="create">
        <form method="post" enctype="multipart/form-data" @submit.prevent="post">

            <div class="row">
                <label for="">使用者：</label>
                <input type="text" name="username" v-model="userResult.data.username">
            </div>
            <div class="row">
                <label for="">密碼：</label>
                <input type="text" name="password" v-model="userResult.data.password">
            </div>

            <div class="actions">
                <button type="submit" class="button"><span>新增</span></button>
            </div>

        </form>
    </div>
</template>

<style>

</style>
