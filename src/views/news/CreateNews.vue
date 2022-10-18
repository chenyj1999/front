<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router'

let apiResult = reactive({
    data: [{
        "id": "",
        "title": "",
        "content": "",
        "date": "",
        "image": "",
        "type": ""
    }]
});

function post() {
    axios.post('http://127.0.0.1:8000/api', {
        title: apiResult.data.title,
        content: apiResult.data.content,
        date: apiResult.data.date,
        image: apiResult.data.image,
        type: apiResult.data.type,
    })
        .then((res) => {
            alert("新增成功");
            router.replace({ path: '/allNews' });
        })
        .catch((error) => console.log(error))
}



</script>

<template>
    <div class="create">
        <form action="" method="post" enctype="multipart/form-data" @submit.prevent="post">

            <div class="field">
                <label for="">標題</label>
                <input type="text" name="title" v-model="apiResult.data.title">
            </div>
            <div class="field">
                <label for="">內文</label>
                <textarea name="content" cols="30" rows="10" v-model="apiResult.data.content"></textarea>
            </div>
            <div class="field">
                <label for="">日期</label>
                <input type="text" name="date" v-model="apiResult.data.date">
            </div>
            <div class="field">
                <label for="">圖片</label>
                <input type="text" name="image" v-model="apiResult.data.image">
            </div>
            <div class="field">
                <label for="">類型</label>
                <input type="text" name="type" v-model="apiResult.data.type">
            </div>
            <!--<label for="image" class="block text-sm leading-5 font-medium text-gray-700">
                圖片上傳
                <input type="file" name="image">
            </label>-->

            <div class="actions">
                <button type="submit">新增文章</button>
            </div>

        </form>
    </div>
</template>

<style>

</style>
