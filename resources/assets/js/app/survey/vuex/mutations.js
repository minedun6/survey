export const saveSurvey = (state) => {
    console.log(state.questions);
};

export const addQuestion = (state, question) => {
    state.questions.push(question);
};

export const deleteQuestion = ({questions}, question) => {
    questions.splice(questions.indexOf(question), 1);
};

export const addChoice = (state, question) => {
    question.choices.push({
        canComment: false,
        title: ''
    });
};

export const deleteChoice = (state, {question, choice}) => {
    question.choices.splice(question.choices.indexOf(choice), 1);
};

export const toggleCanComment = (state, choice) => {
    choice.canComment = !choice.canComment;
};