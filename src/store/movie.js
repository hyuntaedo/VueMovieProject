//영화검색
import axios from 'axios'
export default({
	namespaced: true,
	state: () => ({
		movies : [],
		message: '',
		loading: false
	}),
	getters: {

	},
	mutations: {
		updateState(state,payload) {
			//['movies','message','loading']
			Object.keys(payload).forEach(key =>{
				state[key] = payload[key]
			})
		},
		resetMovies(state){
			state.movies = []
		}
	},
	actions: {
		async searchMovies({commit}, payload) {
			const {title, type, year} = payload
			const OMDB_API_KEY = '7035c60c'
			
			const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
			const {Search} = res.data
			commit('updateState',{
				movies: Search,
			})
		}
	}
})