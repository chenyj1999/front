<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

let apiResult = reactive({
    data: [{
        "title": "",
        "content": "",
        "start_date": "",
        "end_date": "",
        "event_date": "",
        "organizer": "",
        "co_organizer": "",
        "image_1": "",
        "image_2": "",
        "image_3": "",
        "image_4": "",
        "link": "",
        "type": "",
        "created_at": "",
    }]
});


let typeResult = reactive({
    data: [{
        "type": "",
    }]
});

function post() {
    const form = new FormData()
    form.append('title', apiResult.data.title)
    form.append('content', apiResult.data.content)
    form.append('start_date', apiResult.data.start_date)
    form.append('end_date', apiResult.data.end_date)
    form.append('event_date', apiResult.data.event_date)
    form.append('organizer', apiResult.data.organizer)
    form.append('co_organizer', apiResult.data.co_organizer)
    form.append('image_1', apiResult.data.image_1)
    form.append('link', apiResult.data.link)
    form.append('type', 'text')

    axios.post('http://127.0.0.1/foundation/foundation_laravel/public/api/event', form)
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
    const form = new FormData()
    form.append('title', apiResult.data.title)
    form.append('image_1', apiResult.data.image_1)
    form.append('link', apiResult.data.link)
    form.append('type', 'link')

    axios.post('http://127.0.0.1/foundation/foundation_laravel/public/api/event/link', form)
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

function post1(event) {
    console.log(event.target.files[0]);
    apiResult.data.image_1 = event.target.files[0];
}

/*ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });*/

/*let text = reactive({
    data: {
        editor: ClassicEditor,
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
            // The configuration of the editor.
        }
    });*/

</script>

<template>
    <!--<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>-->
    <div class="row">
        <label for="type">類別：</label>
        <input type="radio" name="type" id="text" value="text" v-model="type" style="width: auto;"
            @change="gettype($event)" checked />
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
                <label for="">主辦單位：</label>
                <input type="text" name="title" v-model="apiResult.data.organizer">
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
                <label for="">圖片：</label>
                <input type="file" name="image_1" id="image" @change="post1($event)">
            </div>
            <!--<div class="row">
                <label for="">圖片：</label>
                <input type="file" name="image">
            </div>
            <div class="row">
                <label for="">圖片：</label>
                <input type="file" name="image">
            </div>-->
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
                <input type="file" name="image_1" @change="post1($event)">
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
