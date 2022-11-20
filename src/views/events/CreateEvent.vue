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
        "start_date": "",
        "end_date": "",
        "event_date": "",
        "image": "",
        "link": "",
        "created_at": "",
    }]
});


let typeResult = reactive({
    data: [{
        "type": "",
    }]
});



function post() {
    axios.post('http://127.0.0.1/foundation_laravel/public/api/event', {
        title: apiResult.data.title,
        content: apiResult.data.content,
        start_date: apiResult.data.start_date,
        end_date: apiResult.data.end_date,
        event_date: apiResult.data.event_date,
        image: apiResult.data.image,
        link: apiResult.data.link,
    })
        .then((res) => {
            alert("新增成功");
            router.replace({ path: '/allEvent' });
        })
        .catch((error) => {
            console.log(error);
            //console.log(image.value);
        })
}

function createlink() {
    axios.post('http://127.0.0.1/foundation_laravel/public/api/event/link', {
        title: apiResult.data.title,
        image: apiResult.data.image,
        link: apiResult.data.link,
    })
        .then((res) => {
            alert("新增成功");
            router.replace({ path: '/allEvent' });
        })
        .catch((error) => {
            console.log(error);
            //console.log(image.value);
        })
}

function gettype(event) {
    typeResult.data.type = event.target.value;
    console.log(typeResult.data.type);
}


</script>

<template>

    <!--<select style="width: 100px;" @change="gettype($event)">
        <option disabled value="">請選擇</option>
        <option value="text">活動文章</option>
        <option value="link">活動連結</option>
    </select>-->

    <div class="row">
        <label for="type">類別：</label>
        <input type="radio" name="type" id="text" value="text" v-model="type" style="width: auto;"
            @change="gettype($event)" />
        <label for="text" style="width: 22.5%;">活動文章</label>
        <input type="radio" name="type" id="link" value="link" v-model="type" style="width: auto;"
            @change="gettype($event)" />
        <label for="link" style="width: 22.5%;">活動連結</label>
    </div>


    <div class="create" v-if="typeResult.data.type != 'link'">
        <form action="" method="post" enctype="multipart/form-data" @submit.prevent="post">

            <div class="row">
                <label for="">標題：</label>
                <input type="text" name="title" v-model="apiResult.data.title">
            </div>
            <div class="row">
                <label for="">內文：</label>
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
                <label for="">圖片：</label>
                <input type="text" name="image" v-model="apiResult.data.image">
            </div>
            <div class="row">
                <label for="">連結：</label>
                <input type="text" name="link" v-model="apiResult.data.link">
            </div>

            <div class="row">
                <button type="submit" class="button"><span>新增活動</span></button>
            </div>

        </form>
    </div>

    <div class="create" v-else>
        <form action="" method="post" enctype="multipart/form-data" @submit.prevent="createlink">

            <div class="row">
                <label for="">標題：</label>
                <input type="text" name="title" v-model="apiResult.data.title">
            </div>
            <div class="row">
                <label for="">圖片：</label>
                <input type="text" name="image" v-model="apiResult.data.image">
                <!--<input type="file" name="image" id="image" @change="post">-->
            </div>
            <div class="row">
                <label for="">連結：</label>
                <input type="text" name="link" v-model="apiResult.data.link">
            </div>

            <div class="row">
                <button type="submit" class="button"><span>新增活動</span></button>
            </div>

        </form>
    </div>

</template>

<style>

</style>
