<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
let apiResult = reactive({
    data: [{
        "title": "",
        "content": "",
        "date": "",
        "image": "",
        "type": "",
    }]
});
if (this.$route.query.id) {
    queryData.url = this.$route.query.id;
}
</script>


<template>
    {{this.$route.query.id}}
    <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" >
    </div>
    <div class="form-group">
        <label>Detail</label>
        <input type="text" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
</template>

