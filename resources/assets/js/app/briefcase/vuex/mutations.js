export const addTile = (state) => {
    state.grid.tiles.push({});
};
// Check if active tile (being dragged) intersects with another existing tile
export const checkOverlapDrag = (state, {helper, offset}) => {
    let overlap = false;
    let draggingLeft = offset.left;
    let draggingTop = offset.top;
    let draggingRight = draggingLeft + parseInt(helper.css("width").slice(0, -2));
    let draggingBottom = draggingTop + parseInt(helper.css("height").slice(0, -2));

    $(".ui-draggable:not(.ui-draggable-dragging)").each(function () {
        let draggableLeft = $(this).offset().left;
        let draggableTop = $(this).offset().top;
        let draggableRight = draggableLeft + parseInt($(this).css("width").slice(0, -2));
        let draggableBottom = draggableTop + parseInt($(this).css("height").slice(0, -2));
        overlap = overlap || !(draggableLeft >= draggingRight
            || draggableRight <= draggingLeft
            || draggableTop >= draggingBottom
            || draggableBottom <= draggingTop);

        if ($(this).hasClass('tile-add'))
            overlap = false;
    });
    state.grid.overlapDrag = overlap;
};
// Check if active tile (being resized) intersects with another existing tile
export const checkOverlapResize = (state, {helper, offset}) => {

};

export const checkOverlapToAdd = (state, {helper, offset}) => {

};