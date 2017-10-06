<template>
    <div>
        <span v-if="!editingMode">
            {{ surveyTitle }}
            <button class="btn btn-xs btn-danger" @click="toggleSurveyChangeTitle">
                <span class="glyphicon glyphicon-edit"></span>
            </button>
        </span>
        <span v-else>
            <div class="form-group has-feedback ">
                <input type="text" class="form-control" v-model="surveyTitle"/>
                <a href="#" @click="toggleSurveyChangeTitle">
                    <span class="glyphicon glyphicon-check form-control-feedback">
                    </span>
                </a>
            </div>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                surveyTitle: 'Empty Survey',
                editingMode: false
            }
        },
        methods: {
            toggleSurveyChangeTitle() {
                this.editingMode = !this.editingMode;
            }
        }
    }
</script>

<style scoped>
    .form-control-feedback {
        pointer-events: initial;
    }
</style>