
<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';
import router from '@/router';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

var url_event = 'http://127.0.0.1/foundation/foundation_laravel/public/api/event';

let apiResult = reactive({
    data: [{
        "id": "",
        "title": "",
        "content": "",
        "start_date": "",
        "end_date": "",
        "event_date": "",
        "host": "",
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

axios
    .get(url_event)
    .then((res) => {
        apiResult.data = res.data
        console.log(apiResult.data);
    })
    .catch((error) => console.log(error));

function Delete(id) {
    axios({
        method: 'delete',
        url: url_event + '/' + id
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
            <th>報名起始日期</th>
            <th>報名結束日期</th>
            <th>活動日期</th>
            <th>主辦單位</th>
            <th>協辦單位</th>
            <th>地點</th>
            <th>報名連結</th>
            <th>新增日期</th>
            <th style="min-width: 55px;padding: 10px;">更新</th>
            <th style="min-width: 55px;padding: 10px;">刪除</th>
        </tr>
        <tr v-for="(item, index) in apiResult.data">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }}</td>
            <td>{{ item.event_date }}</td>
            <td>{{ item.host }}</td>
            <td>{{ item.co_organizer }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.link }}</td>
            <td>{{ item.created_at }}</td>
            <td style="padding: 2px 2px;" v-if="item.type == 'text'">
                <RouterLink :to="{ name: 'updateevent', query: { id: item.id } }"><button class="update">更新</button>
                </RouterLink>
            </td>
            <td v-else></td>
            <td style="padding: 2px 2px;" @click="Delete(item.id)"><button class="delete">刪除</button></td>
        </tr>
    </table>
</template>

<style scoped>
button {
    border-radius: 10px;
    border: 1px solid rgb(90, 90, 90);
}

.update:hover {
    background-color: #6b9aff;
    color: white;
    border: none;
}

.delete:hover {
    background-color: #ff6347;
    color: white;
    border: none;
}
</style>