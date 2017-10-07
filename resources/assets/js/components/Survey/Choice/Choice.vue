<template>
    <div class="form-group">
        <slot name="iType">
        </slot>
        <slot name="input">
        </slot>
        <slot name="actions">

        </slot>
    </div>
</template>

<script>
    export default Vue.extend({
        data() {
            return {
                choice: {
                    text: '',
                    canComment: false
                }
            }
        },
        methods: {
            triggerChoiceCanBeCommented() {
                let choice = this.choice;
                eventHub.$emit('choice-can-be-comment-toggle', {choice} );
            }
        }
    });
</script>

<style scoped>
    .active {
        color: #15a4fa;
    }
</style>