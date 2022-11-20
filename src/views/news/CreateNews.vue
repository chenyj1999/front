<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/login' });
}

let apiResult = reactive({
    data: [{
        "title": "",
        "content": "",
        "date": "",
        "image": "",
        "type": ""
    }]
});

function post() {
    const form = new FormData()
    form.append('title', apiResult.data.title)
    form.append('content', apiResult.data.content)
    form.append('date', apiResult.data.date)
    form.append('image', apiResult.data.image)
    form.append('type', apiResult.data.type)

    axios.post('http://127.0.0.1/foundation_laravel/public/api/news', form)
        .then((res) => {
            alert("新增成功");
            router.replace({ path: '/' });
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
                <label for="">標題：</label>
                <input type="text" name="title" v-model="apiResult.data.title">
            </div>
            <div class="row">
                <label for="">內文：</label>
                <textarea name="content" cols="100" rows="10" v-model="apiResult.data.content"></textarea>
            </div>
            <div class="row">
                <label for="">日期：</label>
                <input type="date" name="date" v-model="apiResult.data.date">
            </div>
            <div class="row">
                <label for="">圖片：</label>
                <!--<input type="text" name="image" v-model="apiResult.data.image">-->
                <input type="file" name="image" id="image" @change="post1($event)">
            </div>
            <div class="row">
                <label for="">類型</label>
                <select v-model="apiResult.data.type">
                    <option disabled value="">請選擇</option>
                    <option value="green">環保</option>
                    <option value="care">長照</option>
                    <option value="build">建築</option>
                </select>
            </div>

            <div class="actions">
                <button type="submit" class="button"><span>新增</span></button>
            </div>

        </form>
    </div>
</template>

<style>

</style>
