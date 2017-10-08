<template>
    <div class="row form-group">
        <div slot="type" class="col-md-1" style="top: 5px; left: 6%;">
        </div>
        <div slot="input" class="col-md-8">
        </div>
        <div slot="actions">
        </div>
    </div>
</template>

<script>
    export default Vue.extend({
        props: ['choice', 'question']
    })
</script>

<style>
    .active {
        color: #15a4fa;
    }
</style>