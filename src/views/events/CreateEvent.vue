<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import 'ckeditor5-custom-build/build/ckeditor';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

const editor = ClassicEditor;
const editordata = ref('');
const editorConfig = reactive({
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    },
    table: {
        defaultHeadings: { rows: 1, columns: 1 }
    },
});

var url_event = 'http://127.0.0.1/foundation/foundation_laravel/public/api/event';
var url_event_link = 'http://127.0.0.1/foundation/foundation_laravel/public/api/event/link';
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
        "editordata": "",
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
    form.append('host', apiResult.data.host)
    form.append('co_organizer', apiResult.data.co_organizer)
    form.append('address', apiResult.data.address)
    form.append('image_1', apiResult.data.image_1)
    form.append('image_2', apiResult.data.image_2)
    form.append('image_3', apiResult.data.image_3)
    form.append('image_4', apiResult.data.image_4)
    form.append('editordata', apiResult.data.editordata)
    form.append('link', apiResult.data.link)
    form.append('type', 'text')
    if (apiResult.data.title == undefined || apiResult.data.content == '' || apiResult.data.start_date == undefined || apiResult.data.end_date == '' || apiResult.data.event_date == undefined) {
        alert("請輸入");
    }
    else {
        axios.post(url_event, form)
            .then((res) => {
                alert("新增成功");
                router.replace({ path: '/allevent' });
            })
            .catch((error) => {
                console.log(error);
                //console.log(image.value);
            })
    }

}

function createlink() {
    const form = new FormData()
    form.append('title', apiResult.data.title)
    form.append('image_1', apiResult.data.image_1)
    form.append('link', apiResult.data.link)
    form.append('type', 'link')
    if (apiResult.data.title == undefined || apiResult.data.image_1 == undefined || apiResult.data.link == undefined) {
        alert("請輸入");
    }
    else {
        axios.post(url_event_link, form)
            .then((res) => {
                alert("新增成功");
                router.replace({ path: '/allevent' });
            })
            .catch((error) => {
                console.log(error);
            })
    }

}

function gettype(event) {
    typeResult.data.type = event.target.value;
    console.log(typeResult.data.type);
}

function post1(event) {
    console.log(event.target.files[0]);
    apiResult.data.image_1 = event.target.files[0];
}

function post2(event) {
    console.log(event.target.files[0]);
    apiResult.data.image_2 = event.target.files[0];
}

function post3(event) {
    console.log(event.target.files[0]);
    apiResult.data.image_3 = event.target.files[0];
}

function post4(event) {
    console.log(event.target.files[0]);
    apiResult.data.image_4 = event.target.files[0];
}


</script>

<template>
    <!--<Editor v-model="content" />-->

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
                <textarea name="content" cols="100" rows="5" v-model="apiResult.data.content"></textarea>
            </div>
            <div class="row">
                <label for="">主辦單位：</label>
                <input type="text" name="host" v-model="apiResult.data.host">
            </div>
            <div class="row">
                <label for="">協辦單位：</label>
                <input type="text" name="co_organizer" v-model="apiResult.data.co_organizer">
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
                <label for="">輪播圖1：</label>
                <input type="file" name="image_1" @change="post1($event)">
            </div>
            <div class="row">
                <label for="">輪播圖2：</label>
                <input type="file" name="image_2" @change="post2($event)">
            </div>
            <div class="row">
                <label for="">輪播圖3：</label>
                <input type="file" name="image_2" @change="post3($event)">
            </div>
            <div class="row">
                <label for="">輪播圖4：</label>
                <input type="file" name="image_2" @change="post4($event)">
            </div>
            <div class="row">
                <label for="">文章內容：</label>
                <div class="fg-black" style="--ckborder-radius:0.25rem;width: 50%;">
                    <ckeditor :editor="editor" v-model="apiResult.data.editordata" :config="editorConfig">
                    </ckeditor>
                </div>
            </div>
            <div class="row">
                <label for="">活動報名連結：</label>
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
