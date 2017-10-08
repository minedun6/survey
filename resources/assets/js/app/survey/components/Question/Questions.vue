<template>
    <div class="questions">
        <div v-for="(q, index) in questions" class="row">
            <question :question="q">
            </question>
        </div>
    </div>
</template>

<script>
    import {EventBus} from './../../../../events.js'
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                questions: 'survey/questions'
            })
        }
    }
</script>

<style scoped>

</style>