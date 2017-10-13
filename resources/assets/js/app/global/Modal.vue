<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">
                        <div slot="title">

                        </div>
                    </h4>
                </div>
                <div class="modal-body">
                    <div slot="body">

                    </div>
                </div>
                <div class="modal-footer">
                    <div slot="footer">

                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>
    import {mapActions} from 'vuex'

    export default Vue.extend({
        methods: {
            ...mapActions({
                createNewWidget: 'dashboard/createNewWidget'
            })
        }
    })
</script>

<style scoped>

</style>