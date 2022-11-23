<script setup>

import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

var url_news = 'http://127.0.0.1/foundation/foundation_laravel/public/api/news/';

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

axios.get(url_news + idResult)
    .then((res) => {
        apiResult.data = res.data
        console.log(response)
    })
    .catch((error) => console.log(error))

function Update() {
    if (apiResult.data.title == undefined || apiResult.data.content == '' || apiResult.data.date == undefined || apiResult.data.image == undefined || apiResult.data.type == undefined) {
        alert("請輸入");
    }
    else {
        axios.put(url_news + idResult, {
            title: apiResult.data.title,
            content: apiResult.data.content,
            date: apiResult.data.date,
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
            <label for="">日期</label>
            <input type="date" name="date" v-model="apiResult.data.date">
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

        <div class="row">
            <button type="submit" class="button"><span>更新</span></button>
        </div>

    </form>
</template>

<style>

</style>
