<template>
    <div class="row">
        <div v-for="(choice, index) in choices">
            <keep-alive>
                <component :is="component" :choice="choice" :question="question"></component>
            </keep-alive>
        </div>
        <new-choice :question="question"></new-choice>
    </div>
</template>

<script>

    export default {
        props: ['choices', 'question'],
        computed: {
            component() {
                return this.question.type + 'Choice';
            }
        }
    }
</script>

<style scoped>

</style>