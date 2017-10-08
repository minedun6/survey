<template>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title pull-left">Question
                    <span></span>
                </h4>
                <button class="btn btn-danger btn-xs pull-right">
                    <span class="glyphicon glyphicon-trash" @click="deleteQuestion(question)"></span>
                </button>
                <div class="clearfix"></div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-10 ">
                        <div class="form-group">
                            <input type="text"
                                   class="form-control"
                                   placeholder="Question Title"
                                   v-model="question.text"
                            />
                        </div>
                    </div>
                    <div class="col-md-2" style="top: 5px;">
                        <input id="newQuestionMandatory"
                               type="checkbox"
                               v-model="question.mandatory"
                        >
                        <label for="newQuestionMandatory">Mandatory</label>
                    </div>
                </div>
                <!-- List of choices -->
                    <choices :choices="question.choices" :question="question"></choices>
                <!---->
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['question'],
        methods: {
            ...mapActions({
                deleteQuestion: 'survey/deleteQuestion'
            })
        }
    }
</script>

<style scoped>

</style>