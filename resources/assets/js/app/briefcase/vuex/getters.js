export const grid = (state) => {
    return state.grid;
};

export const lastTile = ({grid}) => {
    return $(grid.tiles[grid.tiles.length - 1]);
};

export const overlapDrag = ({grid}) => {
    return grid.overlapDrag;
};