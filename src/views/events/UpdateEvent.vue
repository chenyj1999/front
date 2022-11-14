<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const idResult = route.query.id;
let apiResult = reactive({
    data: [{
        "title": "",
        "content": "",
        "start_date": "",
        "end_date": "",
        "event_date": "",
        "image": "",
        "link": "",
        "created_at": "",
    }]
});

axios.get('http://127.0.0.1/foundation_laravel/public/api/event/' + idResult)
    .then((res) => {
        apiResult.data = res.data
        console.log(res)
    })
    .catch((error) => console.log(error))

function Update() {
    axios.put('http://127.0.0.1/foundation_laravel/public/api/event/' + idResult, {
        title: apiResult.data.title,
        content: apiResult.data.content,
        start_date: apiResult.data.start_date,
        end_date: apiResult.data.end_date,
        event_date: apiResult.data.event_date,
        image: apiResult.data.image,
        link: apiResult.data.link,
    })
        .then((res) => {
            apiResult.data = res.data;
            alert("修改成功");
            router.push({ path: 'AllEvent' })
            console.log(res)
        })
        .catch((error) => console.log(error))
}


</script>

<template>
    <form action="" method="post" enctype="multipart/form-data" @submit.prevent="Update">

        <div class="row">
            <label for="">標題</label>
            <input type="text" name="title" v-model="apiResult.data.title">
        </div>
        <div class="row">
            <label for="">內文</label>
            <textarea name="content" cols="100" rows="10" v-model="apiResult.data.content"></textarea>
        </div>
        <div class="row">
            <label for="">報名起始日期：</label>
            <input type="date" name="start_date" v-model="apiResult.data.start_date">
        </div>
        <div class="row">
            <label for="">報名結束日期：</label>
            <input type="date" name="end_date" v-model="apiResult.data.end_date">
        </div>
        <div class="row">
            <label for="">活動日期：</label>
            <input type="date" name="event_date" v-model="apiResult.data.event_date">
        </div>
        <div class="row">
            <label for="">圖片</label>
            <input type="text" name="image" v-model="apiResult.data.image">
        </div>
        <div class="row">
            <label for="">連結</label>
            <input type="text" name="link" v-model="apiResult.data.link">
        </div>

        <div class="row">
            <button type="submit" class="button"><span>修改活動</span></button>
        </div>

    </form>
</template>

<style>

</style>
