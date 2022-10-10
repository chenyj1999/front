<script>
export default {
    props: {
        user: {
            type: String,
        },
    },
    computed: {
        userData() {
            return this.user;
        },
    },
};
</script>


<template>
    <div>
        {{userData}}
        sadf
    </div>
</template>

