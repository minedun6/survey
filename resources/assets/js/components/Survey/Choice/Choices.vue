<template>
    <div class="row" id="choices-area">
        <component :is="choiceType"></component>
        <component :is="choiceType"></component>
        <component :is="choiceType"></component>
        <div v-for="(choice, index) in items">
            <keep-alive>
                <component :is="choiceType"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Collection from '../../../Collection';
    import NewChoice from './NewChoice';

    export default Collection.extend({
        props: ['type'],
        mounted() {
            eventHub.$on('choice-can-be-comment-toggle', (choice) => {
                choice.choice.canComment = !choice.choice.canComment;
            })
        },
        computed: {
            choiceType() {
                let component = this.type + 'Choice'
                console.log(component);
                return component;
            }
        }
    })
</script>

<style scoped>

</style>