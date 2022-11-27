
<script setup>
import axios from 'axios';
import { ref, reactive, computed } from 'vue';

if (sessionStorage.getItem("username") == null) {
    router.replace({ path: '/' });
}

var url_news = 'http://127.0.0.1/foundation/foundation_laravel/public/api/news';

let apiResult = reactive({
    data: [{
        "id": "",
        "title": "",
        "content": "",
        "date": "",
        "image": "",
        "type": "",
        "created_at": "",
    }]
});

axios
    .get(url_news)
    .then((res) => {
        apiResult.data = res.data
        console.log(apiResult.data);
    })
    .catch((error) => console.log(error));

function Delete(id) {
    axios({
        method: 'delete',
        url: url_news + '/' + id
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
            <th>內文</th>
            <th>日期</th>
            <th>類別</th>
            <th>建立日期</th>
            <th style="min-width: 55px;">更新</th>
            <th style="min-width: 55px;">刪除</th>
        </tr>
        <tr v-for="(item, index) in apiResult.data">
            <!--v-if="Date.parse(item.date) < new Date()"-->
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.created_at }}</td>
            <td>
                <RouterLink :to="{ name: 'updateNews', query: { id: item.id } }">更新</RouterLink>
            </td>
            <td @click="Delete(item.id)">刪除</td>
        </tr>
    </table>
</template>

<style scoped>

</style>

