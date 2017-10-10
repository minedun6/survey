<template>
    <div class="inner-template">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="ipad">
                <div class="ipad-content">
                    <div class="ipad-header"></div>
                    <grid></grid>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Grid from './Grid.vue';

    export default {
        components: {
            Grid
        }
    }
</script>

<style>
    .inner-template > div {
        padding: 0 !important;
    }

    .ipad {
        width: 1270px;
        height: 852px;
        margin: 1px auto;
        padding-top: 45px;
        border: 1px solid #a0a3aa;
        border-radius: 62px;
        background: url(../../../../images/iPad.png) center no-repeat;
    }

    .ipad-content {
        position: relative;
        overflow: hidden;
        top: -1px;
        left: -2px;
        width: 1023px;
        height: 767px;
        margin: 0 auto 0 auto;
        border: 1px solid #a0a3aa;
        background: no-repeat center !important;
    }

    .ipad-header {
        position: absolute;
        width: 1022px;
        height: 80px;
        background: url(../../../../images/ipad-header.png) no-repeat;
        opacity: .5;
    }
    .ipad-grid{
        width: 994px;
        height: 664px;
        margin: 85px auto 0;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        border: 1px dashed;
    }
    .cell {
        border: 1px solid #eee;
    }
    .tile{
        position: absolute;
        display: inline-block;
        width: 126px;
        height: 126px;
        background: #15a4fa;
        margin: 3px;
        overflow: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
</style>