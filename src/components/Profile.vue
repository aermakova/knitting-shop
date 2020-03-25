<template>
    <div class="profile">
        <v-container grid-list-md>
            <v-layout>

                <h1>Здесь мой профиль!</h1>
                <v-flex lg12>
                    <v-card class="mx-auto" tile >
                        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                        </v-img>
                    </v-card>
                    <v-expansion-panel>
                        <v-expansion-panel-content
                                v-for="(item,i) in 5"
                                :key="i"
                        >
                            <template v-slot:header>
                                <div>Item</div>
                            </template>
                            <v-card>
                                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'profile'
    }
</script>
<style>

</style>