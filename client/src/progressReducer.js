import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    streak: [],
  };

  const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
      setStreak(state, action) {
        state.streak = action.payload;
      },
      updateProgress (state, action) {
        const { id,color,status } = action.payload;
        const streakToUpdate = state.streak.find(n => n.id === id);
        const updatedStreakItem = { ...streakToUpdate, color : color, status : status };
        state.streak = state.streak.map(q => q.id === id ? updatedStreakItem : q);
      }
    },
  });
  
  export const {
    setStreak,
    updateProgress
  } = progressSlice.actions;
  
  export default progressSlice.reducer;