<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title pull-left">
                        Dashboard
                        <small>widgets</small>
                    </h4>
                    <button class="btn btn-sm btn-default pull-right" data-toggle="modal" data-target=".modal">
                        New Widget
                    </button>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12">
                            <create-widget-modal></create-widget-modal>
                            <widgets></widgets>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Widgets from './Widgets';
    import CreateWidgetModal from './CreateWidgetModal';

    export default {
        components: {
            Widgets, CreateWidgetModal
        },
        methods: {

        }
    }
</script>

<style scoped>
    .panel-heading h4 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        width: 75%;
        padding-top: 8px;
    }
</style>