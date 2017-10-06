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
        props: ['type']
    });
</script>

<style scoped>

</style>