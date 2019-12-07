<template>
    <Page>

        <WebView  :src="address" />

    </Page>
</template>

<script>
    export default {
        props: ["address", "$delegate"],

        data() {
            return {};
        }
    };
</script>

<style>
</style>