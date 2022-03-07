<template>
    <div>
        <ComponentFour />
        <HistoryVue />
    </div>
</template>

<script>
    import ComponentFour from './ComponentFour'
    import HistoryVue from './HistoryVue'
    export default {
        name: 'ComponentThree',
        components : {
            ComponentFour,
            HistoryVue
        }
    }
</script>

<style scoped>

</style>