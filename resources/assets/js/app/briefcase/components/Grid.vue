<template>
    <div class="ipad-grid">
        <div class="cell" v-for="i in 150"></div>
        <tiles>

        </tiles>
    </div>
</template>

<script>
    import Tiles from './Tiles.vue';

    export default {
        components: {
            Tiles
        }
    }
</script>

<style>

</style>