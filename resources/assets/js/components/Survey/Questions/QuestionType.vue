<template>
    <div class="col-md-3">
        <div class="badge ui-draggable">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type']
    }
</script>

<style scoped>

</style>