<template>

    <Page>

        <ActionBar title="HouseList" />



        <ListView for="house in houselist" @itemTap="onItemTapDetail"
            >
            <v-template>
                <FlexboxLayout flexDirection="row">

                    <Label :text="house.title" class="t-20"
                    height="60p"
                        />
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