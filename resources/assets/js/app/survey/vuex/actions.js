export const saveSurvey = ({commit, dispatch}) => {
    commit('saveSurvey');
};

export const addQuestion = ({commit, dispatch}, payload) => {
    commit('addQuestion', payload);
};

export const deleteQuestion = ({commit, dispatch}, payload) => {
    commit('deleteQuestion', payload);
};

export const addChoice = ({commit, dispatch}, question) => {
    commit('addChoice', question);
};

export const toggleCanComment = ({commit, dispatch}, payload) => {
    commit('toggleCanComment', payload);
};

export const deleteChoice = ({commit, dispatch}, data) => {
    commit('deleteChoice', data)
};