<template>
    <div class="container">
        <h4>History</h4>
        <div class="flex">
            <p class="numbers" v-for="(number, index) in history" :key="index" :class="activeIndexes(parseInt(value)).includes(index) && 'bold'">
                {{number}}
            </p>
        </div>
        <input type="number" placeholder="Search By Index" v-model="value">
    </div>
</template>

<script>

    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'HistoryVue',
        computed: {
            ...mapState(["history"]),
            ...mapGetters(["activeIndexes"])
        },
        data () {
            return {
                value : 0
            }
        }
    }
</script>

<style scoped>
    input {
        text-align: center;
    }
    .container {
        margin-top: 7rem;
    }
    .flex {
        display: flex;
        text-align: center;
        width: 25rem;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }
    .numbers {
        margin: 20px;
    }
    .bold {
        font-weight: 900;
    }
</style>