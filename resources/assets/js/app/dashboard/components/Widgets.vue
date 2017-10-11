<template>
    <div class="row widgets">
        <div class="col-md-4 sortable" v-for="chunk in chunkedWidgets">
            <widget v-for="(widget, index) in chunk" :widget="widget" :key="index" :index="index"></widget>
            <div class="widget ui-sortable-empty"></div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import _ from 'lodash';
    import sortable from 'jquery-ui/ui/widgets/sortable'
    import Widget from './Widget.vue';

    export default {
        components: {
            Widget
        },
        mounted() {
            let el = $('.widgets');
            el.sortable({
                connectWith: ".sortable",
                items: ".widget",
                opacity: 0.8,
                scroll: false,
                cursor: 'move',
                handle: '.handle',
                coneHelperSize: true,
                placeholder: 'ui-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                cancel: ".ui-sortable-empty",
                revert: 250, // animation in milliseconds
                start: function (event, ui) {
                    ui.item.toggleClass("ui-sortable-placeholder");
                },
                stop: function (event, ui) {
                    ui.item.toggleClass("ui-sortable-placeholder");
                },
                update: function (b, c) {
                    console.log($(this));
                    let data = $(this).sortable('serialize');
                    console.log("JSON: "+JSON.stringify(data));
                    /*if (c.item.prev().hasClass("ui-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }*/
                }
            }).disableSelection();
        },
        computed: {
            ...mapGetters({
                widgets: 'dashboard/widgets'
            }),
            chunkedWidgets: function () {
                return _.chunk(this.widgets, 3);
            }
        }
    }
</script>

<style>
    .ui-sortable-empty {
        box-shadow: none !important;
        height: 60px;
    }
</style>