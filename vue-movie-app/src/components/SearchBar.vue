<template>
    <div>
        <v-text-field v-model="title" outlined @keypress.enter="searchMovies">
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>
            <template v-slot:append>
                <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="primary"
                    indeterminate/>
            </template>
        </v-text-field>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            title: "",
            loading: false
            
        }
    },
    methods: {
        async searchMovies() {
            this.loading = true;
            const res = await axios.get(`http://www.omdbapi.com?&apikey=9d38c929&s=${this.title}`);
            console.log(res)
            this.loading = false;
            
        }
    }
}
</script>

<style>

</style>