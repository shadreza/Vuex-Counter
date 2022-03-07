<template>
    <div>
        <h2 v-if="counter > 50">Component Two is greater than 50</h2>
        <ComponentThree />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ComponentThree from './ComponentThree'
    export default {
        name: 'ComponentTwo',
        components : {
            ComponentThree
        },
        computed : {
            ...mapState(["counter"])
        }
    }
</script>

<style scoped>

</style>