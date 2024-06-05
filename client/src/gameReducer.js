import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false, // Question window state
  selectedQuestionNumber: 0, // Current question index
  selectedQuestion: {}, // Current question details
  questions: [], // Array of question objects (likely imported from temp.js)
  result : false
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
    setSelectedQuestionNumber(state, action) {
      state.selectedQuestionNumber = action.payload;
    },
    setSelectedQuestion(state, action) {
      state.selectedQuestion = action.payload;
    },
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setResult(state, action){
      state.result = action.payload;
    },
    updateProgress (state, action) {
      const { id, finalResult } = action.payload;
      const questionToUpdate = state.questions.find(n => n.id === id);
      const updatedQuestion = { ...questionToUpdate, progress : 'success'};
      console.log('updatedQuestion : ', updatedQuestion);
      setQuestions(state.questions.map(q => q.id !== id ? q : updatedQuestion)); 
    }
  },
});

export const {
  setOpen,
  setSelectedQuestionNumber,
  setSelectedQuestion,
  setQuestions,
  setResult,
  updateProgress
} = gameSlice.actions;

export default gameSlice.reducer;