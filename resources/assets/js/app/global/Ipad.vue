<template>
    <div class="ipad">
        <div class="content">
            <div class="ipad-header"></div>
            <div class="ipad-grid">
                <div class="cell">
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                    <div class="horizental-ligne"></div>
                </div>
                <div class="cell">
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                    <div class="vertical-ligne"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .ipad{
        width: 68%;
        height: 852px;
        margin: 1px auto;
        padding-top: 45px;
        border: 1px solid #a0a3aa;
        border-radius: 62px;
        background: url(../../../../../public/images/iPad.png) center no-repeat;
    }
    .content{
        position: relative;
        overflow: hidden;
        top: -1px;
        left: -2px;
        width: 1023px;
        height: 767px;
        margin: 0 auto 0 auto;
        border:1px solid #a0a3aa;
        background: no-repeat center !important;
    }
    .ipad-header {
        position: absolute;
        width: 1022px;
        height: 80px;
        background: url(../../../../../public/images/ipad-header.png) no-repeat;
        opacity: .5;
    }
    .ipad-grid {
        position: relative;
        margin: 87px auto 0 auto;
        width: 994px;
        height: 664px;
        border: Dashed 1px #eee;
    }
    .cell {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .horizental-ligne {
        width: 100%;
        height: 1px;
        margin-top: 65px;
        border: none;
        background-color: #eee;
    }
    .vertical-ligne {
        width: 1px;
        height: 100%;
        border: none;
        background-color: #eee;
        margin-left: 65px;
        float: left;
    }
</style>