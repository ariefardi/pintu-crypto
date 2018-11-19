<template>
    <v-toolbar flat scroll-off-screen>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-img :src=logoImage ></v-img>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn>Download</v-btn>
    </v-toolbar>
</template>

<script>
import logoImage from '../../assets/tokopedia.png'

</script>


<style>


</style>