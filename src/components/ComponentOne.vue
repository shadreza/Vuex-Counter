<template>
    <div>
        <!-- <h2>ComponentOne</h2> -->
        <ComponentTwo />
    </div>
</template>

<script>
    import ComponentTwo from './ComponentTwo'
    export default {
        name: 'ComponentOne',
        components : {
            ComponentTwo
        }
    }
</script>

<style scoped>

</style>