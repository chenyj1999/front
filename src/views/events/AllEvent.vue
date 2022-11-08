
<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';

let apiResult = reactive({
    data: [{
        "id": "",
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

axios
    .get("http://127.0.0.1/foundation_laravel/public/api/event")
    .then((res) => {
        apiResult.data = res.data
        console.log(apiResult.data);
    })
    .catch((error) => console.log(error));

function Delete(id) {
    axios({
        method: 'delete',
        url: 'http://127.0.0.1/foundation_laravel/public/api/event/' + id
    })
        .then((res) => {
            alert("刪除成功");
            location.reload()
        })
        .catch((error) => console.log(error))
}
</script>


<template>

    <table style="margin-top:20px;">
        <tr>
            <th>id</th>
            <th>標題</th>
            <th>概述</th>
            <th>報名起始日期</th>
            <th>報名結束日期</th>
            <th>活動日期</th>
            <th>圖片路徑</th>
            <th>報名連結</th>
            <th>新增日期</th>
            <th>更新</th>
            <th>刪除</th>
        </tr>
        <tr v-for="(item, index) in apiResult.data">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }}</td>
            <td>{{ item.event_date }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.link }}</td>
            <td>{{ item.created_at }}</td>
            <td>
                <RouterLink :to="{ name: 'updateEvent', query: { id: item.id } }">更新</RouterLink>
            </td>
            <td @click="Delete(item.id)">刪除</td>
        </tr>
    </table>
</template>

<style scoped>
</style>