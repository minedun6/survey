export const addTile = state => {
  // this is the section where we check for the last position
  let tile = state.grid.tile;
  state.grid.tiles.push(tile);
};
// Check if active tile (being dragged) intersects with another existing tile
export const checkOverlapDrag = (state, { helper, offset }) => {
  let overlap = false;
  let draggingLeft = offset.left;
  let draggingTop = offset.top;
  let draggingRight = draggingLeft + parseInt(helper.css("width").slice(0, -2));
  let draggingBottom =
    draggingTop + parseInt(helper.css("height").slice(0, -2));

  $(".ui-draggable:not(.ui-draggable-dragging)").each(function() {
    let draggableLeft = $(this).offset().left;
    let draggableTop = $(this).offset().top;
    let draggableRight =
      draggableLeft +
      parseInt(
        $(this)
          .css("width")
          .slice(0, -2)
      );
    let draggableBottom =
      draggableTop +
      parseInt(
        $(this)
          .css("height")
          .slice(0, -2)
      );
    overlap =
      overlap ||
      !(
        draggableLeft >= draggingRight ||
        draggableRight <= draggingLeft ||
        draggableTop >= draggingBottom ||
        draggableBottom <= draggingTop
      );

    if ($(this).hasClass("tile-add")) overlap = false;
  });
  state.grid.overlapDrag = overlap;
};
// Check if active tile (being resized) intersects with another existing tile
export const checkOverlapResize = (state, { width, height, offset }) => {
  var overlap = false;
  var draggingLeft = offset.left;
  var draggingTop = offset.top;
  var draggingRight = draggingLeft + parseInt(width);
  var draggingBottom = draggingTop + parseInt(height);

  $(".ui-resizable:not(.ui-resizable-resizing)").each(function() {
    var draggableLeft = $(this).offset().left;
    var draggableTop = $(this).offset().top;
    var draggableRight = draggableLeft + parseInt($(this).css("width").slice(0, -2));
    var draggableBottom =draggableTop + parseInt($(this).css("height").slice(0, -2));

    overlap =
      overlap ||
      !(
        draggableLeft >= draggingRight ||
        draggableRight <= draggingLeft ||
        draggableTop >= draggingBottom ||
        draggableBottom <= draggingTop
      );
  });

  state.grid.overlapResize = overlap;
};

export const checkOverlapToAdd = (state, { width, height, offset }) => {
  let overlap = false;
  let draggingLeft = offset.left;
  let draggingTop = offset.top;
  let draggingRight = draggingLeft + parseInt(width);
  let draggingBottom = draggingTop + parseInt(height);

  $(".ui-resizable:not(:last-child)").each(function() {
    let draggableLeft = $(this).offset().left;
    let draggableTop = $(this).offset().top;
    let draggableRight =
      draggableLeft +
      parseInt(
        $(this)
          .css("width")
          .slice(0, -2)
      );
    let draggableBottom =
      draggableTop +
      parseInt(
        $(this)
          .css("height")
          .slice(0, -2)
      );

    overlap =
      overlap ||
      !(
        draggableLeft >= draggingRight ||
        draggableRight <= draggingLeft ||
        draggableTop >= draggingBottom ||
        draggableBottom <= draggingTop
      );
  });
  return overlap;
};

export const positionateTile = (state, {ui, tile, ref}) => {
  state.grid.tiles.find(t => t.id === tile.id).position.width = ui.position.left
  state.grid.tiles.find(t => t.id === tile.id).position.height = ui.position.top
}