<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading text-center">
                        <survey-title></survey-title>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <questions :data="ui.questions"></questions>
                <dropzone></dropzone>
            </div>
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Question types :</div>
                    <div class="panel-body" id="draggable-questions-type">
                        <question-types :data="ui.questionsType"></question-types>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                ui: {
                    questions: [],
                    questionsType: [
                        {
                            key: 'multiple',
                            label: 'Multiple Choice'
                        },
                        {
                            key: 'single',
                            label: 'Single Choice'
                        },
                        {
                            key: 'scale',
                            label: 'Scale'
                        },
                        {
                            key: 'free',
                            label: 'Free'
                        },
                    ]
                }
            }
        }
    }
</script>

<style scoped>


</style>
