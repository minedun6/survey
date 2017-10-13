<template>
    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">
                        <div slot="title">
                            <h4>Create new widget</h4>
                        </div>
                    </h4>
                </div>
                <div class="modal-body">
                    <div slot="body">
                        <form class="form-horizontal">
                            <fieldset>
                                <!-- Text input-->
                                <div class="form-group">
                                    <label class="col-md-4 control-label" for="title">Widget title</label>
                                    <div class="col-md-4">
                                        <input type="text"
                                               id="title"
                                               class="form-control input-md"
                                               v-model="title">
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <div slot="footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="createWidget({title})">Save changes
                        </button>
                    </div>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>

<script>
    import Modal from './../../global/Modal';

    export default Modal.extend({
        data() {
            return {
                title: ''
            }
        },
        methods: {
            createWidget(data) {
                this.createNewWidget(data);
                this.purgeData();
                $(this.$el).modal('hide');
            },
            purgeData() {
                this.title = '';
            }
        }
    })
</script>

<style scoped>

</style>