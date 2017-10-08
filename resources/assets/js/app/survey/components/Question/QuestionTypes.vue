<template>
    <div>
        <div v-for="(type, index) in questionTypes" class="row">
            <question-type :type="type">
                {{ type.label }}
            </question-type>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                questionTypes: 'survey/questionTypes'
            })
        },
    };
</script>

<style scoped>

</style>