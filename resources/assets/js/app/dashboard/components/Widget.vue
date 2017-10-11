<template>
    <div class="panel panel-default widget" :data-order="index">
        <div class="panel-heading handle">
            <div class="panel-title">
                <h4>Hello</h4>
            </div>
        </div>
        <div class="panel-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur nisi officia porro
                repellendus, tempora veniam voluptatibus! A corporis impedit itaque maiores, minus nesciunt numquam odit
                quas, rem, reprehenderit unde!</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['widget', 'index'],
        data() {
            return {
                title: ''
            }
        }
    }
</script>

<style>
    .handle {
        cursor: move;
    }
    .ui-sortable-placeholder {
        border: 2px dashed #eee;
        margin-bottom: 25px; }
</style>