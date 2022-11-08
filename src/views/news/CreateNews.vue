<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';

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
    axios.post('http://127.0.0.1/foundation_laravel/public/api/news', {
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
        .catch((error) => {
            console.log(error);
            //console.log(image.value);
        })

    //console.log(apiResult.data.image);
}

function post1(event) {
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
    apiResult.data.image = this.image;
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
                <input type="date" name="date" v-model="apiResult.data.date">
            </div>
            <div class="field">
                <label for="">圖片</label>
                <!--<input type="text" name="image" v-model="apiResult.data.image">-->
                <input type="file" name="image" id="image" @change="post1($event)">
            </div>
            <div class="field">
                <label for="">類型</label>
                <select v-model="apiResult.data.type">
                    <option disabled value="">請選擇</option>
                    <option value="green">環保</option>
                    <option value="care">長照</option>
                    <option value="build">建築</option>
                </select>
            </div>

            <div class="actions">
                <button type="submit">新增</button>
            </div>

        </form>
    </div>
</template>

<style>

</style>
