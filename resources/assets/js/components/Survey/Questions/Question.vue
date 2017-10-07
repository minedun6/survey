<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title pull-left">Question <span v-text="(index + 1)"></span> :
                <span></span>
            </h4>
            <button class="btn btn-danger btn-xs pull-right" @click="remove(index)">
                <span class="glyphicon glyphicon-trash"></span>
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
                               v-model="title"
                        />
                    </div>
                </div>
                <div class="col-md-2" style="top: 5px;">
                    <input id="newQuestionMandatory"
                           type="checkbox"
                           v-model="mandatory"
                    >
                    <label for="newQuestionMandatory">Mandatory</label>
                </div>
            </div>
            <!-- List of choices -->
            <choices :data="question.choices" :type="question.type.questionType">

            </choices>
            <!---->
        </div>
    </div>
</template>

<script>
    export default {
        props: ['question', 'index'],
        mounted() {
            $('html, body').animate({scrollTop: $('#app').height() - this.$el.clientHeight}, "slow");
        },
        data() {
            return {
                title: '',
                mandatory: false
            }
        },
        methods: {
            remove(index) {
                this.$emit('deleted', index)
            }
        }
    }
</script>

<style scoped>

</style>