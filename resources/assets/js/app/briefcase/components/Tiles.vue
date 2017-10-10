<template>
    <span class="tiles">
        <tile v-for="(tile, index) in grid.tiles" :key="index" :tile="tile"></tile>
    </span>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Tile from './Tile.vue';

    export default {
        components: {
            Tile
        },
        computed: {
            ...mapGetters({
                grid: 'briefcase/grid'
            })
        }
    }
</script>

<style>
</style>