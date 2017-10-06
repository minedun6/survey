<template>
    <div>
        <div v-for="(type, index) in items" class="row">
            <question-type :type="type">
                {{ type.label }}
            </question-type>
        </div>
    </div>
</template>

<script>
    import Collection from '../../../Collection'
    import QuestionType from './QuestionType'

    export default Collection.extend({
        components: { QuestionType }
    });
</script>

<style scoped>

</style>