<template>
    <div>
        <h2>Vuex Counter</h2>
        <h1 class="counter">
            {{ counter }}
        </h1>
        <button  @click="subtractFromCounter(parseInt(value))">-</button>
        <input type="number" v-model="value">
        <button @click="addToCounter(parseInt(value))">+</button>
        <div class="add-rand-number-div">
            <button @click="addRandomNumberToCounter" class="btn"> Add By Random Number </button>
        </div>
    </div>
</template>

<script>

    import {mapState, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'CounterPart',
        data () {
            return {
                value : 1,
            }
        },
        computed : {
            ...mapState(["counter"])
        },
        methods : {
            ...mapMutations(["addToCounter", "subtractFromCounter"]),
            ...mapActions(["addRandomNumberToCounter"])
        }
    }
</script>

<style scoped>
    .counter {
        font-size: 5rem;
    }
    button {
        border-radius: 100%;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;
    }
    input {
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }
    .btn {
        border-radius: 0.5rem;
        width: auto;
        background-color: #41B983;
        margin-top: 1rem;
        color: white;
        cursor: pointer;
    }
</style>