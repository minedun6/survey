<template>
    <div class="col-md-3">
        <div class="badge ui-draggable" :data-question-type="type.key">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import draggable from 'jquery-ui/ui/widgets/draggable'

    export default {
        props: ['type'],
        mounted() {
            $('.ui-draggable').draggable({
                cursor: "move",
                helper: "clone",
                revert: function (dropped) {
                    let $draggable = $(this),
                        hasBeenDroppedBefore = $draggable.data('hasBeenDropped'),
                        wasJustDropped = dropped && dropped[0].id === "droppable-area";
                    if (wasJustDropped) {
                        // don't revert, it's in the droppable
                        return false;
                    } else {
                        if (hasBeenDroppedBefore) {
                            // don't rely on the built in revert, do it yourself
                            $draggable.animate({top: 0, left: 0}, 'slow');
                            return false;
                        } else {
                            // just let the build in work, although really, you could animate to 0,0 here as well
                            return true;
                        }
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>