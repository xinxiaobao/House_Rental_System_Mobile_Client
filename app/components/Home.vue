<template>
    <Page @navigatedTo="onNavigatedTo">
        <ActionBar title="Home" />

        <StackLayout>
            <BottomNavigation height="400px">
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Estate"></Label>
                        <Image src="res://settings"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Bedroom"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>

                    <TabStripItem>
                        <Label text="User"></Label>
                        <Image src="res://browse"></Image>
                    </TabStripItem>

                </TabStrip>

                <TabContentItem>
                    <ListView for="feed in feedsHighlight"
                        @itemTap="onItemTapDetail">
                        <v-template>
                            <StackLayout orientation="vertical">
                                <Image :src="feed.URL" height="300" />

                                <Label :text="feed.title" class="h1" />

                                <FlexboxLayout flexDirection="column"
                                    margin="10">
                                    <Label :text="feed.name" class="t-20" />
                                    <Label :text=" 'Rent:$ ' + feed.rent"
                                        class="t-20" />
                                </FlexboxLayout>


                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>
                <TabContentItem>
                    <ListView for="estate in estates"
                        @itemTap="onItemTapEstate">
                        <v-template>
                            <FlexboxLayout flexDirection="row">


                                <Label :text="estate" class="h1"
                                    height="100" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>

                <TabContentItem>


                    <ListView for="bedroom in bedrooms"
                        @itemTap="onItemTapBedroom">
                        <v-template>
                            <FlexboxLayout flexDirection="row">

                                <Label :text="bedroom" class="h1"
                                    height="100" />
                            </FlexboxLayout>
                        </v-template>
                    </ListView>

                </TabContentItem>

                <TabContentItem>


                    <StackLayout>

                        <FlexboxLayout flexDirection="row">


                            <Image
                                src="http://attachment.mcbbs.net/forum/201708/19/122213b40344qf15170aqe.png"
                                width="150" height="150" />

                            <Label :text="username" width="200" height="150"
                                class="h1" style="padding:20p" />
                        </FlexboxLayout>

                        <Button text="Login/Logoff" class="h1 left"
                            height="100" @tap="onButtonTapUser" />
                        <Button text="My Rentals" class="h1 left" height="100"
                            @tap="onButtonTapMyrental" />

                    </StackLayout>



                </TabContentItem>




            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import HouseList from "./HouseList";
    import Login from "./Login";
    import Detail from "./Detail";

    export default {
        methods: {
            onNavigatedTo: function() {
                this.username = global.username;
            },

            onButtonTapMyrental: async function(args) {
                if (global.username) {
                    var response = await fetch(global.rootURL +
                        "/user/rentfrom", {
                            method: "GET",
                            credentials: "same-origin"
                        });
                    if (response.ok) {
                        this.houselist = await response.json();

                        this.myrentals = this.houselist.rentto;

                        this.$navigateTo(HouseList, {
                            transition: {},
                            transitionIOS: {},
                            transitionAndroid: {},
                            props: {
                                houselist: this.houselist.rentto,
                                $delegate: this
                            }
                        });
                    } else {
                        await confirm("Please Login!");
                    }
                } else {
                    confirm({
                        title: "Please Login",
                        message: "",
                        okButtonText: "OK "
                    });
                }
            },

            onButtonTapUser: async function(args) {
                if (!global.username) {
                    this.$navigateTo(Login, {
                        transition: {},
                        transitionIOS: {},
                        transitionAndroid: {},
                        props: {
                            logoff: "",
                            $delegate: this
                        }
                    });
                } else {
                    var result = await confirm({
                        title: "",
                        message: "Confirm to Logoff?",
                        okButtonText: "Yes ",
                        cancelButtonText: "Cancel "
                    });

                    if (result) {
                        global.username = "";

                        this.$navigateTo(Login, {
                            transition: {},
                            transitionIOS: {},
                            transitionAndroid: {},
                            props: {
                                logoff: "1",
                                $delegate: this
                            }
                        });
                    }
                }
            },

            onItemTapDetail: async function(args) {
                this.$navigateTo(Detail, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        selectedhouse: args.item,
                        myrentals: this.myrentals,
                        $delegate: this
                    }
                });
            },

            onItemTapEstate: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("house selected: " + args.item);

                global.selectEstate = args.item;
                this.houselist = this.feeds.filter(function(p) {
                    return p.name == global.selectEstate;
                });

                this.$navigateTo(HouseList, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        houselist: this.houselist,
                        $delegate: this
                    }
                });
            },

            onItemTapBedroom: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("house selected: " + args.item);

                if (args.index == 0) {
                    this.houselist = this.feeds.filter(function(p) {
                        return p.bedrooms <= 2;
                    });
                } else if (args.index == 1) {
                    this.houselist = this.feeds.filter(function(p) {
                        return p.bedrooms >= 3;
                    });
                }

                this.$navigateTo(HouseList, {
                    transition: {},
                    transitionIOS: {},
                    transitionAndroid: {},
                    props: {
                        houselist: this.houselist,

                        $delegate: this
                    }
                });
            }
        },

        async mounted() {
            this.username = global.username;

            var response = await fetch(global.rootURL + "/house/json", {
                method: "GET",
                credentials: "same-origin"
            });
            if (response.ok) {
                this.feeds = await response.json();
                console.log(JSON.stringify(this.feeds));
            } else {
                console.log(response.statusText);
            }

            this.feedsHighlight = this.feeds.filter(function(p) {
                return p.box == true;
            });
        },

        data() {
            return {
                username: "",
                feeds: [],
                feedsHighlight: [],
                houselist: [],
                myrentals: [],

                estates: [
                    "City One Shatin",
                    "Festival City",
                    "Whampoa Garden",
                    "Island Resort"
                ],

                bedrooms: ["bedrooms <= 2 ", "bedroom >= 3"]
            };
        }
    };
</script>

<style scoped>
    .left {
        text-align: left;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>