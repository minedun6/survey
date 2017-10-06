<template>
    <div class="dropzone" id="droppable-area">
        Just drag question type to create survey questions ...
    </div>
</template>

<script>
    import sortable from 'jquery-ui/ui/widgets/sortable'
    import droppable from 'jquery-ui/ui/widgets/droppable'

    export default {
        name: 'dropzone',
        mounted: function () {
            $('#droppable-area').droppable({
                classes: {
                    "ui-droppable-hover": "drop"
                },
                drop: function (event, ui) {
                    let draggable = ui.draggable;
                    let questionType = draggable.attr('data-question-type');
                    // Add a new blank question object instance to the questions array
                    eventHub.$emit('question-dropped', {questionType})
                }
            });
        }
    }
</script>

<style scoped>
    .dropzone {
        height: 12em;
        margin-bottom: 20px;
        color: #ccc;
        border: 2px dashed #ccc;
        line-height: 12em;
        text-align: center
    }

    .drop {
        color: #222;
        border-color: #222;
    }
</style>