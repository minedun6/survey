<template>
    <div class="row form-group">
        <div slot="type" class="col-md-1" style="top: 5px; left: 6%;">
            <input type="checkbox" disabled/>
        </div>
        <div slot="input" class="col-md-8">
            <input type="text" class="form-control" v-model="choice.text"/>
        </div>
        <div slot="actions">
            <div class="col-md-1">
                <input type="checkbox" autocomplete="off" v-model="choice.canComment"
                       style="display: none;">
                <span :class="choice.canComment ? 'glyphicon glyphicon-comment active' : 'glyphicon glyphicon-comment'"
                        @click="toggleCanComment(choice)"
                      style="cursor: pointer; top: 10px;"></span>
            </div>
            <div class="col-md-1">
            <span class="glyphicon glyphicon-trash"
                  @click="deleteChoice({question, choice})"
                  style="cursor: pointer; top: 10px; right: 100%;"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Choice from './Choice.vue';

    export default Choice.extend({
        methods: {
            ...mapActions({
                toggleCanComment: 'survey/toggleCanComment',
                deleteChoice: 'survey/deleteChoice'
            })
        }
    })
</script>

<style scoped>

</style>