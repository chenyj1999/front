
<script setup>
    import axios from 'axios';
    import { ref, reactive, computed } from 'vue';
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
     /* fetch('./data.json').then(res => {
        console.log(res);
        return res.json();
    }).then(result => {
        console.log(result);
        apiResult.data = result
    })
    console.log(apiResult.data);*/


    /*export default {
        data() {
            return {
                info: {
                    id: "",
                    title: ""
                }
            }
        },
        mounted() {
           
        }
    }*/
    
    //.then(response => (this.info = response))
    </script>


<template>
    {{apiResult.data}}

    <table style="margin-top:20px;">
        <tr>
            <th>index</th>
            <th>id</th>
            <th>name</th>
        </tr>
        <tr v-for="(item,index) in apiResult.data">
            <td>{{index}}</td>
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
        </tr>
    </table>
</template>

