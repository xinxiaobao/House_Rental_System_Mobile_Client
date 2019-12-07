<template>

    <Page>

        <ActionBar title="HouseList" />



        <ListView for="house in houselist" @itemTap="onItemTapDetail"
            style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row">

                    <Label :text="house.title" class="t-12"
                        style="width: 60%" />
                </FlexboxLayout>
            </v-template>
        </ListView>




    </Page>
</template>

<script>
    import Detail from "./Detail";

    export default {
        mounted() {
            console.log(this.houselist);
        },
        methods: {
            onItemTapDetail: function(args) {
                this.$navigateTo(Detail, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedhouse: args.item,
                        $delegate: this
                    }
                });
            }
        },

        props: ["houselist", "$delegate"],

        data() {
            return {};
        }
    };
</script>

<style>
</style>