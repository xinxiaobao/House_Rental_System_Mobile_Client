<template>
    <Page @navigatedTo="onNavigatedTo">

        <ActionBar title="Login" />

        <ScrollView orientation="horizontal">



            <StackLayout orientation="vertical" height="400" margin="10"
                class="form">

                <TextField v-model="username" hint="username"
                    class="input input-border" />

                <TextField v-model="password" hint="password"
                    class="input input-border" />


                <Button text="Login" @tap="onButtonTapLogin"
                    class="btn btn-primary btn-rounded-lg" />
            </StackLayout>

        </ScrollView>
    </Page>


</template>

<script>
    export default {
        methods: {

            onNavigatedTo() {
                if (this.logoff) {
                    this.logoff = "";
                    this.$navigateBack();
                }

                console.log(this.logoff)
            },

            async onButtonTapLogin() {
                console.log(this.username + this.password);

                var response = await fetch(global.rootURL +
                    "/user/login", {
                        method: "POST",
                        credentials: "same-origin",
                        // body: new FormData(oFormElement),

                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        body: "username=" +
                            encodeURIComponent(this.username) +
                            "&password=" +
                            encodeURIComponent(this.password)
                    });
                console.log(response.statusText);
                if (response.ok) {
                    // var data = await response.json();
                    await confirm({
                        title: "Login success",
                        message: "",
                        okButtonText: "Yes "
                    });
                    global.username = this.username;
                    this.$navigateBack();
                    // location.replace('/');
                } else if (response.status == 401) {
                    var data = await response.text();
                    await confirm(data);
                } else {
                    await confirm(response.statusText);
                }
            }
        },

        props: ["logoff", "$delegate"],
        data() {
            return {};
        }
    };
</script>

<style>
</style>