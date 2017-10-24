<template>
    <span class="tile"></span>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';
    import resizable from 'jquery-ui/ui/widgets/resizable';
    import draggable from 'jquery-ui/ui/widgets/draggable';

    export default {
        data() {
            return {
                tileResizing: {
                    w: 66,
                    h: 66
                }
            }
        },
        computed: {
            ...mapGetters({
                overlapDrag: 'briefcase/overlapDrag',
                overlapResize: 'briefcase/overlapResize'
            })
        },
        mounted() {
            let _this = this;
            $('.tile').draggable({
                containment: ".ipad-grid",
                cursor: "move",
                scroll: false,
                grid: [_this.tileResizing.w, _this.tileResizing.h],
                drag: function (e, ui) {
                    _this.checkOverlapDrag(ui);
                    return !_this.overlapDrag;
                }
            }).resizable({
                containment: ".ipad-grid",
                grid: [_this.tileResizing.w, _this.tileResizing.h],
                minWidth: _this.tileResizing.w,
                minHeight: _this.tileResizing.h,
                start: function (e, ui) {
                    _this.tileResizing.w = $(this).width();
                    _this.tileResizing.h = $(this).height();
                },
                resize: function (event, ui) {
                    let width = $(this).width()
                    let height = $(this).height()
                    let offset = $(this).offset()
                    _this.checkOverlapResize({
                        width, height, offset
                    });
                    if (_this.overlapResize) {
                        $(this).resizable('option', 'maxWidth', _this.tileResizing.w)
                        $(this).resizable('option', 'maxHeight', _this.tileResizing.h)
                    } else {
                        _this.tileResizing.w = $(this).width()
                        _this.tileResizing.h = $(this).height()
                    }
                },
                stop: function (e, ui) {
                    $(this).resizable('option', 'maxWidth', 1024);
                    $(this).resizable('option', 'maxHeight', 768);
                }
            })
        },
        methods: {
            ...mapActions({
                checkOverlapDrag: 'briefcase/checkOverlapDrag',
                checkOverlapResize: 'briefcase/checkOverlapResize'
            })
        }
    }
</script>

<style>

</style>