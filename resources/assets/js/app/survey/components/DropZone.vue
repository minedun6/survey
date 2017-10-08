<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div class="dropzone" id="droppable-area">
                Just drag question type to create survey questions ...
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import droppable from 'jquery-ui/ui/widgets/droppable'

    export default {
        methods: {
            ...mapActions({
                addQuestion: 'survey/addQuestion'
            })
        },
        mounted() {
            let _this = this;
            $('#droppable-area').droppable({
                classes: {
                    "ui-droppable-hover": "drop"
                },
                drop: function (event, ui) {
                    let draggable = ui.draggable;
                    let type = draggable.attr('data-question-type');
                    // call a mutation to commit action
                    _this.addQuestion({
                        title: '',
                        mandatory: false,
                        type: type,
                        choices: [
                            {text: '', canComment: false},
                            {text: '', canComment: false},
                            {text: '', canComment: false}
                        ]
                    })
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