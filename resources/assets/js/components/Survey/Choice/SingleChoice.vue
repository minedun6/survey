<template>
    <div class="row form-group">
        <div slot="iType" class="col-md-1" style="top: 5px; left: 6%;">
            <input type="radio" disabled/>
        </div>
        <div slot="input" class="col-md-8">
            <input type="text" class="form-control"/>
        </div>
        <div slot="actions">
            <div class="col-md-1">
                <input type="checkbox" autocomplete="off"
                       style="display: none;">
                <span class="glyphicon glyphicon-comment"
                      style="cursor: pointer; top: 10px;"></span>
            </div>
            <div class="col-md-1">
            <span class="glyphicon glyphicon-trash"
                  style="cursor: pointer; top: 10px; right: 100%;"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import Choice from './Choice';

    export default Choice.extend ({

    });
</script>
