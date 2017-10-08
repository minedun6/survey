<template>
    <div class="form-group">
        <div class="col-md-offset-1" style="margin-left: 9%;">
            <button class="btn btn-xs btn-primary" @click="addChoice(question)">
                <i class="glyphicon glyphicon-plus-sign"></i> New Choice
            </button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: ['question'],
        methods: {
            ...mapActions({
                addChoice: 'survey/addChoice'
            })
        }
    }
</script>

<style scoped>

</style>