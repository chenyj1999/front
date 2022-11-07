
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
    {{ apiResult.data }}

    <table style="margin-top:20px;">
        <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
            <th>start_date</th>
            <th>end_date</th>
            <th>event_date</th>
            <th>image</th>
            <th>link</th>
            <th>created_at</th>
            <th>update</th>
            <th>delete</th>
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
            <RouterLink :to="{ name: 'updateNews', query: { id: item.id } }">update</RouterLink>
            <td @click="Delete(item.id)">delete</td>
        </tr>
    </table>
</template>

