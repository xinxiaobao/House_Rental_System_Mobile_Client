<template>

    <Page @navigatedTo="onNavigatedTo">

        <ActionBar title="House Detail" />

        <StackLayout orientation="vertical">

            <Image :src="selectedhouse.URL" stretch="aspectFill"
                height="400" />
            <Label :text="selectedhouse.title" margin="10" class="h1" />



            <FlexboxLayout flexDirection="row" margin="10">
                <Label :text="'Estate: '+ selectedhouse.name" class="t-20" />
                <Label :text="',  Bedrooms: ' + selectedhouse.bedrooms"
                    class="t-20" />
            </FlexboxLayout>
            <FlexboxLayout flexDirection="row" margin="10">
                <Label :text="'Rent:$ '+ selectedhouse.rent" class="t-20" />
                <Label :text="',  Tenants: ' + selectedhouse.tenants"
                    class="t-20" />
                <Label :text="',  Area: ' + selectedhouse.gross_area"
                    class="t-20" />
            </FlexboxLayout>


            <FlexboxLayout flexDirection="row">
                <Button :text="ButtonChange" @tap="onButtonTapChange"
                    class="btn btn-primary btn-rounded-lg" width="150" />

                <Button text="Address" @tap="onButtonTapAddress"
                    class="btn btn-primary  btn-rounded-lg" width="150"
                    height="50" />
            </FlexboxLayout>


        </StackLayout>

    </Page>
</template>

<script>
    import Address from "./Address";

    export default {
        methods: {
            onButtonTapAddress: function() {
                global.selectEstate = this.selectedhouse.name;
                console.log(global.selectEstate);

                this.selectedEstate = this.Estates.filter(function(p) {
                    return p.name == global.selectEstate;
                });

                this.$navigateTo(Address, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        address: this.selectedEstate[0].address,
                        $delegate: this
                    }
                });
            },
            onNavigatedTo: async function() {


                if (global.username) {
                    var response = await fetch(global.rootURL +
                        "/user/rentfrom", {
                            method: "GET",
                            credentials: "same-origin"
                        });
                    if (response.ok) {
                        this.signal = await response.json();
                        global.selectID = this.selectedhouse.id;
                        this.signal2 = this.signal.rentto.filter(function(
                            p) {
                            return p.id == global.selectID;
                        });

                        console.log(this.signal2.length);
                    }
                    if (this.signal2.length) {
                        this.ButtonChange = "Move-Out";
                    } else {
                        this.ButtonChange = "Move-In";
                    }
                } else {
                    this.ButtonChange = "Move-In";
                }
            },

            onButtonTapChange: async function(args) {
                if (!global.username) {
                    console.log(this.selectedhouse.id);

                    confirm({
                        title: "Please Login",
                        okButtonText: "OK"
                    });
                } else {
                    if (this.ButtonChange == "Move-In") {
                        var r = await confirm({
                            title: "Are you sure?",
                            message: "to move in this apartment?",
                            okButtonText: "Yes ",
                            cancelButtonText: "No"
                        });
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
                                this.ButtonChange = "Move-Out";
                            } else if (response.status == 401) {
                                var data = await response.text();
                                confirm(data);
                            } else {
                                confirm(response.statusText);
                            }
                        }
                    } else {
                        var r = await confirm("Are you sure to Move-Out?");
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
                                this.ButtonChange = "Move-In";
                            } else if (response.status == 401) {
                                var data = await response.text();
                                confirm(data);
                            } else {
                                confirm(response.statusText);
                            }
                        }
                    }
                }
            }
        },

        props: ["selectedhouse", "myrentals", "$delegate"],

        data() {
            return {
                signal: "",
                signal2: "",
                signal3: "",
                selectID: "",
                selectedEstate: "",

                ButtonChange:"Move-In",

                Estates: [{
                        name: "City One Shatin",
                        address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.38&lng=114.20%E3%80%824&zoom=17&markerLat=22.386389&markerLng=114.203889&markerTitle=City%20One&locate=false"
                    },
                    {
                        name: "Festival City",
                        address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.37&lng=114.18%E3%80%824&zoom=17&markerLat=22.3692&markerLng=114.1743&markerTitle=Festival%20City&locate=false"
                    },
                    {
                        name: "Whampoa Garden",
                        address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.30&lng=114.19%E3%80%824&zoom=17&markerLat=22.3041&markerLng=114.1922&markerTitle=Whampoa%20Garden&locate=false"
                    },
                    {
                        name: "Island Resort",
                        address: "https://leafletapi.mtchoy.now.sh/index.html?lat=22.26&lng=114.25%E3%80%824&zoom=17&markerLat=22.2655&markerLng=114.2512&markerTitle=Island%20Resort&locate=false"
                    }
                ]
            };
        }
    };
</script>

<style>
</style>