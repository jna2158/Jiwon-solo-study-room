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
import { mapActions } from "vuex"
export default {
   
    computed: {
        title: {
            //getter
            get() { // 값을 얻어오는 역할 (store에서 데이터 가져오기)
                return this.$store.state.movie.title
            },

            //setter
            set(title) { // 양방향 데이터 바인딩을 위해 state 수정 (mutation의 도움을 받아서 title 수정)
                this.$store.commit('movie/updateState', {
                    title
                })
            }
        },
        loading() {
            console.log("aaaaa")
            return this.$store.state.movie.loading
        }
    },
    methods: {
        ...mapActions('movie', [
            'searchMovies'
        ])
    }
}
</script>

<style>

</style>