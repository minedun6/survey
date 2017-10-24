export const saveBriefcase = ({commit, dispatch}) => {
    //
};

export const addTile = ({commit, dispatch}) => {
    commit('addTile');
};

export const checkOverlapDrag = ({commit, dispatch}, ui) => {
    commit('checkOverlapDrag', ui);
};

export const checkOverlapResize = ({commit, dispatch}, ui) => {
    commit('checkOverlapResize', ui);
}