<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

var url_event = 'http://127.0.0.1/foundation/foundation_laravel/public/api/event/';

const route = useRoute();
const idResult = route.query.id;
let apiResult = reactive({
    data: [{
        "title": "",
        "content": "",
        "start_date": "",
        "end_date": "",
        "event_date": "",
        "host": "",
        "co_organizer": "",
        "address": "",
        "image_1": "",
        "image_2": "",
        "image_3": "",
        "image_4": "",
        "link": "",
        "type": "",
        "created_at": "",
    }]
});

axios.get(url_event + idResult)
    .then((res) => {
        apiResult.data = res.data
        console.log(res)
    })
    .catch((error) => console.log(error))

function Update() {
    if (apiResult.data.title == undefined || apiResult.data.content == '') {
        alert("請輸入");
    }
    else {
        axios.put(url_event + idResult, {
            title: apiResult.data.title,
            content: apiResult.data.content,
            start_date: apiResult.data.start_date,
            end_date: apiResult.data.end_date,
            event_date: apiResult.data.event_date,
            host: apiResult.data.host,
            co_organizer: apiResult.data.co_organizer,
            address: apiResult.data.address,
            link: apiResult.data.link,
        })
            .then((res) => {
                apiResult.data = res.data;
                alert("修改成功");
                router.push({ path: 'allevent' })
                console.log(res)
            })
            .catch((error) => console.log(error))
    }
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
            <label for="">主辦單位：</label>
            <input type="text" name="host" v-model="apiResult.data.host">
        </div>
        <div class="row">
            <label for="">協辦單位：</label>
            <input type="text" name="title" v-model="apiResult.data.co_organizer">
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
            <label for="">活動地點：</label>
            <input type="text" name="address" v-model="apiResult.data.address">
        </div>
        <div class="row">
            <label for="">活動報名連結：</label>
            <input type="text" name="link" v-model="apiResult.data.link">
        </div>

        <div class="row">
            <button type="submit" class="button"><span>修改活動</span></button>
        </div>

    </form>
</template>

<style>

</style>
