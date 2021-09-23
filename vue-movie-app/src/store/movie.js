import axios from "axios"
export default {
   state: () => ({
       title: "",
       loading: false
   }),
   getters: {},
   mutations: {}, // 비동기 처리가 가능하지 않다.
   actions: { // 비동기 처리가 가능하다.
    async searchMovies({state}) {
        state.loading = true;
        const res = await axios.get(`http://www.omdbapi.com?&apikey=9d38c929&s=${state.title}`);
        console.log(res)
        state.loading = false;
        
    }
   } 
}