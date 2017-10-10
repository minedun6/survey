<template>
    <span class="tile"></span>
</template>

<script>
    import resizable from 'jquery-ui/ui/widgets/resizable';
    import draggable from 'jquery-ui/ui/widgets/draggable';

    export default {
        mounted() {
            $('.tile').draggable({
                containment: ".ipad-grid",
                cursor: "move",
                scroll: false,
                grid: [66, 66],
            }).resizable({
                containment: ".ipad-grid",
                grid: [66, 66],
                minWidth: 66,
                minHeight: 66,
            })
        }
    }
</script>

<style>

</style>