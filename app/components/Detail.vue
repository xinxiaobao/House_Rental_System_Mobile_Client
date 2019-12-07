<template>

    <Page>

        <ActionBar title="House Detail" />

        <StackLayout orientation="vertical">

            <Image :src="selectedhouse.URL" stretch="aspectFill"
                height="350" />
            <Label :text="selectedhouse.title" margin="10" class="h1" />



            <StackLayout>
                <Label :text="'Estate:'+ selectedhouse.name" />
                <Label :text="'Bedrooms:' + selectedhouse.bedrooms" />
            </StackLayout>
            <TextView editable="false">
                <FormattedString>
                    <Span text="Estate: " class="t-20" />
                    <Span :text="selectedhouse.name" margin="10"
                        class="t-20" />

                    <Span text=", Bedrooms: " class="t-20" />
                    <Span :text="selectedhouse.bedrooms" margin="10"
                        class="t-20" />

                    <Span text=" Rent:$ " class="t-20" />
                    <Span :text="selectedhouse.rent" margin="10"
                        class="t-20" />

                    <Span text=", Tenants: " class="t-20" />
                    <Span :text="selectedhouse.tenants" margin="10"
                        class="t-20" />

                    <Span text=", Area: " class="t-20" />
                    <Span :text="selectedhouse.gross_area" margin="10"
                        class="t-20" />


                </FormattedString>
            </TextView>

            <Button text="ButtonChange" @tap="onButtonTap" />


            <Button text="Co-Rent" @tap="onButtonTapCorent" />

            <Button text="Move-Out" @tap="onButtonTapMove" />
            <Button text="Address" @tap="onButtonTapAddress" />

        </StackLayout>

    </Page>
</template>

<script>
    import Address from "./Address";

    export default {
        methods: {
            onButtonTapAddress: function(args) {
                this.$navigateTo(Address, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        address: this.selectedhouse.address,
                        $delegate: this
                    }
                });
            },

            onButtonTapCorent: async function(args) {
                var r = await confirm("Confirm Co-rent?");
                if (r) {
                    var response = await fetch(
                        global.rootURL +
                        "/user/rentfrom/add/" +
                        this.selectedhouse.id, {
                            method: "POST",

                            credentials: "same-origin"
                        }
                    );
                    if (response.ok) {
                        var data = await response.json();
                        
                        confirm(data);
                        
                    } else if (response.status == 401) {
                        var data = await response.text();
                        
                        confirm(data);
                    } else {
                        confirm(response.statusText);
                    }
                }
            },

            onButtonTapMove: async function(args) {
                
                var r = await confirm("Confirm Move-Out?");
                if (r) {
                    var response = await fetch(
                        global.rootURL +
                        "/user/rentfrom/remove/" +
                        this.selectedhouse.id, {
                            method: "POST",
                            credentials: "same-origin"
                        }
                    );
                    if (response.ok) {
                        var data = await response.json();
                        
                        confirm(data);
                        
                    } else if (response.status == 401) {
                        var data = await response.text();
                       
                        confirm(data);
                    } else {
                        confirm(response.statusText);
                    }
                }
            }
        },

        props: ["selectedhouse", "$delegate"],

        data() {
            return {};
        }
    };
</script>

<style>
</style>