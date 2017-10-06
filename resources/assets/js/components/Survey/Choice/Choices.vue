<template>
    <div class="row" id="choices-area">

    </div>
</template>

<script>
    import Collection from '../../../Collection';
    import NewChoice from './NewChoice';
    import Choice from './Choice'

    export default Collection.extend({
        components: { Choice, NewChoice }

    })
</script>

<style scoped>

</style>