<template>
    <div>
        <div class="row">
            <div class="col-md-9">
                <dropzone></dropzone>
                <questions></questions>
            </div>
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Question types :</div>
                    <div class="panel-body" id="draggable-questions-type">
                        <question-types></question-types>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="saveSurvey()">Save Survey</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                title: ''
            }
        },
        computed: {
            ...mapGetters({})
        },
        methods: {
            ...mapActions({
                saveSurvey: 'survey/saveSurvey'
            })
        }
    }
</script>

<style scoped>

</style>