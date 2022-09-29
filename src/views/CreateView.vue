<script setup>
import TheWelcome from '../components/TheWelcome.vue';
console.log("createview")
let msg = 'welcome';
</script>

<template>
    <div class="create">
        <form action="" method="post" enctype="multipart/form-data">

            <div class="field">
                <label for="">標題</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field">
                <label for="">內文</label>
                <textarea name="content" cols="30" rows="10" v-model="content"></textarea>
            </div>
            <label for="image" class="block text-sm leading-5 font-medium text-gray-700">
                圖片上傳
                <input type="file" name="image">
            </label>

            <div class="actions">
                <button type="submit" @click="add">新增文章</button>
            </div>

        </form>
    </div>
</template>

<style>

</style>
