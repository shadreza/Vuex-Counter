import axios from 'axios'
import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
        return {
            counter: 0,
            history : [0]
        }
    },
    mutations : {
        // can not be async
        addToCounter (state, payLoad) {
            state.counter = state.counter + payLoad
            state.history.push(state.counter)
        },
        subtractFromCounter (state, payLoad) {
            state.counter = state.counter - payLoad
            state.history.push(state.counter)
        }
    },
    actions : {
        // can be async at the same time call mutations
        async addRandomNumberToCounter (context) {
            const data = await axios.get("https://www.random.org/integers/?num=1&min=-10000&max=10000&col=1&base=10&format=plain&rnd=new")
            context.commit("addToCounter", data.data)
            // the main value is in data.data
        }
    },
    getters : {
        activeIndexes : (state) => (payload) => {
            let indexes = []
            state.history.forEach((number , index) => {
                if (number === payload) {
                    indexes.push(index)
                }
            });
            return indexes
        }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
