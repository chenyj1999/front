
<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router'
let apiResult = reactive({
    data: [{
        "id": "",
        "title": ""
    }]
});

axios
    .get("http://127.0.0.1:8000/api")
    .then((res) => {
        apiResult.data = res.data
        console.log(apiResult.data);
    })
    .catch(function (error) { // 请求失败处理
        console.log(error);
    });
function Delete(id) {
    axios({
        method: 'delete',
        url: 'http://127.0.0.1:8000/api/' + id
    })
        .then((response) => alert("刪除成功"))
        .catch((error) => console.log(error))
}
</script>


<template>
    {{apiResult.data}}

    <table style="margin-top:20px;">
        <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>date</th>
            <th>image</th>
            <th>type</th>
            <th>delete</th>
        </tr>
        <tr v-for="(item,index) in apiResult.data">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.content}}</td>
            <td>{{item.date}}</td>
            <td>{{item.image}}</td>
            <td>{{item.type}}</td>
            <td @click="Delete(item.id)">delete</td>
        </tr>
    </table>
</template>

