import { createSlice } from '@reduxjs/toolkit';


const myQuestions = [
    {
      word: 'Luonto',
      correctAnswer: 'Nature',
      options: ['Environment', 'Nature', 'Landscape', 'Country', 'Ecosystem'],
    },
    {
      word: 'Ilmasto',
      correctAnswer: 'Climate',
      options: ['Climate', 'Season', 'Temperature', 'Forecast', 'Rain'],
    }
];

const initialState = {
  open: false, // Question window state
  selectedQuestionNumber: 0, // Current question index
  selectedQuestion: {}, // Current question details
  questions: myQuestions, // Array of question objects (imported from temp.js)
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
    }
  },
});

export const {
  setOpen,
  setSelectedQuestionNumber,
  setSelectedQuestion,
  setQuestions,
  setResult
} = gameSlice.actions;

export default gameSlice.reducer;