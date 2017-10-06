<template>
    <div>
        <div v-for="(q, index) in items" class="row">
            <question :question="q" :index="index" @deleted="remove(index)">
            </question>
        </div>
    </div>
</template>

<script>
    import Collection from '../../../Collection'
    import Question from './Question'

    export default Collection.extend({
        components: { Question },
        mounted(){
            let vm = this;
            eventHub.$on('question-dropped', (type) => vm.add(vm.newQuestionInstance(type)))
        },
        methods: {
            newQuestionInstance(type) {
                return {
                    type: type,
                    questionText: '',
                    mandatory: true,
                    choices: []
                }
            }
        }
    })
</script>

<style scoped>

</style>