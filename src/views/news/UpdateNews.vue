<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const idResult = route.query.id;

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

axios.get('http://127.0.0.1/foundation_laravel/public/api/news/' + idResult)
    .then((res) => {
        apiResult.data = res.data
        console.log(response)
    })
    .catch((error) => console.log(error))

function Update() {
    axios.put('http://127.0.0.1/foundation_laravel/public/api/news/' + idResult, {
        title: apiResult.data.title,
        content: apiResult.data.content,
        date: apiResult.data.date,
        image: apiResult.data.image,
        type: apiResult.data.type,
    })
        .then((res) => {
            apiResult.data = res.data;
            alert("更新成功");
            router.push({ path: 'AllNews' })
            console.log(response)
        })
        .catch((error) => console.log(error))
}


</script>

<template>
    <form action="" method="post" enctype="multipart/form-data" @submit.prevent="Update">

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

        <div class="actions">
            <button type="submit">更新</button>
        </div>

    </form>
</template>

<style>

</style>
