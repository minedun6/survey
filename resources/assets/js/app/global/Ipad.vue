<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="ipad">
                <div class="content">
                    <div class="ipad-header"></div>
                    <div class="ipad-grid">
                        <div class="cell">
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                            <div class="horizontal-line"></div>
                        </div>
                        <div class="cell">
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                            <div class="vertical-line"></div>
                        </div>
                        <div class="tile">
                            <div class="tile-title"></div>
                            <div class="tile-description"></div>
                            <div class="tile-voile tile-voile-active">
                                <div class="tile-icon-edit"></div>
                                <div class="tile-icon-delete"></div>
                            </div>
                        </div>
                        <div class="tile">
                            <div class="tile-title"></div>
                            <div class="tile-description"></div>
                            <div class="tile-voile tile-voile-active">
                                <div class="tile-icon-edit"></div>
                                <div class="tile-icon-delete"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import resizable from 'jquery-ui/ui/widgets/resizable';
    import draggable from 'jquery-ui/ui/widgets/draggable';

    export default {
        mounted() {
            $('.tile').draggable({
                containment: ".ipad-grid",
                cursor: "move",
                scroll: false,
                grid: [66, 66],
            }).resizable({
                containment: ".ipad-grid",
                grid: [66, 66],
                minWidth: 66,
                minHeight: 66,
            })
        }
    }
</script>

<style scoped>
    .ipad {
        width: 100%;
        height: 852px;
        margin: 1px auto;
        padding-top: 45px;
        border: 1px solid #a0a3aa;
        border-radius: 62px;
        background: url(../../../images/iPad.png) center no-repeat;
    }

    .content {
        position: relative;
        overflow: hidden;
        top: -1px;
        left: -2px;
        width: 80%;
        height: 767px;
        margin: 0 auto 0 auto;
        border: 1px solid #a0a3aa;
        background: no-repeat center !important;
    }

    .ipad-header {
        position: absolute;
        width: 100%;
        height: 80px;
        background: url(../../../images/ipad-header.png) no-repeat;
        opacity: .5;
    }

    .ipad-grid {
        position: relative;
        margin: 87px auto 0 auto;
        width: 994px;
        height: 664px;
        border: Dashed 1px;
    }

    .cell {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .horizontal-line {
        width: 100%;
        height: 1px;
        margin-top: 65px;
        border: none;
        background-color: #eee;
    }

    .vertical-line {
        width: 1px;
        height: 100%;
        border: none;
        background-color: #eee;
        margin-left: 65px;
        float: left;
    }

    .tile {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 126px;
        height: 126px;
        background: #03f;
        margin: 3px;
        overflow: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
</style>