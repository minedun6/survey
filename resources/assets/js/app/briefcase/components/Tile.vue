<template>
    <span class="tile"></span>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    import resizable from 'jquery-ui/ui/widgets/resizable';
    import draggable from 'jquery-ui/ui/widgets/draggable';

    export default {
        computed: {
            ...mapGetters({
                overlapDrag: 'briefcase/overlapDrag'
            })
        },
        mounted() {
            let _this = this;
            $('.tile').draggable({
                containment: ".ipad-grid",
                cursor: "move",
                scroll: false,
                grid: [66, 66],
                drag: function (e, ui) {
                    _this.checkOverlapDrag(ui);
                    return !_this.overlapDrag;
                }
            }).resizable({
                containment: ".ipad-grid",
                grid: [66, 66],
                minWidth: 66,
                minHeight: 66,
                resize: function (event, ui) {
                    if (ui.position.left + ui.size.width > $('.tile').left) {
                        $(this).resizable({maxWidth: ui.size.width});
                    }
                }
            })
        },
        methods: {
            ...mapActions({
                checkOverlapDrag: 'briefcase/checkOverlapDrag'
            })
        }
    }
</script>

<style>

</style>